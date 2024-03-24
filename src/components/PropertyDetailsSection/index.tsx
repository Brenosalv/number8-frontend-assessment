import { Property } from "@/types/Property"
import { formatPrice } from "@/utils/formatPrice"
import { format } from "date-fns"
import Image from "next/image"
import { PropertyDetail } from "../PropertyDetail"

interface PropertyDetailsSectionProps {
  property?: Property
}

export function PropertyDetailsSection({ property }: PropertyDetailsSectionProps) {
  const price = formatPrice(property?.["Sale Price"] || 0)

  const dateListed = format(new Date(property?.DateListed || ""), "MMM dd, yyyy")

  return (
    <section className="flex flex-col gap-3 w-[65%] max-md:w-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl max-md:text-lg">
            {property?.Title}
          </h1>

          <h2 className="text-gray-800 max-md:text-sm">
            {property?.Location}
          </h2>
        </div>

        <div className="flex flex-col text-right text-nowrap max-md:text-wrap">
          <h2 className="text-2xl max-md:text-lg max-md:text-nowrap">
            {price}
          </h2>

          <h3 className="text-gray-400 max-md:text-sm">
            Date Listed: {dateListed}
          </h3>
        </div>
      </div>

      <Image
        src={property?.PictureURL || ""}
        width={700}
        height={700}
        className="max-h-[372px] object-cover bg-blue-800"
        alt="Property image"
      />

      <div className="flex justify-around items-center border border-gray-300 p-4 max-md:flex-wrap max-md:gap-4">
        <PropertyDetail name="bed" value={property?.Bedrooms || 0} />
        <PropertyDetail name="bath" value={property?.Bathrooms || 0} />
        <PropertyDetail name="parking" value={property?.Parking || 0} />
        <PropertyDetail name="sqft" value={property?.Sqft || 0} />
        <PropertyDetail name="year built" value={property?.YearBuilt || 0} />
      </div>

      <p className="text-gray-500 max-md:text-sm">
        {property?.Description}
      </p>
    </section>
  )
}
