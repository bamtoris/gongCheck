import logo from '../img/logo.png';
import profile_image from '../img/profile-avatar.png';
import css from './header.module.css';

function Header(){
    return(
        <div id={css.header}>
        <nav className={css.header_wrap}>
            <div className={css.logo}>
                <a href="#"><img src={logo} alt="logo"/></a>
            </div>
            <ul className={css.menu}>
                <a href="#"><li>마이페이지</li></a>
                <a href="#"><li>커뮤니티</li></a>
            </ul>
            <div className={css.account}>
                    <ul className={css.sub_menu}>
                        <a href="#"><li>설정</li></a>
                        <a href="#"><li>로그아웃</li></a>
                    </ul>
                <div className={css.profile}>
                    <div className={css.profile_img}>
                        <img src={profile_image} alt="profile image"/>
                    </div>
                    <p className={css.name}>Sam Hamster</p>
                </div>
            </div> 
        </nav>
    </div>
    );
}

export default Header;