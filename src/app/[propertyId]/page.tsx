import { PropertyDetail } from "@/components/PropertyDetail"
import { formatPrice } from "@/utils/formatPrice"
import { getPropertiesData } from "@/utils/getPropertiesData"
import { format } from "date-fns"
import Image from "next/image"

interface PropertyDetailsProps {
  params: {
    propertyId: string
  }
}

export default async function PropertyDetails({ params }: PropertyDetailsProps) {
  try {
    const { properties } = await getPropertiesData()

    const { propertyId } = params

    const property = properties.find(({ Id }) => Id === Number(propertyId))

    const price = formatPrice(property?.["Sale Price"] || 0)

    const dateListed = format(new Date(property?.DateListed || ""), "MMM dd, yyyy")

    return (
      <main>
        <div className="flex gap-8">
          <div className="flex flex-col gap-4 w-[65%]">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="text-2xl">
                  {property?.Title}
                </h1>

                <h2 className="text-gray-800">
                  {property?.Location}
                </h2>
              </div>

              <div className="flex flex-col text-right text-nowrap">
                <h2 className="text-2xl">
                  {price}
                </h2>

                <h3 className="text-gray-400">
                  Date Listed: {dateListed}
                </h3>
              </div>
            </div>

            <Image src={property?.PictureURL || ""} width={600} height={600} className="h-2/5 object-cover bg-blue-800" alt="Property image" />

            <div className="flex justify-around items-center border p-4">
              <PropertyDetail name="bed" value={property?.Bedrooms || 0} />
              <PropertyDetail name="bath" value={property?.Bathrooms || 0} />
              <PropertyDetail name="parking" value={property?.Parking || 0} />
              <PropertyDetail name="sqft" value={property?.Sqft || 0} />
              <PropertyDetail name="year built" value={property?.YearBuilt || 0} />
            </div>

            <p className="text-gray-500 text-md">
              {property?.Description}
            </p>
          </div>

          <form className="w-[35%]">
            {/* TODO: add the form */}
          </form>
        </div>
      </main>
    )
  } catch (error) {
    alert(error) // TODO: Implement a snackbar to show the error to the user.
  }
}
