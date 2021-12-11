import css from './modal.module.css';
import Modal_bg from './Modal_bg';

function Modal(props){

    
    function modal_close(){
        props.modal_close();
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
                        <textarea name="textarea" required/>
                        {/* <input type="text"></input> */}
                    </div>
                    <div className={css.checklist}>

                    </div>

                    <div className={css.btnContainer}>
                        <button onClick={modal_close}>취소</button>
                        <button type="submit">글쓰기</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;