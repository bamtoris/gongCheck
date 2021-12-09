import "./components/reset.css"; // reset for css default settings

import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';




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
