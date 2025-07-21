

import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SinglePost from './components/SinglePost';
import Signup from './components/Signup';
import { Routes,Route, Navigate } from 'react-router-dom';




function App() {
  
  return (
    <>
     
     <Routes>

      <Route path="/" element={<Layout/>}>,

     
<Route index element={<Navigate to="/home" />} />
<Route path="home" element={<Home/>}/>
<Route path="about" element={<About/>}/>
<Route path="contact" element={<Contact/>}/>
      <Route path="login" element={<Login/>}/>
<Route path="signup" element={<Signup/>}/>
<Route path="create" element={<CreatePost/>}/>
<Route path="/dashboard/:id" element={<Dashboard />} />


<Route path="/post/:id" element={<SinglePost/>}/>
      </Route>
      
     </Routes>
    </>
  )
}

export default App;
