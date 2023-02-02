import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='ja'>
			<Head>
				<title>みすきーねこづき</title>
				<meta name='description' content='みすきーねこづき' />
				<link rel='icon' href='https://misskey-white.s3.ap-northeast-1.amazonaws.com/mashiro/mashiro_bg_512.png' />
				<link rel='apple-touch-icon' ref='https://misskey-white.s3.ap-northeast-1.amazonaws.com/mashiro/mashiro_bg_512.png' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
