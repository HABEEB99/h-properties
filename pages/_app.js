import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider attribute="class">
			<AnimatePresence>
				<motion.div
					key={router.route}
					initial="pageInitial"
					animate="pageAnimate"
					exit="pageExit"
					variants={{
						pageInitial: {
							opacity: 0,
						},
						pageAnimate: {
							opacity: 1,
						},
						pageExit: {
							backgroundColor: 'white',
							filter: `invert()`,
							opacity: 0,
						},
					}}
				>
					<Layout>
						<NextNProgress />
						<Component {...pageProps} />
					</Layout>
				</motion.div>
			</AnimatePresence>
		</ThemeProvider>
	);
}

export default MyApp;
