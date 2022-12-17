import styles from './ServiceImage.module.scss';
import Link from 'next/link';

export default function ServiceImage({ img, label = 'Label' }) {
	return (
		<Link href={'/'}>
			<div className={styles.imgContainer}>
				<div className={styles.labelContainer}>
					<h4 className={styles.label}>{label}</h4>
				</div>
				<img src={img.src} className={styles.img} />
			</div>
		</Link>
	);
}
