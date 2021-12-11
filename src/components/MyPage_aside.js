import { useState } from 'react';

import css from './myPage_aside.module.css';

import HashTag from './HashTag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MyPage_checklist_list from './MyPage_checklist_list';

const icon_plus = <FontAwesomeIcon icon={faPlus} />
const icon_faSearch = <FontAwesomeIcon className={css.searchicon} icon={faSearch}/>




let checklist_names = ['방 청소 리스트', '오늘 작업 리스트', '등산준비물 첵첵'];
let checklist_lists = [];


let checklist_array = [];


const createNewChecklist = function createNewChecklist(){
    // let checkContainer = <MyPage_checklist_list name="제목없음"/>
    checklist_names.push("제목없음");
}

function print_checklist(){
    for(let i=0;i<checklist_names.length;i++){
        let checklist = <MyPage_checklist_list name={checklist_names[i]}/>
        checklist_array.push(checklist)
    }
}






function MyPage_aside(){

    checklist_array = [];
    print_checklist();

    

    return(
        <aside className={css.myPage_aside}>
            <div class={css.asideContainer}>
                <h1>CHECKLIST</h1>
                <div className={css.createBtn}>
                    <button onClick={createNewChecklist}>{icon_plus}<span>Create Checklist</span></button>
                </div>
                <div className={css.search}>
                    <input className={css.searchBar} type="text" defaultValue=""/>
                    {icon_faSearch}
                    
                </div>
                <div className={css.hashTagBox}>
                    <div className={css.hashTag}>
                        <HashTag name="청소"/>
                        <HashTag name="작업"/>
                        <HashTag name="과제"/>
                        <HashTag name="등산"/>
                        <HashTag name="산"/>
                        <HashTag name="휴식"/>
                    </div>
                </div>
                <div className={css.checklistContainer}>
                    {checklist_array}
                </div>
            </div>
        </aside>
    );
}

export default MyPage_aside;