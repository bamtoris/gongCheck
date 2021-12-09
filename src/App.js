// default css
import "./reset.css"; // reset for css default settings

// react packages
import {Routes, Route} from 'react-router-dom';

// pages
import MyPage from "./pages/myPage";
import Community from "./pages/Community";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MyPage />}/>
      <Route path="/community" element={<Community/>}/>
    </Routes>
  );
}

export default App;
