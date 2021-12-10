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
        <div className={css.postBlock}>
            <div className={css.textBox}>
                
                    <span className={css.postTitle}><a href={url}>{title}</a></span>
                
                <span className={css.userName}>{user}</span>
                {imageBlock}
            </div>
        
            
        </div>
    );
}

export default PostBlock;