import { Routes, Route } from 'react-router-dom';

import classNames from 'classnames';
import css from './community_board.module.css';
import PostBlock from './PostBlock';


let urls = [1];
let titles = ["휴가철 차박 필수 아이템 체크리스트"];
let users = ["차박몬"];

let posts = [];

function create_posts(){
    for(let i=0;i<urls.length;i++){
        let urls_paste = 'community/' + urls[i];
        posts.push(<PostBlock title={titles[i]} user={users[i]} url={urls_paste}/>);
    }
}

// function print_posts(){
//     <Routes>
//         for (let post of posts){
//             post
//         }
//     </Routes>
// }

function Community_board(props){

    posts = [];
    create_posts();

    return(
        <div className={css.board}>
            <div className={css.postContainer}>
                <h1 className={classNames(css.title, css.f_hi)}>
                    인기있는 체크리스트
                </h1>

                {posts}
            </div>  
        </div>
    );
}

export default Community_board;