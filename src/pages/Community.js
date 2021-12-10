// components
import Header from "../components/Header";
import Community_banner from "../components/Community_banner";
import Community_board from "../components/Community_board";
import Community_aside from "../components/Community_aside";
import Community_recommend from "../components/Community_recommend";

import css from './community.module.css';
import Footer from "../components/Footer";



function Community(){
    return(
    <div id="community">
        <Header/>
        <Community_banner id={css.banner}/>
        <div className={css.wrap}>
            <section className={css.section}>
                <Community_recommend/>
                <Community_board id={css.board}/>
            </section>
            
            <Community_aside id={css.aside}/>
        </div>
        <Footer/>
    </div>
    );
}

export default Community;