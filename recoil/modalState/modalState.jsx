import { atom } from 'recoil';

export const showModalAtom = atom({
	key: 'showModal',
	default: false,
});

export const modalHeadingAtom = atom({
	key: 'modalHeading',
	default: 'heading',
});

export const modalContentAtom = atom({
	key: 'modalContent',
	default: 'Content',
});
