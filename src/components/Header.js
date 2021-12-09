import logo from '../img/logo.png';
import profile_image from '../img/profile-avatar.png';
import css from './header.module.css';

// package
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';


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
                    <a href="#"><li>{icon_faCog}</li></a>
                    <a href="#"><li>{icon_faDoorOpen}</li></a>
                </ul>
                <div className={css.profile}>
                    <div className={css.profile_img}>
                        <img src={profile_image} alt="profile image"/>
                    </div>
                    <p className={css.name}>Sam Hamster</p>
                </div>

            </div> 
        </nav>
    </header>
    );
}

export default Header;