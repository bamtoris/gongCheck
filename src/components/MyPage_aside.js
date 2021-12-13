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
import MyPage_section from './MyPage_section';

const icon_plus = <FontAwesomeIcon icon={faPlus} />
const icon_faSearch = <FontAwesomeIcon className={css.searchicon} icon={faSearch}/>


function MyPage_aside(props){

    // const getChecklistInfo = props.function;
    let id = props.url;

    

    const name = 'daniel';
    // const [title, setTitle] = useState('');
    // const [list, setList] = useState('');
    const [checklist, setChecklist] = useState([]);

    function createChecklist() {

        Axios.post("http://localhost:3001/createChecklist").then(() => {
            window.location.reload();
        });
    };

    // let checklist = [];
    function getMyChecklist() {
        // let checklist_array = [];
        let data = [];
        Axios.get("http://localhost:3001/getMyChecklist").then((res) => {
            setChecklist(res.data);
            
        });
        // setChecklist(data);
        
        // console.log(data);
        // console.log(checklist);
    }
    

   
    // 내 체크리스트 불러오기


    

    // function handlerChecklistInfo(title, list){
    //     setTitle(title);
    //     setList(list);
    // }
    
    useEffect(() => {
        // let checklistBlock = [];

        // let checklist_list_list = null;
    
        getMyChecklist();
        console.log('체크리스트요');
        console.log(checklist);
    }, [])
    
    
    return(
        <div className={css.new}>

        
        <div id={css.wrap}>
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
                        </div>
                    </div>
                    <div className={css.checklistContainer}>
                        {
                            checklist.map((check) => {
                                return <MyPage_aside_listBlock  user_id={check.user_id} userName={check.user_name} checklist_id={check.checklist_id} checklist_list={check.checklist_list} checklist_title={check.checklist_title}/>;
                            })
                        }
                        
                    </div>
                </div>
            </aside>
            
        </div>
        
        </div>
        
    );
}

export default MyPage_aside;