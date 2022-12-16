import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
	return (
		<footer className={`${styles.footer}`}>
			<div className={`${styles.column2}`}>
				<div className={`${styles.footerCaption}`}>
					<h6>
						MB Works {new Date().getFullYear()}
						<span>&#169;</span>
					</h6>
				</div>
			</div>
		</footer>
	);
}
