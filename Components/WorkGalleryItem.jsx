// Styles
import styles from './WorkGalleryItem.module.scss';

export default function WorkGalleryItem({ data }) {
	return (
		<div className={`${styles.imgContainer}`}>
			<img className={styles.img} src={data.src} alt='' />
		</div>
	);
}
