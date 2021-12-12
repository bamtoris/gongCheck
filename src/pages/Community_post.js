// inner package
import { useState } from 'react';

//  css
import css from './community_post.module.css';

// outer package
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// components
import Header from "../components/Header";
import Community_banner from "../components/Community_banner";
import Community_board from "../components/Community_board";
import Community_aside from "../components/Community_aside";
import Community_recommend from "../components/Community_recommend";
import Modal from '../components/Modal';
import Footer from "../components/Footer";
import Community_checklist from '../components/Community_checklist';
import CommentBlock from '../components/CommentBlock';


// const icon_user = <FontAwesomeIcon className={css.icon} icon={faUserCircle} />









function Community_post(props){

    let posts = []; // post data array to find me... ;<

    const url = props.url;
    let title = props.title;
    let user = props.user;
    let date = props.date;
    let writing = props.writing;
    let checklist = props.checklist;

    function finding_me(){
        for(let post of posts){
            if(post.url == url){
                title = post.title;
                user = post.user;
                writing = post.writing;
                checklist = post.checklist;
            }
        }
    }

    title = '차박이 좋아요, 여행이 좋아요. 빨리 대답해!';
    user = 'car는 사랑보다 더 love다';
    date = '2021-12-12';
    writing = '여러분, 이 글을 보신다면 제발 차박이라고 말해줘요. 마누라랑 내기 하고 있다고요!!!';


    const [modal, setModal] = useState(false);

    const modal_open = function modal_openHandler(){
        setModal(true);
    }
    const modal_close = function modal_closeHandler(){
        setModal(false);
    }

    // checklist aniamtion
    // checklist.addEventListener("mouseover", function( event ) {
    //     // highlight the mouseenter target
    //     event.target.style.color = "purple";
      
    //     // reset the color after a short delay
    //     setTimeout(function() {
    //       event.target.style.color = "";
    //     }, 500);
    //   }, false);

    return(
    <div id="community">
        {modal ? <Modal modal_close={modal_close}/> : null}
        <Header/>
        <Community_banner id={css.banner}/>
        <div className={css.wrap}>
            <section className={css.section}>
                <div id={css.post}>

                    <div className={css.title}>
                        <h1>{title}</h1>
                    </div>
                    <div className={css.info}>
                        <div className={css.user}>
                            <span>{user}</span>
                        </div>
                        <div className={css.date}>
                            <span>{date}</span>
                        </div>
                    </div>
                    <div className={css.writing}>
                        <p>{writing}</p>
                    </div>
                    <Community_checklist/>
                    <hr/>
                    
                    
                    <div className={css.comment}>
                        <h3>Comments</h3>
                        <CommentBlock addComment={false}
                        user = '헤로운 헬로'
                        comment = '차박차박바차바가차박차박차바가차가박차박차박차. 모든 일에 박차를 가해봐'
                        list = "고기 한 점"
                        list_good_count = {35}
                        />
                        <CommentBlock addComment={true}/>
                    </div>
                </div>
            </section>
            


            <Community_aside id={css.aside} modal_open={modal_open} modal_close={modal_close}/>
        </div>
        <Footer/>
    </div>
    );
}

export default Community_post;