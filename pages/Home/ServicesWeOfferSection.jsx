import styles from './ServicesWeOfferSection.module.scss';

// Components
import ServicesGrid from '../../Components/ServicesGrid';

// Images
import KitchenImg from '../../public/assets/kitchen-thumbnail.JPEG';
import BathroomImg from '../../public/assets/bathroom-thumbnail.JPEG';
import PatioImg from '../../public/assets/patio-thumbnail.JPEG';
import OtherImg from '../../public/assets/other-thumbnail.jpg';

export default function ServiceWeOfferSection() {
	// Add all the imported images into the array that will be passed down to the gallery component
	const itemData = [
		{
			key: 1,
			src: KitchenImg,
			label: 'Kitchen',
			content:
				'MB Works has years of experience, building, fixing and renovating kitchens. We ensure that the quality of your kitchen is top notch. Below, you can find two images, before and after a kitchen has been renovated, by the MB Works team.',
		},
		{
			key: 2,
			src: BathroomImg,
			label: 'Bathroom',
			content:
				"Bathroom problems? No problems! We're here to fix, maintain or even create a brand new bathroom for you, from scratch! Modern? Old? Maybe a mix of both styles? You decide, we create it! Below, you can find an image of a bathroom created by the MB Works team.",
		},
		{
			key: 3,
			src: PatioImg,
			label: 'Patio',
			content:
				'One of the key projects that we undertake are patios. Starting from scratch, we carefully plan, construct and going step-by-step, build the patio, ensuring that you are happy with each stage.Below, you can find two images, before and after a kitchen has been renovated, by the MB Works team.',
		},
		{
			key: 4,
			src: OtherImg,
			label: 'Other',
			content:
				"That's not all! We provide you with a variety of other services, such as loft conversions, garage conversions, extension building and fixing your urgent issues, which need to be fixed right away. We are also happy to create custom wardrobes and cabinets for your bedroom or kitchen. If there is something you are not sure about, don't hesitate to get in touch with us!",
		},
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
					<ServicesGrid data={itemData} />
				</div>
			</div>
		</section>
	);
}
