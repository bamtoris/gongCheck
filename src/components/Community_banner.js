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
                    <HashTag name="여행" color='red' />
                    <HashTag name="차박" color='orange' font='white' />
                    <HashTag name="2021년_후회하는_것들" color='grey'/>
                    <HashTag name="올해_연말_영화_리스트" color='blue'/>
                    <HashTag name="겨울여행" color='skyblue' font="black"/>
                    {/* <HashTag name="봄봄봄" color='green'/> */}
                    <HashTag name="자기계발_도서목록" color='cadetblue' />
                    <HashTag name="2021_GOTY" color='purple' />
                    <HashTag name="2022_새해소망" color='coral' />
                </div>
            </div>
            
            
        </div>
        
    );
}

export default Community_banner;