import css from "./rankerBox.module.css";

import classNames from "classnames";

function RankerBox(props){

    const name = props.name;
    const follower_count = props.follower;

    return(
        <div className={css.rankerContainer}>
            <div className={classNames(css.rankerBox, css.bg_select2)}>
                <p class={classNames(css.f_hi, css.name, css.text)}>{name}</p>
                <p class={classNames(css.f_hi, css.follwer, css.text)}>{follower_count}</p>
            </div>
        </div>
    );

}

export default RankerBox;