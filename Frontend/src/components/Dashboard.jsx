import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {


    const { id } = useParams();
    console.log("ID from useParams:", id);
    const [myPost, setMyPost] = useState(null);





    useEffect(() => {
        if (id) {
            fetch(`http://localhost:4000/dashboard/${id}`)
                .then(response => {
                    if (!response.ok) {
                        console.error("Response not OK:", response);
                    }

                    return response.json();
                })
                .then(myPost => {
                    console.log("Fetched data:", myPost);

                    setMyPost(myPost);
                })
                .catch(error => console.error("Error fetching data:", error));
        }
    }, []);




    if (!myPost) return <div>Loading.....</div>;


   



    return (

        <div className="mx-40">

            <div className="flex justify-center items-center mt-10 ">

                <h1 className="text-3xl font-bold">Your Blog Post</h1>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-10 ">

                {

                    myPost.map(item => (

                        <div className="flex justify-center items-center ">


                            <div className="border-[1px] border-gray-400 h-[350px] md:w-[220px] sm:w-[350px] rounded-2xl mt-14  hover:shadow-2xl hover:shadow-gray-500/50 ">


                                <div className="flex justify-center items-center">

                                    <img className="h-[180px] w-[200px] mt-2 rounded-2xl" src={`http://localhost:4000${item.cover}`} alt="sorry" />
                                </div>


                                <div className=" mt-3 ml-4 ">

                                    <p className="text-lg font-bold">{item.title}</p>

                                </div>



                                <div className="flex text-sm mt-2 ml-4 gap-2">

                                    <p className="text-gray-400 ">{item.name}</p>

                                    <date className="text-gray-400">{item.createdAt}</date>

                                </div>



                                <div className=" mt-2 ml-4">

                                    <p className="text-gray-400">{item.summary}</p>

                                </div>





                            </div>


                        </div>
                    ))
                }

            </div>

        </div>
    )
}


export default Dashboard;











