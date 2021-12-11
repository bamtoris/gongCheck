import css from "./community_checklist.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const icon_arrow = <FontAwesomeIcon className={css.icon} icon={faArrowRight} />


function Community_checklist(props){

    let title = props.check_title;
    const list = props.list;

    title = "차박 준비물";
    let list_info = '빅뱅의 거짓말 같은 하루';

    return(
        <div className={css.checklist}>
            <div className={css.container}>
                <div className={css.header}>
                    <h1>{title}</h1>
                    <button>{icon_arrow}
                    <span>체크리스트 가져가기</span></button>
                </div>
                <div className={css.listLine}>
                    <input type="checkbox" />
                    <span>{list_info}</span>
                </div>
                
                
            </div>

        </div>
    );
}

export default Community_checklist;