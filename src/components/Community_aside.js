import css from './community_aside.module.css';

import classNames from 'classnames';


// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUserTag } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import RankerBox from './RankerBox';

const icon_following = <FontAwesomeIcon className={css.icon} icon={faUserTag} />
const icon_clipping = <FontAwesomeIcon className={css.icon} icon={faClipboard} />
const icon_good = <FontAwesomeIcon className={css.icon} icon={faThumbsUp} />



let rankers = [];

let names =['가요이키우기', '신사임당', '장삐쭈', '잇섭', '흑우'];
let followers = [197332, 29189, 10000, 9998, 777];

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
        <aside>
    {/* // 내 활동 부분 */}
            <div className={css.menuContainer}>
                <h1 className={classNames(css.f_hi, css.title)}>내 활동</h1>
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
                {rankers}
            </div>

                    


                
            
        </aside>


        

    );
}

export default Community_aside;