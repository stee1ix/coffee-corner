import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner';

export default function Home() {
	const handleOnBannerBtnClick = () => {
		console.log('Banner button');
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Coffee Corner</title>

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner
					buttonText="View stores nearby"
					handleOnClick={handleOnBannerBtnClick}
				/>
				<div className={styles.heroImage}>
					<Image
						src="/static/hero-image.png"
						alt="coffee drinking lady"
						width={700}
						height={400}
					/>
				</div>
			</main>
		</div>
	);
}
