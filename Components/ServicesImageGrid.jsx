import ServiceImage from './ServiceImage';
import styles from './ServicesImageGrid.module.scss';

export default function ImageGrid({ imgArray }) {
	return (
		<div className={`${styles.imageGrid}`}>
			{imgArray.map((img) => (
				// <div className={styles.imgContainer}>
				// 	<img src={img.src} className={styles.img} />
				// </div>
				<ServiceImage img={img.src} label={img.label} />
			))}
		</div>
	);
}
