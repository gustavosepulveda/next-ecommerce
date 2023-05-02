import Stripe from "stripe"
import Product from "./components/Products"

//fetch data
const getProducts = async () => {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
		apiVersion: "2022-11-15",
	})
	//fetch products
	const products = await stripe.products.list()
	const productWithPrices = await Promise.all(
		// added Promise.all after is fetches all products successfully,
		//  promise is resolved and can return function and have data available for use
		products.data.map(async (product) => {
			// fetch product prices based on product id
			const prices = await stripe.prices.list({ product: product.id })
			return {
				id: product.id,
				name: product.name,
				price: prices.data[0].unit_amount,
				image: product.images[0],
				currency: prices.data[0].currency,
			}
		})
	)
	return productWithPrices
}

export default async function Home() {
	const products = await getProducts()
	console.log(products)
	return (
		<main className="grid grid-cols-fluid gap-12">
			{/* loop products and every one runs Component Product */}
			{products.map((product) => (
				<Product {...product} key={product.id} />
			))}
		</main>
	)
}
