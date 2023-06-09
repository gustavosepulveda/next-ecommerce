import Image from "next/image"
import { SearchParamTypes } from "@/types/SearchParamTypes"
import formatPrice from "@/util/PriceFormat"
import AddCart from "./AddCart"

export default async function Product({ searchParams }: SearchParamTypes) {
	return (
		<div className="flex flex-col 2x1:flex-row items-center lg:flex justify-between gap-24 text-gray-700">
			{/* imaged of product */}
			<Image
				src={searchParams.image}
				alt={searchParams.name}
				width={600}
				height={600}
				className="w-full"
			/>
			<div className="font-medium text-gray-700">
				{/* name, description, Metadata/features of product */}
				<h1 className="text-2xl font-medium py-2">{searchParams.name}</h1>
				<p className="py-2">{searchParams.description}</p>
				<p className="py-2">{searchParams.features}</p>
				<div className="flex gap-2">
					<p className="font bold text-teal-700">
						{/* shows price of product */}
						{searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
					</p>
				</div>
				<AddCart {...searchParams} />
			</div>
		</div>
	)
}
