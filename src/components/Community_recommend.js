import mountain from '../img/demo_mountain.jpg';
import ski from '../img/demo_ski.jpg';
import car from '../img/demo_car.jpg';

import classNames from 'classnames';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import css from './community_recommend.module.css';
import 'animate.css';


const icon_arrow = <FontAwesomeIcon icon={faArrowRight}/>

function Community_recommend(){
    return(
        
        <div className={classNames("animate__animated", "animate__fadeInUp", css.recoContainer)}>
            <h1><strong>Daniel</strong>님,<br/>이건 어떠신가요?</h1>
            <div className={css.cardContainer}>
                <div className={css.recoBox}>
                    <div className={css.icon}>{icon_arrow}</div>
                    <div className={css.shadowBox}></div>
                    <div className={css.shadowBox2}></div>
                    <p>산행을 위한<br/>체크리스트</p>
                    <img src={mountain}/>
                    
                </div>
                <div className={css.recoBox}>
                    <div className={css.icon}>{icon_arrow}</div>
                    <div className={css.shadowBox}></div>
                    <div className={css.shadowBox2}></div>
                    <div><img src={ski}/></div>
                    <p>스키를 위한<br/>체크리스트</p>
                </div>
                <div className={css.recoBox}>
                    <div className={css.icon}>{icon_arrow}</div>
                    <div className={css.shadowBox}></div>
                    <div className={css.shadowBox2}></div>
                    <img src={car}/>
                    <p>차량을 위한<br/>체크리스트</p>
                </div>
            </div>
        </div>
    );   
}

export default Community_recommend;