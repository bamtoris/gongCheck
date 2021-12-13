import { useEffect, useState } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';

import Axios from 'axios';

import classNames from 'classnames';
import css from './community_board.module.css';
import PostBlock from './PostBlock';

import 'animate.css';


let urls = [1];
let titles = ["휴가철 차박 필수 아이템 체크리스트"];
let users = ["차박몬"];



function Community_board(props){
    let [posts, setPosts] = useState([]);

    function getPosts(){
        Axios.get('http://localhost:3001/printPost').then((res) => {
            setPosts(res.data);
            
        });
    }
    

    useEffect(()=>{
        getPosts();
        console.log(posts);
    }, [])


    // console.log(posts);
    // posts = [];
    
    // posts = [];

    return(
        <div className={classNames("animate__animated", "animate__fadeInUp", css.board)}>
            <div className={css.postContainer}>
                <h1 className={classNames(css.title, css.f_hi)}>
                    인기있는 체크리스트
                </h1>
                {
                    posts.map((post) => {
                        return <PostBlock url={post.post_id} post_id={post.post_id} title={post.title} user_name={post.user_name} post_write={post.post_write} checklist_id={post.checklist_id}/>})
                }
            </div>  
        </div>
    );
}

export default Community_board;