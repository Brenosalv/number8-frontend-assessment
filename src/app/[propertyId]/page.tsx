import { ContactAgentForm } from "@/components/ContactAgentForm"
import { PropertyDetailsSection } from "@/components/PropertyDetailsSection"
import { getPropertiesData } from "@/utils/getPropertiesData"

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

    return (
      <main className="flex gap-8 max-md:flex-col w-full">
        <PropertyDetailsSection property={property} />
        <ContactAgentForm />
      </main>
    )
  } catch (error) {
    alert(error) // TODO: Implement a snackbar to show the error to the user.
  }
}
