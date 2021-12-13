import Footer from "../components/Footer";
import Header from "../components/Header";
import MyPage_main from "../components/MyPage_main";

function MyPage(props){

    let title = props.title;
    let list = props.list;
    let url = props.url;

    

    return(
        <div>
            <Header />
            <MyPage_main info={[title, list, url]} />
            <Footer/>
        </div>
    );
}

export default MyPage;