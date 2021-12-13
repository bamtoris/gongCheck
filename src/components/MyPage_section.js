
import Community_checklist from './Community_checklist';
import css from './myPage_section.module.css';

function MyPage_section(props){

    const title = props.title;
    const list = props.checklist;
    // const note = props.note;

    let checklist = [];

    // if(list)
    // {
    //     for(let int i=0;i<list.length;i++)

    // }


    return(
        <section id={css.myPage_section}>
            <Community_checklist title={title} list={list} isMy={true}/>
        </section>
    );
}

export default MyPage_section;