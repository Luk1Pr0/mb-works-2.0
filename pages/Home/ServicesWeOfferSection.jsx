import styles from './ServicesWeOfferSection.module.scss';

export default function ServiceWeOfferSection() {
	return (
		<section
			className={`${styles.section} font-light`}
			id='services-we-offer'
		>
			<h2 className={`${styles.heading}`}>Services we offer</h2>
			<div className={`${styles.gridContainer}`}>
				<div className='container'>
					<h4 className={`${styles.content}`}>
						We are always fully committed to each project we
						undertake. Always willing on amending our work, until
						you are happy with the final result. All our projects
						are carefully planned and their timeframes are always
						realistic, but at the same time, not overexaggerated.
					</h4>
				</div>
				<div className='container'></div>
			</div>
		</section>
	);
}
