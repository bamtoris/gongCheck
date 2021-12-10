import Footer from "../components/Footer";
import Header from "../components/Header";
import MyPage_main from "../components/MyPage_main";

function MyPage(){
    return(
        <div>
            <Header />
            <MyPage_main/>
            <Footer/>
        </div>
    );
}

export default MyPage;