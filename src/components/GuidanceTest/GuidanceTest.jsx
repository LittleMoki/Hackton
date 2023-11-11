import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Navbar from '../Navbar/Navbar';
import common from '../../styles/common.module.css';
import style from './GuidanceTest.module.css';
import Footer from "../Footer/Footer";

const initialValues = {
	answers: [
		{
			id: 1,
			question: 'What is React?',
			options: ['A JavaScript library', 'A CSS framework', 'A database'],
			correctAnswer: 'A JavaScript library',
			playerId: 'player-1',
			videoUrl:'URL'
		},
		{
			id: 2,
			question: 'What is JSX?',
			options: ['JavaScript XML', 'Java XML', 'JSON XML'],
			correctAnswer: 'JavaScript XML',
			playerId: 'player-2',
			videoUrl:'URL'
		},
		{
			id: 3,
			question: 'Java GEY?',
			options: ['Yes', 'No', 'I do not know'],
			correctAnswer: 'Yes',
			playerId: 'player-3',
			videoUrl:'URL'
		},
	],
	selectedAnswers: {},
};

function GuidanceTest() {
	useEffect(() => {
		const tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}, []);

	const [feedback, setFeedback] = useState({});

	const formik = useFormik({
		initialValues,
		onSubmit: (values) => {
			const newFeedback = {};
			values.answers.forEach((question) => {
				const isCorrect = question.correctAnswer === values.selectedAnswers[question.id];
				newFeedback[question.id] = {
					id: question.id,
					isCorrect,
					feedbackText: isCorrect
						? 'Correct Answer!'
						: `Incorrect Answer! Correct answer is "${question.correctAnswer}"`,
				};
			});

			setFeedback(newFeedback);
		},
	});

	const handleOptionChange = (questionId, option) => {
		formik.setFieldValue(`selectedAnswers.${questionId}`, option);
	};

	useEffect(() => {
		const loadYouTubePlayer = (question) => {
			const player = new window.YT.Player(question.playerId, {
				height: '720',
				width: '100%',
				playerVars: {
					autoplay: 0,
					controls: 1,
				},
				videoId: question.videoId,
				events: {},
			});
		};

		window.onYouTubeIframeAPIReady = function () {
			initialValues.answers.forEach((question) => {
				const videoIdElement = document.querySelector(`#${question.playerId}`);
				if (videoIdElement) {
					question.videoId = videoIdElement.getAttribute('data-video');
					loadYouTubePlayer(question);
				}
			});
		};

		return () => {
			window.onYouTubeIframeAPIReady = undefined;
		};
	}, []);

	return (
		<div className={style.test}>
			<Navbar />
			<div className={common.container}>
				<div className={style.test__wrapper}>
					<form className={style.form} onSubmit={formik.handleSubmit}>
						{formik.values.answers.map((question) => (
							<div className={style.answers} key={question.id}>
								<div>
									<div id={question.playerId} data-video={question.videoUrl}></div>
								</div>
								<p className={style.question}>{question.question}</p>
								{question.options.map((option) => (
									<label className={style.label} key={option}>
										<input
											type="radio"
											name={`selectedAnswers.${question.id}`}
											value={option}
											onChange={() => handleOptionChange(question.id, option)}
											checked={formik.values.selectedAnswers[question.id] === option}
										/>
										<span>{option}</span>
									</label>
								))}
								{feedback[question.id] && (
									<p className={style.feedback} style={{ color: feedback[question.id].isCorrect ? 'green' : 'red' }}>
										Question {feedback[question.id].id}: {feedback[question.id].feedbackText}
									</p>
								)}
							</div>
						))}
						<div className={style.button__wrapper}>
							<button className={style.button} type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default GuidanceTest;
