import css from './myPage_aside_listBlock.module.css';

    


function MyPage_aside_listBlock(props){

    
    let title = props.checklist_title;
    // let list = props.checklist_list;
    
    return(
        <div className={css.title}>
            <a href="#">{title}</a>
        </div>
    );
}

export default MyPage_aside_listBlock;