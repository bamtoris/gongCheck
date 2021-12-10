import css from './hashTag.module.css';

function HashTag(props){
    
    let color = props.font_color;

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