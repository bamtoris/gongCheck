import css from './modal.module.css';


function Modal(){
    return(
        <div className={css.modal}>
            <div className={css.container}>
                <h1>글쓰기</h1>
                <form>
                    <div className={css.title}>
                        <label>제목</label>
                        <input type="text"></input>
                    </div>
                    <div className={css.write}>
                        <span>내용</span>
                        <textarea name="textarea" required></textarea>
                        {/* <input type="text"></input> */}
                    </div>
                    <div className={css.checklist}>

                    </div>

                    <div className={css.btnContainer}>
                        <button>취소</button>
                        <button type="submit">글쓰기</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;