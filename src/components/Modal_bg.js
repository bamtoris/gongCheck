import css from './modal_bg.module.css';

function Modal_bg(props){

    return(
        <div className={css.bg} onClick={props.onClick}></div>
    );
}

export default Modal_bg;