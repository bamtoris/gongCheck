import css from './myPage_section.module.css';

function MyPage_section(props){

    const title = props.title;
    const list = props.checklist;
    const note = props.note;

    let checklist = [];

    // if(list)
    // {
    //     for(let int i=0;i<list.length;i++)

    // }


    return(
        <section id={css.myPage_section}>
            <div className={css.wrap}>
                <div id={css.title}>{title}</div>
                <div className={css.subWrap}>
                    <div id={css.checklist}>{list}</div>
                    <div id={css.note}>{note}</div>
                </div>
                
            </div>
            
        </section>
    );
}

export default MyPage_section;