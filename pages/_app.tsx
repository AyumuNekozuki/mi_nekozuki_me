import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>みすきーねこづき</title>
				<meta name='description' content='みすきーねこづき' />
				<link rel='icon' href='https://misskey-white.s3.ap-northeast-1.amazonaws.com/mashiro/mashiro_bg_512.png' />
				<link rel='apple-touch-icon' ref='https://misskey-white.s3.ap-northeast-1.amazonaws.com/mashiro/mashiro_bg_512.png' />
			</Head>
		</>
	);
}
