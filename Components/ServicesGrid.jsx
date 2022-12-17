// Styles
import styles from './ServicesGrid.module.scss';

// Component
import ServiceGridItem from './ServiceGridItem';

export default function ServicesGrid({ data }) {
	return (
		<div className={`${styles.imageGrid}`}>
			{data.map((item, index) => (
				<ServiceGridItem
					key={item.key}
					img={item.src}
					label={item.label}
					content={item.content}
				/>
			))}
		</div>
	);
}
