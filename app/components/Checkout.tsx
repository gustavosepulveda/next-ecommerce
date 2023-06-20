"use client"

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { useCartStore } from "@/store"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

export default function Checkout() {
	const cartStore = useCartStore()
	const router = useRouter()
	const [clientSecret, setClientSecret] = useState("")

	useEffect(() => {
		// Create a payament Intent as soon as the page loads
		fetch("/api/create-payment-intent", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				items: cartStore.cart,
				payment_intent_id: cartStore.paymentIntent,
			}),
		})
			.then((res) => {
				if (res.status === 403) {
					return router.push("/api/auth/signin")
				}

				return res.json()
			})
			.then((data) => {
				setClientSecret(data.payment_intent_id.client_secret)
				cartStore.setPaymentIntent(data.paymentIntent.id)
			})
	}, [])

	return (
		<div>
			<h1>Checkouts</h1>
		</div>
	)
}
