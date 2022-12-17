// Styles
import styles from './OurWorkSection.module.scss';

// Components
import WorkGallery from '../../Components/WorkGallery';

export default function OurWorkSection() {
	return (
		<section className={`${styles.section} font-light`} id='our-work'>
			<h2 className={`${styles.heading}`}>Our work</h2>
			<div className='container'>
				<WorkGallery />
			</div>
		</section>
	);
}
