import { useEffect, useState } from 'react';

import styles from './Nav.module.scss';

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
	// State of nav
	const [showNav, setShowNav] = useState(false);

	// Handle on click event
	const handleClick = (e) => {
		// Toggle the navigation between shown and hidden
		setShowNav(!showNav);
	};

	// Current route path
	const currentRoute = useRouter().asPath;

	useEffect(() => {
		setShowNav(false);
	}, [currentRoute]);

	return (
		<nav className={styles.navBar}>
			<div className={styles.logoContainer}>
				<h5 className={styles.logoText}>
					<Link href={'/'}>
						<span className={`logo-part-1`}>MB </span>
						<span className={`logo-part-2`}>Works</span>
					</Link>
				</h5>
			</div>

			<div
				className={`${styles.burgerContainer} ${
					showNav ? styles.burgerContainerActive : ''
				}`}
				onClick={handleClick}
			>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<ul
				className={`${styles.ul} ${showNav ? '' : styles.ulHidden}`}
				onClick={() => setShowNav(false)}
			>
				<li className={styles.li}>
					<Link
						href={'/'}
						className={`${styles.a} ${
							currentRoute === '/' ? styles.active : ''
						}`}
					>
						Home
					</Link>
				</li>
				<li className={styles.li}>
					<Link
						href={'/#who-are-we'}
						className={`${styles.a} ${
							currentRoute === '/#who-are-we' ? styles.active : ''
						}`}
					>
						Who are we
					</Link>
				</li>
				<li className={styles.li}>
					<Link
						href={'#services-we-offer'}
						className={`${styles.a} ${
							currentRoute === '/#services-we-offer'
								? styles.active
								: ''
						}`}
					>
						Services
					</Link>
				</li>
				<li className={styles.li}>
					<Link
						href={'#our-work'}
						className={`${styles.a} ${
							currentRoute === '/#our-work' ? styles.active : ''
						}`}
					>
						Our work
					</Link>
				</li>
				<li className={styles.li}>
					<Link
						href={'/contact-us'}
						className={`${styles.a} ${
							currentRoute === '/#contact-us' ? styles.active : ''
						}`}
					>
						Contact us
					</Link>
				</li>
			</ul>
		</nav>
	);
}
