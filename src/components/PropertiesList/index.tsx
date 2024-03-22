import { getPropertiesData } from "@/utils/getPropertiesData"
import { Card } from "../Card"

export async function PropertiesList() {
  try {
    const { properties } = await getPropertiesData()

    return (
      <div className="grid gap-x-4 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {properties.map((property) => (
          <Card
            key={property.Id}
            location={property.Location}
            title={property.Title}
            bedrooms={property.Bedrooms}
            bathrooms={property.Bathrooms}
            price={property["Sale Price"]}
            thumbnailUrl={property.PictureURL}
          />
        ))}
      </div>
    )
  } catch (error) {
    alert(error) // TODO: Implement a snackbar to show the error to the user.
  }
}
