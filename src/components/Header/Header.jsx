import styles from './Header.module.css'
import Home from "./Home/Home";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Header() {
	return (
			<header className={styles.header}>
				<Navbar/>
				<Home/>
				<Footer/>
			</header>
	)
}

export default Header