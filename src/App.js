// default css
import "./reset.css"; // reset for css default settings

// react packages
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';

// pages
import MyPage from "./pages/MyPage";
import Community from "./pages/Community";
import Community_post from "./pages/Community_post";


function App() {
  const [posts, setPosts] = useState([]);
  const [checklist, setChecklist] = useState([]);

  function getPosts(){
    Axios.get('http://localhost:3001/printPost').then((res) => {
        setPosts(res.data);
        // console.log(posts);
    });
  }

  function getChecklist(){
    Axios.get('http://localhost:3001/getMyChecklist').then((res) => {
        setChecklist(res.data);
        // console.log(posts);
    });
  }

  

  useEffect(()=>{
    getPosts();
    getChecklist();

  }, []);

  return (
    <Routes>
      <Route path="/" element={<MyPage />}/>
      <Route path="/community" element={<Community/>}/>
      {/* <Route path='/community/1' element={<Community_post url="/community/1" />}/> */}
      {
        posts.map((post) => {
            return <Route path={"/community/"+post.post_id} element={<Community_post url={post.post_id} title={post.title} name={post.user_name} writing={post.post_write} checklist_id={post.checklist_id}/>}/>})
      } 
{/* 
      {
        checklist.map((post) => {
          return <Route path={"/myPage/"+checklist.checklist_id} element={<MyPage url={checklist.checklist_id} title={checklist.checklist_title} list={checklist.checklist_list}/>}/>})
      } */}
    </Routes>
  );
}

export default App;
