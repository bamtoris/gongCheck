import css from './myPage_main.module.css';

import MyPage_aside from './MyPage_aside.js';
import MyPage_section from './MyPage_section';

function MyPage_main(){

    return(
        <main id={css.MyPage_main}>
            <MyPage_aside id={css.MyPage_aside}/>
            <MyPage_section id={css.MyPage_section} title="방 청소 리스트" checklist="list"/>
        </main>
    );
}

export default MyPage_main;