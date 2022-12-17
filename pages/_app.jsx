import '../sass/master.scss';
import { RecoilRoot } from 'recoil';

// Components
import Layout from './Layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</RecoilRoot>
	);
}

export default MyApp;
