import css from './hashTag.module.css';

function HashTag(props){
    
    let color = props.color;

    let font_color = props.font;
    let bg_color = "background-color: "+toString(color);
    // let font_color = toString('color:' + color);

    return(
        <div className={css.tagBox} >
            <div className={css.tag} >
                <a href='#' style={{backgroundColor : color, color: font_color}}>#{props.name}</a>
            </div>
        </div>
    );

}

export default HashTag;