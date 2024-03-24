import { ContactAgentForm } from "@/components/ContactAgentForm"
import { PropertyDetailsSection } from "@/components/PropertyDetailsSection"
import { SaveProperty } from "@/components/SaveProperty"
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

        <section className="flex flex-col gap-8 w-[35%] max-md:w-full h-fit">
          <SaveProperty newPropertyToSave={property} />
          <ContactAgentForm />
        </section>
      </main>
    )
  } catch (error) {
    alert(error) // TODO: Implement a snackbar to show the error to the user.
  }
}
