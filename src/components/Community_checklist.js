import css from "./community_checklist.module.css";

import { useCallback, useMemo, useState, useEffect } from "react";
import Axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const icon_arrow = <FontAwesomeIcon className={css.icon} icon={faArrowRight} />


function Community_checklist(props){

    const checklist_id = props.checklist_id;
    const [title, setTitle] = useState('');
    const [list, setList] = useState('');
    let isMy = props.isMy;

    
    // setList();

    const [newList, setnewList] = useState('');

    // title = "차박 준비물";
    // let list_info = '빅뱅의 거짓말 같은 하루';

    let list_array = [];

    // 
    
    // 리스트 가져와서, ;로 쪼개고 리스트로 출력하기
    const createList = useCallback(() => {
        console.log(list.split(';'));
        setList(list + newList + ';');
        let list_divided = list.split(';');
        list_array = [];
        for(let list_ed of list_divided){
            list_array.push(list_ed);
        }
        console.log(list_array);
    }, [list_array]);
    // function createList() {
    //     setList(list + newList + ';');
    //     list_array = [];
    //     list_array.push(list.split(';'));
    // }
    // html 자체로 text 저장하는 방법
        // let newList_html = "<div className={css.listLine}><input type=\"checkbox\" /><span>{newList}</span></div>";
        
        // <div className={css.listLine} dangerouslySetInnerHTML={{__html: '<input type="checkbox" /><span>{newList}</span>'}} />

        // text로 저장 후 list의 값을 불러와서 태그 안에 넣기
        
        // alert(list);

    // function saveChecklist(){
    //     let title;
    //     Axios.put("http://localhost:3001/updateChecklist", {
    //         id: checklist_id,
    //         title: title,
    //         list : list
    //     }).then(() => {
    //         alert('save success!!!');
    //     });
    // }

    const [data, setData] = useState([]);
    function getChecklistById(){
        Axios.get("http://localhost:3001/getChecklistById").then((res) => {
            setData(res.data);
            console.log(res.data);
            // console.log("checklist_id 's info");
            // console.log(res);
            // alert('체크리스트를 불러왔어요. :D');
            // console.log(data);
            
            
            
        });   
        console.log("데이터!");
        console.log(data);
    }

    function clippingChecklist(){
        Axios.post("http://localhost:3001/clippingChecklist",{
            title : title,
            list : list
        }).then((res) => {
            alert('sucess');
        });
    }

    function setChecklistDataMapping(){
        data.map((data_e) => {
            setTitle(data_e.checklist_title);
            setList(data_e.checklist_list);
            console.log("성공");
            console.log(title);
            console.log(list);
        }) ;

        list.split(';');
        // console.log(list);

        for(let l of list){
            list_array.push(<div className={css.listLine}>
                <input type="checkbox" />
                <span>{l}</span>
            </div>);
        }
        
    }

    useEffect(()=>{
        getChecklistById();
        setChecklistDataMapping();
        
        // console.log("리스트라고");
        // console.log(list_array);
        // // console.log(title, list);
    }, [])
    
    

    return(
        <div className={css.checklist}>
            <div className={css.container}>
                <div className={css.header}>
                    {isMy ? <input type="text" defaultValue={title} OnChange={(e) => {setTitle(e.target.value)}}/> : <h1>{title}</h1>}

                    {isMy ? <button >{icon_arrow}
                    <span>저장하기</span></button> : <button onClick={clippingChecklist}>{icon_arrow}
                    <span>체크리스트 가져가기</span></button>}
                </div>
                    {list_array}
                    {isMy ? <div className={css.newList}><input type="text" onChange={(e)=>{setnewList(e.target.value)}}/><button onClick={createList}>생성</button></div> : <div></div>}
                    
                
                
                
            </div>

        </div>
    );
}

export default Community_checklist;