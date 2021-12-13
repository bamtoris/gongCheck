import { useState } from 'react';

// components
import Header from "../components/Header";
import Community_banner from "../components/Community_banner";
import Community_board from "../components/Community_board";
import Community_aside from "../components/Community_aside";
import Community_recommend from "../components/Community_recommend";
import Modal from '../components/Modal';

import css from './community.module.css';
import Footer from "../components/Footer";

import 'animate.css';
import classNames from 'classnames';

function Community(){

    const [modal, setModal] = useState(false);

    const modal_open = function modal_openHandler(){
        setModal(true);
    }
    const modal_close = function modal_closeHandler(){
        setModal(false);
    }

    return(
    <div id="community">
        {modal ? <Modal modal_close={modal_close}/> : null}
        <Header/>
        <Community_banner id={css.banner}/>
        <div className={css.wrap}>
            <section className={css.section}>
                <Community_recommend />
                <Community_board id={css.board}/>
            </section>
            
            <Community_aside id={css.aside} modal_open={modal_open} modal_close={modal_close}/>
        </div>
        <Footer/>
    </div>
    );
}

export default Community;