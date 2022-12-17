// Recoil
import { useRecoilState } from 'recoil';

// Styling
import styles from './ServiceGridItem.module.scss';

// Recoil state
import {
	showModalAtom,
	modalHeadingAtom,
	modalContentAtom,
} from '../recoil/modalState/modalState';

export default function ServiceGridItem({
	img,
	label = 'Label',
	content = '',
}) {
	// Recoil state
	const [showModal, setShowModal] = useRecoilState(showModalAtom);
	const [modalHeading, setModalHeading] = useRecoilState(modalHeadingAtom);
	const [modalContent, setModalContent] = useRecoilState(modalContentAtom);

	// Handle click action
	const handleClick = () => {
		setShowModal(true);
		setModalHeading(label);
		setModalContent(content);
	};

	return (
		<div className={styles.imgContainer} onClick={handleClick}>
			<div className={styles.labelContainer}>
				<h4 className={styles.label}>{label}</h4>
			</div>
			<img src={img.src} className={styles.img} />
		</div>
	);
}
