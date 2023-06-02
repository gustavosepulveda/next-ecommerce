"use client"

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { useCartStore } from "@/store"
import { useState, useEffect } from "react"

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

export default function Checkout() {
	const cartStore = useCartStore()
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
	}, [])
}
