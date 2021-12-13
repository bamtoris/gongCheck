import { useState, useMemo, useCallback, useEffect } from 'react';
import Axios from 'axios';

import css from './myPage_aside.module.css';

import HashTag from './HashTag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MyPage_checklist_list from './MyPage_checklist_list';
import axios from 'axios';
import MyPage_aside_listBlock from './MyPage_aside_listBlock';

const icon_plus = <FontAwesomeIcon icon={faPlus} />
const icon_faSearch = <FontAwesomeIcon className={css.searchicon} icon={faSearch}/>

function MyPage_aside(){

    let checklist_array = [];

    const name = 'daniel';

    function createChecklist() {

        Axios.post("http://localhost:3001/createChecklist").then(() => {
            window.location.reload();
        });
    };

    const [checklist, setChecklist] = useState([]);

    let checklistBlock = [];

    // 내 체크리스트 불러오기
    const getMyChecklist = () => {
        Axios.get("http://localhost:3001/getMyChecklist").then((res) => {
            setChecklist(res.data);}); console.log("start")};

    useEffect(() => {
        getMyChecklist();
    }, [])
    
    // 고민의 흔적..
    // function getMyChecklist(){
    //     Axios.get("http://localhost:3001/getMyChecklist").then((res) => {
    //     setChecklist(res.data);
    //     // console.log(checklist);
    //     });
    // }

    // getMyChecklist();
    

    // function get_myChecklist(){
    //     Axios.get("http://localhost:3001/getMyChecklist").then((res) => {
    //         setChecklist(res.data);
    //         // console.log(checklist);
    //         });
    // };

    // get_myChecklist();

    // function print_checklist(){
        
    //     checklist.map((check) => {
    //         return <div> {check.checklist_title} </div>;
    //         return <MyPage_aside_listBlock user_id={check.user_id} userName={check.user_name} checklist_id={check.checklist_id} checklist_list={check.checklist_list} checklist_title={check.checklist_title} />;
    //     });    
    //     // alert("suceess");
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log('You clicked submit.');
    //   }
    //   handleSubmit(get_myChecklist());
    
    
    return(
        <aside className={css.myPage_aside}>
            <div class={css.asideContainer}>
                <h1>CHECKLIST</h1>
                <div className={css.createBtn}>
                    <button id='createNewChecklist' onClick={createChecklist}>{icon_plus}<span>Create Checklist</span></button>
                </div>
                <div className={css.search}>
                    <input className={css.searchBar} type="text" defaultValue=""/>
                    {icon_faSearch}
                    
                </div>
                <div className={css.hashTagBox}>
                    <div className={css.hashTag}>
                        <HashTag name="여행" color='red' />
                        <HashTag name="차박" color='orange' font='white' />
                        <HashTag name="2021년_후회하는_것들" color='grey'/>
                        <HashTag name="올해_연말_영화_리스트" color='blue'/>
                        <HashTag name="겨울여행" color='skyblue' font="black"/>
                        {/* <HashTag name="봄봄봄" color='green'/> */}
                        <HashTag name="자기계발_도서목록" color='cadetblue' />
                        <HashTag name="2021_GOTY" color='purple' />
                        <HashTag name="2022_새해소망" color='coral' />
                        <HashTag name="청소"/>
                        <HashTag name="작업"/>
                        <HashTag name="과제"/>
                        <HashTag name="등산"/>
                        <HashTag name="산"/>
                        <HashTag name="휴식"/>
                    </div>
                </div>
                <div className={css.checklistContainer}>
                    {
                        checklist.map((check) => {
                            return <MyPage_aside_listBlock user_id={check.user_id} userName={check.user_name} checklist_id={check.checklist_id} checklist_list={check.checklist_list} checklist_title={check.checklist_title}/>;
                        })
                    }
                    
                </div>
            </div>
        </aside>
    );
}

export default MyPage_aside;