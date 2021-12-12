import css from './commentBlock.module.css';

import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const icon_good = <FontAwesomeIcon className={css.icon} icon={faThumbsUp} />

function CommentBlock(props){



    let user = props.user;
    let comment = props.comment;
    let list_title = props.list;
    let list_good_count = props.list_good_count;

    
    
    let list = <div className={css.listBlock}>
        <div className={css.list}>
            <input type="checkbox" defaultChecked/>
            <span>{list_title}</span>
        </div>
        
        <button className={css.goodBtn}> + {icon_good}<span>{list_good_count}</span></button>
        </div>;

    let list_add = <div className={css.listBlock}>
    <div className={css.list}>
        <input type="checkbox" defaultChecked/>
        <span><input type="text"/></span>
    </div>

    <button className={css.goodBtn}><span>남기기</span></button>
    </div>;

    const commentBox = () => {
        if(props.addComment == false){
            // 일반 댓글 부분
            return(
                <div className={css.block}>
                    <div className={css.user}>
                        <span>{user}</span>
                    </div>
                    <div className={css.main}>
                        <div className={css.comment}>
                            <p>{comment}</p>
                        </div>
                        <div className={css.lists}>
                        {list}
                        </div>
                    </div>
                </div>  
            );
        }
        else{
            // 댓글 입력 부분
            return(
                <div className={classNames(css.block, css.input_block)}>
                    {/* <div className={css.user}>
                        <span>{"다니엘"}</span>
                    </div> */}
                    <div className={classNames(css.main, css.edit)}>
                        <div className={classNames(css.comment_input)}>
                            <textarea></textarea>
                        </div>
                        <div className={css.lists}>
                        {list_add}
                        </div>
                    </div>
                </div>  
            );
        }
    }

    return(
        <div className={css.block}>
            {commentBox()}
        </div>
    );
}

export default CommentBlock;