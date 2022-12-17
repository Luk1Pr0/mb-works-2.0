import styles from './WhoAreWeSection.module.scss';
import Link from 'next/link';

export default function WhoAreWeSection() {
	return (
		<section className={`${styles.section} font-light`} id='who-are-we'>
			<h2 className={`${styles.heading}`}>Who are we</h2>
			<div className='container-center'>
				<h4 className={styles.blurb}>
					MB Works is a team of friendly professionals, with over 10
					years of experience in the construction industry.
				</h4>
			</div>
			<div className='container'>
				<strong>
					<p>
						Working in close partnership with
						<span className='active'>
							{' '}
							Platinum Property Services,
						</span>{' '}
						we provide high quality services for a great value, to
						all of our customers. Our main focus is on{' '}
						<span className='active'>
							{' '}
							building, refurbishing,
						</span>{' '}
						and
						<span className='active'> repairing </span> all kinds of
						properties. Based in{' '}
						<span className='active'>Slough</span>, we offer
						services within:
					</p>
					<ul className={`${styles.ul}`}>
						<h6 className='active'>
							<li>Slough</li>
							<li>London</li>
							<li>Beaconsfield</li>
							<li>Maidenhead</li>
							<li>Plus many more locations around London</li>
						</h6>
					</ul>
					<p>
						If you have any questions or a project that you need
						assistance with,{' '}
						<Link href={'#'} className='a'>
							click here
						</Link>{' '}
						to get in touch now!
					</p>
				</strong>
			</div>
		</section>
	);
}
