import css from './community_board.module.css';

function Community_board(props){
    return(
        <div className={css.board}>
            <div className={css.postContainer}>
                <h1 className={css.title}>
                    인기있는 체크리스트
                </h1>
                <div className={css.postBlock}>
                    <div className={css.textBox}>
                        <div className={css.postTitle}>휴가철 차박 필수 아이템 체크리스트</div>
                        <div className={css.userName}>Car_camp_man</div>
                    </div>
                    <div className={css.image}>
                        <img src="#" alt="image"/>
                    </div>
                </div>
                <div className={css.postBlock}>
                    <div className={css.textBox}>
                        <span className={css.postTitle}>휴가철 차박 필수 아이템 체크리스트</span>
                        <span className={css.userName}>Car_camp_man</span>
                    </div>
                    <div className={css.image}>
                        <img src="#" alt="image"/>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default Community_board;