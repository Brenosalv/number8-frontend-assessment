import { formatPrice } from "@/utils/formatPrice"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../Button"

interface CardProps {
  id: number
  title: string
  location: string
  price: number
  bedrooms: number
  bathrooms: number
  thumbnailUrl: string
}

export function Card({
  id,
  title,
  location,
  bedrooms,
  bathrooms,
  price,
  thumbnailUrl
}: CardProps) {
  return (
    <div className="flex flex-col border">
      <Image
        src={thumbnailUrl}
        alt="Property picture"
        width={150}
        height={150}
        className="bg-blue-800 h-48 w-full"
      />

      <div className="flex flex-col p-2 flex-1">
        <h2 className="text-lg line-clamp-2">
          {title}
        </h2>

        <span className="text-sm text-gray-500">
          {location}
        </span>

        <span className="text-sm text-gray-400 mb-2">
          {bedrooms} beds | {bathrooms} baths
        </span>

        <span className="text-xl mt-auto">
          {formatPrice(price)}
        </span>

        <Link href={id.toString()}>
          <Button.Primary className="w-full">
            View Details
          </Button.Primary>
        </Link>
      </div>
    </div>
  )
}
