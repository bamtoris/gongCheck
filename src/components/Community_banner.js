import css from "./community_banner.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import HashTag from "./HashTag";

const icon_faSearch = <FontAwesomeIcon icon={faSearch}/>

function Community_banner(props){
    return(
        <div id={css.Community_middle}>
            <div class={css.search}>
                <input class={css.search_bar} defaultValue={props.search} type="search"/>
                <div class={css.icon}>
                    {icon_faSearch}
                </div>
            </div>
            <div className={css.hashTagBox}>
                <p class={css.title}>인기있는 태그</p>
                <div className={css.hashTag}>   
                    <HashTag name="여행" />
                    <HashTag name="여dawawwaadw행" font_color="red" />
                    <HashTag name="여행" />
                </div>
            </div>
            
            
        </div>
        
    );
}

export default Community_banner;