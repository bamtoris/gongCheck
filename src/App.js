// default css
import "./reset.css"; // reset for css default settings

// react packages
import {Routes, Route} from 'react-router-dom';

// pages
import MyPage from "./pages/myPage";
import Community from "./pages/Community";
import Community_post from "./pages/Community_post";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MyPage />}/>
      <Route path="/community" element={<Community/>}/>
      <Route path='/community/1' element={<Community_post url="/community/1" />}/>
    </Routes>
  );
}

export default App;
