import style from './Footer.module.css'
import common from '../../styles/common.module.css'
import logo from '../../images/logo/19-maktab logo.png'
import logoImg from '../../images/Лого_10лет_НиТ_Рус_Основной.png'
import logo1Img from '../../images/Bezymyannyj_2_(1)-transformed.png'
import logo2Img from '../../images/Росссотрудничество_pixian_ai.png'
import twitter from '../../images/icon/twitter.png'
import vk from '../../images/icon/vk.png'
import facebook from '../../images/icon/facebook.png'

function Footer() {
	return (
		<div className={style.footer}>
			<div className={common.container}>
				<div className={style.footer__wrapper}>
					<div className={style.footer__logo}>
						<div className={style.footer__logo_wrapper}>
							<img src={logo} alt="logo" className={style.footer__logo_item}/>
						</div>
						<h2 className={style.footer__title}>Utopia</h2>
					</div>
					<ul className={style.footer__nav_list}>
						<li className={style.footer__nav_item}>
							<a target='_blank' href="http://vk.com/share.php?url=https%3A%2F%2Flomonosov-msu.ru%2F" className={style.footer__nav_link}>
								<img src={vk} alt="vk"/>
							</a>
						</li>
						<li className={style.footer__nav_item}>
							<a target='_blank' href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flomonosov-msu.ru%2F" className={style.footer__nav_link}>
								<img src={facebook} alt="facebook"/>
							</a>
						</li>
						<li className={style.footer__nav_item}>
							<a target='_blank' href="https://twitter.com/home?status=https%3A%2F%2Flomonosov-msu.ru%2F" className={style.footer__nav_link}>
								<img src={twitter} alt="twitter"/>
							</a>
						</li>
					</ul>
					<div className={style.footer__images}>
						<img className={style.logo} src={logoImg} alt="logo"/>
						<img className={style.logo} src={logo1Img} alt="logo"/>
						<div>
							<img className={style.logo} src={logo2Img} alt="logo"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer