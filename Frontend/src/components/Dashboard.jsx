import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();
  const [myPost, setMyPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://blog-app-ve13.onrender.com/dashboard/${id}`)
        .then((response) => {
          if (!response.ok) {
            console.error("Response not OK:", response);
          }
          return response.json();
        })
        .then((data) => {
          setMyPost(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id]);

  if (!myPost) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-10">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Your Blog Posts</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {myPost.map((item) => (
          <div
            key={item._id}
            className="border border-gray-300 rounded-2xl p-4 hover:shadow-2xl transition duration-300 bg-white"
          >
            <div className="w-full h-40 overflow-hidden rounded-xl flex justify-center items-center">
              <img
                src={`https://blog-app-ve13.onrender.com${item.cover}`}
                alt="Post cover"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-bold text-gray-800 truncate">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1 truncate">
                {item.summary}
              </p>

              <div className="text-xs text-gray-400 mt-2">
                <p>{item.name}</p>
                <p>{new Date(item.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
