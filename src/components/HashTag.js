import css from './hashTag.module.css';

function HashTag(props){
    
    let color = props.color;

    let bg_color = "background-color: "+toString(color);
    // let font_color = toString('color:' + color);

    return(
        <div className={css.tagBox}>
            <div className={css.tag}>
                <a href='#'>#{props.name}</a>
            </div>
        </div>
    );

}

export default HashTag;