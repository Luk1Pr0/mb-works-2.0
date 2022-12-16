import styles from './Header.module.scss';
export default function Header() {
	return (
		<header className={`${styles.header}`}>
			<div className={`${styles.container}`}>
				<h1 className={`${styles.heading} text-left font-light`}>
					<span className={`logo-part-1`}>MB </span>
					<span className={`logo-part-2`}>Works</span>
					<br />
					Builders you can trust
				</h1>
			</div>
		</header>
	);
}
