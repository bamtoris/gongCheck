import css from "./community_checklist.module.css";

import { useCallback, useMemo, useState, useEffect } from "react";
import Axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const icon_arrow = <FontAwesomeIcon className={css.icon} icon={faArrowRight} />


function Community_checklist(props){

    const checklist_id = props.checklist_id;
    let isMy = props.isMy;

    // const title = props.title;

    const [title, setTitle] = useState('');
    const [list, setList] = useState('');




    const [newList, setnewList] = useState('');
    const [list_array, setList_array] = useState([]);
    // let list_array = [];

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
        Axios.post("http://localhost:3001/getChecklistById",
            {
                id: checklist_id
            }
        ).then((res) => {
            setData(res.data);
            setList_array(list.split(';'));

            
            
        });   
        // console.log("데이터!");
        // console.log(data);
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
            // console.log("성공");
        }) ;
        setList_array(list.split(';').slice(-1));
        // setList_array(list.slice(-1));
        
    }

    //     list.split(';');
    //     // console.log(list);

    //     for(let l of list_array){
    //         list_array.push(<div className={css.listLine}>
    //             <input type="checkbox" />
    //             <span>{l}</span>
    //         </div>);
    //     }
        
    // }

    function start_func () {
        {
            getChecklistById();
            setChecklistDataMapping();
        }
        
    }
    
    useEffect(()=>{
        start_func();
        
        
        // if(isMy){
        //     setTitle(props.title);
        //     setList(props.list);
        // }
        // else{}
        // setChecklistDataMapping();
        // console.log(title);
        
        // console.log(list.split(';'));
        // console.log("리스트라고");
        console.log(list_array);
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
                    {
                        list_array.map((list) => {
                            console.log(list);
                            if(list != null){
                                list.trim();
                            }
                            return(
                                <div>
                                    <input type="checkbox" />
                                    <span>{list.trim()}</span>
                                </div>
                            );
                            
                        })
                    }
                    {isMy ? <div className={css.newList}><input type="text" onChange={(e)=>{setnewList(e.target.value)}}/><button >생성</button></div> : <div></div>}
                    
                
                
                
            </div>

        </div>
    );
}

export default Community_checklist;