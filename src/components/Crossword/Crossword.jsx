import style from './Crossword.module.css'
import common from '../../styles/common.module.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Crossword() {
	return (
		<div className={style.crossword}>
			<Navbar/>
			<div className={common.container}>
				<div className={style.crossword__wrapper}>
					<iframe width="1080" height="800" style={{fontSize:'20px',margin:'auto',padding:'50px', display: 'block'}} frameBorder="0" src="https://crosswordlabs.com/embed/the-planets?show_title=0&clue_height=30" title={'test'}></iframe>
				</div>
			</div>
			<Footer/>
		</div>
	)
}

export default Crossword