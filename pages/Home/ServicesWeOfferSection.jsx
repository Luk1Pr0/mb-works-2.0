import styles from './ServicesWeOfferSection.module.scss';

// Components
import ServicesImageGrid from '../../Components/ServicesImageGrid';

// Images
import KitchenImg from '../../public/assets/kitchen-thumbnail.JPEG';
import BathroomImg from '../../public/assets/bathroom-thumbnail.JPEG';
import PatioImg from '../../public/assets/patio-thumbnail.JPEG';
import OtherImg from '../../public/assets/other-thumbnail.jpg';

export default function ServiceWeOfferSection() {
	// Add all the imported images into the array that will be passed down to the gallery component
	const imgArray = [
		{ src: KitchenImg, label: 'Kitchen' },
		{ src: BathroomImg, label: 'Bathroom' },
		{ src: PatioImg, label: 'Patio' },
		{ src: OtherImg, label: 'Other' },
	];
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
				<div className='container'>
					<ServicesImageGrid imgArray={imgArray} />
				</div>
			</div>
		</section>
	);
}
