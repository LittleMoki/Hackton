import React, {useEffect} from 'react';
import styles from './Home.module.css';
import common from '../../../styles/common.module.css';

function Home() {
	useEffect(() => {
		const tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		let player;
		let videoIdElement = document.querySelector('#player');
		let videoId = videoIdElement.getAttribute('data-video');

		window.onYouTubeIframeAPIReady = function () {
			player = new window.YT.Player('player', {
				height: '720',
				width: '1000',
				playerVars: {
					'autoplay': 0,
					'controls': 1
				},
				videoId: videoId,
				events: {}
			});
		};

		return () => {
			if (player) {
				player.destroy();
			}
			window.onYouTubeIframeAPIReady = undefined;
		};
	}, []);

	return (

			<div className={styles.home_page}>
				<div className={common.container}>
					<div className={styles.home_page__content}>
						<div className={styles.home_page__video}>
							<div id='player' data-video="ERROR"></div>
						</div>
						<div className={styles.home_page__text}>
							<h1 className={styles.home_page__title}>Lorem ipsum dolor sit amet.</h1>
							<p className={styles.home_page__subtitle}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque explicabo illum nostrum ut! Animi at
								cumque, debitis dolorem hic magnam maxime odit, praesentium, qui quibusdam quos repellendus repudiandae
								voluptates voluptatum?
							</p>
						</div>
					</div>
				</div>
			</div>
	);
}

export default Home;
