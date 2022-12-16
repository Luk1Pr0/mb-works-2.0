import styles from './WhoAreWeSection.module.scss';

export default function WhoAreWeSection() {
	return (
		<section
			className={`${styles.section} font-light`}
			id='whoAreWeSection'
		>
			<h2 className={`${styles.heading}`}>Who are we</h2>
			<div className='container-center'>
				<h4>
					MB Works is a team of friendly professionals, with over 10
					years of experience in the construction industry.
				</h4>
			</div>
			<div className='container'>
				<h6>
					Working in close partnership with
					<span className='active'> Platinum Property Services,</span>
					we provide high quality services for a great value, to all
					of our customers. Our main focus is on{' '}
					<span className='active'> building, refurbishing,</span> and
					<span className='active'> repairing </span> all kinds of
					properties. Based in <span className='active'>Slough</span>,
					we offer services within:
					<ul className={`${styles.ul}`}>
						<h6 className='active'>
							<li>Slough</li>
							<li>London</li>
							<li>Beaconsfield</li>
							<li>Maidenhead</li>
							<li>Plus many more locations around London</li>
						</h6>
					</ul>
					If you have any questions or a project that you need
					assistance with, get in{' '}
					<a href='' className='a'>
						touch now!
					</a>
				</h6>
			</div>
		</section>
	);
}
