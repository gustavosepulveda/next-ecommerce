import Image from "next/image"
import { SearchParamTypes } from "@/types/SearchParamTypes"

export default async function Product({ searchParams }: SearchParamTypes) {
	return (
		<div className="flex justify-between gap-24 p-12 text-gray-700">
			<Image
				src={searchParams.image}
				alt={searchParams.name}
				width={600}
				height={600}
			/>
			<div>
				<h1>{searchParams.name}</h1>
				<p>{searchParams.description}</p>
			</div>
		</div>
	)
}
