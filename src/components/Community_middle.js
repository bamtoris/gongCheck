import css from "./community_middle.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const icon_faSearch = <FontAwesomeIcon icon={faSearch}/>

function Community_middle(){
    return(
        <div id={css.Community_middle}>
            <div class={css.search}>
                <input class={css.search_bar} defaultValue="welcome" type="search"/>
                <div class={css.icon}>
                    {icon_faSearch}
                </div>
            </div>
            <div className={css.hashTag}>
                {/* <h1>인기있는 태그</h1> */}
            </div>
            
            
        </div>
        
    );
}

export default Community_middle;