import logo from '../img/logo.png';
import profile_image from '../img/profile-avatar.png';
import css from './header.module.css';

// package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

const profile = profile_image

const icon_faCog = <FontAwesomeIcon icon={faCog} />

const icon_faDoorOpen = <FontAwesomeIcon icon={faDoorOpen}/>

// import { faSearch } from '@fortawesome/free-solid-svg-icons';



function Header(){
    return(
        <header id={css.header}>
        <nav className={css.header_wrap}>
            <div className={css.logo}>
                <a href="/"><img src={logo} alt="logo"/></a>
            </div>
            <ul className={css.menu}>
                <a href="/"><li>마이페이지</li></a>
                <a href="/community"><li>커뮤니티</li></a>
            </ul>
            <div className={css.account}>
                <ul className={css.sub_menu}>
                    <a href="#">
                        <li className={css.profile_img}>
                            <div className={css.img_clear}>
                                <img src={profile} alt="profile image"/>
                            </div>
                        </li>
                    </a>
                    <a href="#"><li>{icon_faCog}</li></a>
                    <a href="#"><li>{icon_faDoorOpen}</li></a>
                </ul>
                
            </div> 
        </nav>
    </header>
    );
}

export default Header;