"use client"

import { useCartStore } from "@/store"
import { AddCartType } from "@/types/AddCartType"
import { useState } from "react"

export default function AddCart({
	name,
	id,
	image,
	unit_amount,
	quantity,
}: AddCartType) {
	const cartStore = useCartStore()
	const [added, setAdded] = useState(false)

	const handleAddtoCart = () => {
		cartStore.addProduct({ id, name, unit_amount, quantity, image })
		setAdded(true)
		setTimeout(() => {
			setAdded(false)
		}, 500)
	}

	return (
		<>
			<button
				onClick={() =>
					cartStore.addProduct({ id, image, unit_amount, quantity, name })
				}
				className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700"
			>
				Add to cart
			</button>
		</>
	)
}
