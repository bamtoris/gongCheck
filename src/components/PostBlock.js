import css from './postBlock.module.css';

function PostBlock(props){

    const title = props.title;
    const user = props.user;
    const image = props.image;
    const url = props.url;

    let imageBlock;

    if(image){
        imageBlock = <div className={css.image}><img src={image} alt="image"/></div>
    }

    return(
        <a href={url} className={css.postBlock}>
            <div className={css.textBox}>
                <span className={css.postTitle}>{title}</span>
                <span className={css.userName}>{user}</span>
                {imageBlock}
            </div>
        </a>
    );
}

export default PostBlock;