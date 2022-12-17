// Styles
import styles from './WorkGallery.module.scss';

// Components
import WorkGalleryItem from './WorkGalleryItem';

// Images
import BarnHouseImg from '../public/assets/gallery/barn-house.JPG';
import BathImg from '../public/assets/gallery/bath.JPEG';
import BathroomSinkImg from '../public/assets/gallery/bathroom-sink.JPG';
import KitchenWideImg from '../public/assets/gallery/kitchen-wide.JPEG';
import KitchenWorktopImg from '../public/assets/gallery/kitchen-worktop.JPEG';
import ShedImg from '../public/assets/gallery/shed.JPG';

export default function WorkGallery() {
	const imgArray = [
		{
			key: 1,
			src: BarnHouseImg.src,
			alt: 'Image of a house converter from a barn',
		},
		{
			key: 2,
			src: BathImg.src,
			alt: 'Image of a new bath',
		},
		{
			key: 3,
			src: BathroomSinkImg.src,
			alt: 'Image of a bathroom sink',
		},
		{
			key: 4,
			src: KitchenWideImg.src,
			alt: 'Image of a newly renovated kitchen with island in the middle',
		},
		{
			key: 5,
			src: KitchenWorktopImg.src,
			alt: 'Image of brand new, bright kitchen worktop',
		},
		{
			key: 6,
			src: ShedImg.src,
			alt: 'Image of a custom shed created in the back yard',
		},
	];
	return (
		<div className={`${styles.gallery}`}>
			{imgArray.map((item, index) => (
				<WorkGalleryItem key={item.key} data={item} />
			))}
		</div>
	);
}
