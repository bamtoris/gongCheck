import { useState } from 'react';
import Axios from 'axios';
import css from './modal.module.css';
import Modal_bg from './Modal_bg';

function Modal(props){

    function getPosts(){
        Axios.post('http:localhost:3001/printPost', {
            
        });
    }

    const [post_id, setPost_id] = useState(0);
    const [title, setTitle] = useState('');
    const [writing, setwriting] = useState('');
    const [checklist_id, setChecklist_id] = useState(0);

    function createPost(){
        Axios.interceptors.response.use(Axios.post("http://localhost:3001/createPost", {
        post_id: post_id,
        title: title,
        writing: writing,
        checklist_id: checklist_id
    }), alert('error'));

        // Axios.interceptors.post("http://localhost:3001/createPost", {
        //     post_id: post_id,
        //     title: title,
        //     writing: writing,
        //     checklist_id: checklist_id
        // }).then((res) => {
        //     alert(res.data);
        // });
    }

    






    function modal_close(){
        props.modal_close();
    }


    const [isCheck, setIsCheck] = useState(false);
    
    function isCheckbox(e) {
        if(e.target.checked == true)
            setIsCheck(true);
        else
            setIsCheck(false);
        // console.log(isChecklistClipping);
    }

    function get_myChecklist(){
        return(
            // db에서 가져온 나의 체크리스트들을 다음과 같이 출력
            <select name="myChecklit" id="checklist-select" className={css.droplist} required>
                    <option value="">공유할 체크리스트를 선택하세요</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
            </select>

        );
    }

    
    function print_checklist() {
        if(isCheck == true){ 
            // 내 체크리스트 셀렉션
            return(
                <div className={css.selectContainer}>
                    {/* <label for="checklist-select">공유할 체크리스트를 선택하세요</label> */}
                    {get_myChecklist()}
                </div>
            );
        }

    }

    return(
        
        <div className={css.modal}>
            <Modal_bg onClick={modal_close}/>
            <div className={css.container}>
                <h1>글쓰기</h1>
                <form>
                    <div className={css.title}>
                        <label>제목</label>
                        <input type="text" required/>
                    </div>
                    <div className={css.write}>
                        <label>내용</label>
                        <textarea name="textarea"  required/>
                        {/* <input type="text"></input> */}
                    </div>
                    <div className={css.checklist}>
                        <div className={css.checkList_ui}>
                            <input type="checkbox" onChange={e => isCheckbox(e)} id={css.checklist} name="checklist" value="Checklist 공유하기"/><label for="Checklist">Checklist 공유하기</label>
                        </div>
                        {print_checklist()}
                    </div>

                    <div className={css.btnContainer}>
                        <button onClick={modal_close}>취소</button>
                        <button type="submit" onClick={createPost()}>글쓰기</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;