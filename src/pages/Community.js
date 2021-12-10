// components
import Header from "../components/Header";
import Community_banner from "../components/Community_banner";
import Community_board from "../components/Community_board";
import Community_aside from "../components/Community_aside";

import css from './community.module.css';

function Community(){
    return(
    <div id="community">
        <Header/>
        <Community_banner id={css.banner}/>
        <div className={css.wrap}>
            <Community_board id={css.board}/>
            <Community_aside id={css.aside}/>
        </div>
        
    </div>
    );
}

export default Community;