"use client"

import { useState, useEffect } from "react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useCartStore } from "@/store"
import formatPrice from "@/util/PriceFormat"


export default function CheckoutForm({
	clientSecret,
}: {
	clientSecret: string
}) {
	const stripe = useStripe()
	const elements = useElements()
    const [isLoading, setIsLoading] = useState(false)

    const cartStore = useCartStore()

    const totalPrice = cartStore.cart.reduce((acc, item) => {
        return acc + item.unit_amount! * item.quantity! 
    }, 0)


	return (
		<form id="payment-form">
			<PaymentElement id="payment-element" options={{ layout: "tabs" }} />
			<h1>Total: </h1>
			<button id="submit" disabled={isLoading || !stripe || !elements}></button>
		</form>
	)
}
