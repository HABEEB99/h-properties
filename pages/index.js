import Head from 'next/head';
// import Image from 'next/image';
import Header from '../components/header/Header';
import Property from '../components/property/Property';
import { baseUrl, fetchApi } from '../lib/fetchApi';

export const getStaticProps = async () => {
	const forSaleProperty = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`,
	);
	const forRentProperty = await fetchApi(
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`,
	);
	return {
		props: {
			forSale: forSaleProperty?.hits,
			forRent: forRentProperty?.hits,
		},
	};
};

export default function Home({ forSale, forRent }) {
	// console.log(forSale, forRent);
	return (
		<div className="">
			<Head>
				<title>H-PROPERTIES</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/real-estate.png" />
			</Head>

			<h1 className=" py-4 text-4xl font-bold text-gray-600">
				Buy or Rent a Property
			</h1>
			<div className="flex items-center justify-around flex-wrap   ">
				{forSale.map((property) => (
					<Property data={property} key={property.id} />
				))}
			</div>

			<div className="flex items-center justify-around flex-wrap   ">
				{forRent.map((property) => (
					<Property data={property} key={property.id} />
				))}
			</div>
		</div>
	);
}
