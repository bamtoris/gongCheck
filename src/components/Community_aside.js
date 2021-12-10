import css from './community_aside.module.css';

import classNames from 'classnames';

import RankerBox from './RankerBox';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTag } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { faStickyNote } from '@fortawesome/free-solid-svg-icons';



const icon_following = <FontAwesomeIcon className={css.icon} icon={faUserTag} />
const icon_clipping = <FontAwesomeIcon className={css.icon} icon={faClipboard} />
const icon_good = <FontAwesomeIcon className={css.icon} icon={faThumbsUp} />
// const icon_new = <FontAwesomeIcon className={css.icon} icon={faStickyNote} />



let rankers = [];

let names =['CHECKLISTER','가요이키우기', '신사임당', '장삐쭈', '잇섭', '흑우'];
let followers = ['FOLLOWERS', 197332, 29189, 10000, 9998, 777];

function rankerPrint() {
    {for (let i=0;i<5;i++)
        {
            rankers.push(<RankerBox name={names[i]} follower={followers[i]}/>);
        }
        
    }
}



function Community_aside(){

    rankers = [];
    rankerPrint();


    return(
        <aside className={css.aside}>
    {/* // 내 활동 부분 */}
            <div className={css.menuContainer}>
                <h1 className={classNames(css.f_hi, css.title)}>내 활동</h1>
                <div className={css.mainbtnBox}>
                    <button className={css.mainbtn}>글쓰기</button>
                    <button className={css.mainbtn}>공유하기</button>
                </div>
                <div className={css.btnContainer}>
                    <div className={css.btnBox}>
                        {icon_following}
                        <button className={css.f_hi}>팔로우한 유저 체크리스트</button>
                    </div>
                </div>
                <div className={css.btnContainer}>
                    <div className={css.btnBox}>
                        {icon_clipping}
                        <button className={css.f_hi}>스크랩한 체크리스트</button>
                    </div>
                </div>
                <div className={css.btnContainer}>
                    <div className={css.btnBox}>
                        {icon_good}
                        <button className={css.f_hi}>좋아요한 체크리스트</button>
                    </div>
                </div>
            </div>

    {/* // 체크리스터 랭킹 */} 
            <div className={css.rankerContainer}>
                <h1 className={classNames(css.title, css.f_hi)}>체크리스터 랭킹</h1>
                <div className={css.rankerBlock}>
                    {rankers}
                </div>
                
            </div>

                    


                
            
        </aside>


        

    );
}

export default Community_aside;