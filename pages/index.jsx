import Head from 'next/head';

// Components
import Header from './Home/Header';
import WhoAreWeSection from './Home/WhoAreWeSection';
import ServiceWeOfferSection from './Home/ServicesWeOfferSection';

export default function Home() {
	return (
		<>
			<Head>
				<title>MB Works | Your local builders</title>
			</Head>

			<main>
				<Header />
				<WhoAreWeSection />
				<ServiceWeOfferSection />
			</main>
		</>
	);
}
