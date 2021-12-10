import classNames from 'classnames';
import css from './community_board.module.css';
import PostBlock from './PostBlock';

function Community_board(props){
    return(
        <div className={css.board}>
            <div className={css.postContainer}>
                <h1 className={classNames(css.title, css.f_hi)}>
                    인기있는 체크리스트
                </h1>
                {/* <div className={classNames(css.postBlock, css.bg_select)}>
                    <div className={css.textBox}>
                        <div className={css.postTitle}>휴가철 차박 필수 아이템 체크리스트</div>
                        <div className={css.userName}>Car_camp_man</div>
                    </div>
                    <div className={css.image}>
                        <img src="#" alt="image"/>
                    </div>
                </div> */}
                <PostBlock title="휴가철 차박 필수 아이템 체크리스트" user="Car_camp_man"/>
                <PostBlock title="휴가철 차박 필수 아이템 체크리스트" user="Car_camp_man"/>
            </div>  
        </div>
    );
}

export default Community_board;