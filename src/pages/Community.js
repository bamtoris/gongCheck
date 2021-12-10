// components
import Header from "../components/Header";
import Community_banner from "../components/Community_banner";
import Community_board from "../components/Community_board";


import css from './community.module.css';

function Community(){
    return(
    <main>
        <Header/>
        <Community_banner/>
        <Community_board/>
    </main>
    );
}

export default Community;