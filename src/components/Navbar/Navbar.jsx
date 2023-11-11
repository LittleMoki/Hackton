import styles from '../Header/Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../images/logo/19-maktab logo.png'

function Navbar(){
	return(
		<nav className={styles.navbar_nav}>
			<div className={styles.logo}>
				<img src={logo} alt="logo"/>
			</div>
			<ul className={styles.nav__list}>
				<li className={styles.nav__list_item}>
					<NavLink to={'/header'} className={styles.nav__list_link}>Главная</NavLink>
				</li>
				<li className={styles.nav__list_item}>
					<NavLink to={'/crossword'} className={styles.nav__list_link}>Кроссворд</NavLink>
				</li>
				<li className={styles.nav__list_item}>
					<NavLink to={'/GuidanceTest'} className={styles.nav__list_link}>ПрофТесты</NavLink>
				</li>
				<li className={styles.nav__list_item}>
					<NavLink to={'/test'} className={styles.nav__list_link}>Тесты</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar