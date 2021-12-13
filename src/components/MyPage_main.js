import css from './myPage_main.module.css';

import { useEffect, useState } from 'react';

import MyPage_aside from './MyPage_aside.js';
import MyPage_section from './MyPage_section';



function MyPage_main(props){

    const info = props.info;
    
    let title = info[0];
    let list = info[1];
    let id = info[2];

    useEffect(()=>{

    })

    return(
        <main id={css.MyPage_main}>
            <MyPage_aside id={css.MyPage_aside} url={id}/>
            <MyPage_section id={css.MyPage_section} title={title} checklist={list}/>
        </main>
    );
}

export default MyPage_main;