// default css
import "./reset.css"; // reset for css default settings

// react packages
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

// pages
import MyPage from "./pages/myPage";
import Community from "./pages/Community";
import Community_post from "./pages/Community_post";


function App() {
  const [posts, setPosts] = useState([]);

  function getPosts(){
    Axios.get('http://localhost:3001/printPost').then((res) => {
        setPosts(res.data);
        // console.log(posts);
    });
  }

  getPosts();

  return (
    <Routes>
      <Route path="/" element={<MyPage />}/>
      <Route path="/community" element={<Community/>}/>
      <Route path='/community/1' element={<Community_post url="/community/1" />}/>
      {
        posts.map((post) => {
            return <Route path={"/community/"+post.post_id} element={<Community_post url={post.post_id} title={post.title} name={post.user_name} writing={post.post_write} checklist_id={post.checklist_id}/>}/>})
      } 
    </Routes>
  );
}

export default App;
