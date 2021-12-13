import { useState, useMemo, useCallback, useEffect } from 'react';
import Axios from 'axios';
import css from './modal.module.css';
import Modal_bg from './Modal_bg';
import { faAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons';

function Modal(props){

    // const [post_id, setPost_id] = useState(0);
    const [title, setTitle] = useState('');
    const [writing, setwriting] = useState('');
    const [checklist_id, setChecklist_id] = useState(null);
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }

    const createPost = () => {
        if(title == '' || writing == ''){
            alert('제목, 내용 중에서 빈 칸이 존재합니다.');
        }
        else{
            if(checklist_id == null){
                Axios.post("http://localhost:3001/createPost", {
                    title: title,
                    writing: writing
                }).then(() => {
                    window.location.reload('/community');
                    // alert("글만 생성");
                });
            }
            else{
                Axios.post("http://localhost:3001/createPost_checklist", {
                title: title,
                writing: writing,
                checklist_id: checklist_id
                }).then(() => {
                    window.location.reload('/community');
                    // alert("체크리스트 포함된 글 생성");
                })

            }
            
        }
    }

    function createPost_checklist(){
        
    }


    const [checklist, setChecklist] = useState([]);

    // function get_myChecklist(){
            
    // };

    const get_myChecklist = () => {
        Axios.get("http://localhost:3001/getMyChecklist").then((res) => {
            setChecklist(res.data)});
        console.log(checklist);
        };



        // Axios.interceptors.post("http://localhost:3001/createPost", {
        //     post_id: post_id,
        //     title: title,
        //     writing: writing,
        //     checklist_id: checklist_id
        // }).then((res) => {
        //     alert(res.data);
        // });

    function modal_close(){
        props.modal_close();
    }

    const [isCheck, setIsCheck] = useState(false);
    
    function print_checklist() {
        return(
                <select name="myChecklist" id="checklist-select" className={css.droplist} required onChange={(e) => {setChecklist_id(e.target.value)}}>
                    <option value={null}>checklist를 선택하세요</option>
                    {
                        checklist.map((check) => {
                            return <option key={check.checklist_id} value={check.checklist_id}>{check.checklist_title}</option>;
                        })
                    }
                    
                </select>
        );
        
    }


    useEffect(()=>{
        get_myChecklist();
    }, [])
    // useEffect(()=>{
    //     print_checklist();
    // }, [])

    function handleCheckbox(){
        // let isCheck_value = e.target.checked;
        if(isCheck == false){
            setIsCheck(true);
            console.log("checklist 나옴" + isCheck);
        }
            
        else{
            setIsCheck(false);
            console.log("checklist 사라짐" + isCheck);
        }
            
    }

    return(        
        <div className={css.modal}>
            <Modal_bg onClick={modal_close}/>
            <div className={css.container}>
                <h1>글쓰기</h1>
                <form onSubmit={handleSubmit}>
                    <div className={css.title}>
                        <label>제목</label>
                        <input type="text" onChange={(event)=>setTitle(event.target.value)} required/>
                    </div>
                    <div className={css.write}>
                        <label>내용</label>
                        <textarea name="textarea" onChange={(event)=>setwriting(event.target.value)} required/>
                        {/* <input type="text"></input> */}
                    </div>
                    <div className={css.checklist}>
                        <div className={css.checkList_ui}>
                            <input type="checkbox" onClick={(e) => {handleCheckbox()}} id={css.checklist} name="checklist" value="Checklist 공유하기"/><label for="Checklist">Checklist 공유하기</label>
                        </div>
                        <div className={css.selectContainer}>
                            {isCheck ? print_checklist() :null}
                        </div>
                    </div>

                    <div className={css.btnContainer}>
                        <button onClick={modal_close}>취소</button>
                        <button type="submit" onClick={()=>{createPost()}}>글쓰기</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;