

function MyPage_aside_listBlock(props){

    console.log("dawuiaghdwhwakladw");
    let checklist = props;

    let title = checklist.checklist_title;
    let list = checklist.checklist_list;

    return(
        <div>
            {title}
        </div>
    );
}

export default MyPage_aside_listBlock;