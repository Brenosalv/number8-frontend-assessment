import { Button } from '@/components/Button'
import { ContactAgentForm } from '@/components/ContactAgentForm'
import { ErrorMessage } from '@/components/ErrorMessage'
import { PropertyDetailsSection } from '@/components/PropertyDetailsSection'
import { SaveProperty } from '@/components/SaveProperty'
import { getPropertiesData } from '@/utils/getPropertiesData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Property Type] for Sale - [Property Address] - N8',
  description:
    'Discover the beauty of this [Property Type] situated at [Property Address]. Browse through images, specifications, and features of this property for sale on N8. Find your perfect match today!',
}

interface PropertyDetailsProps {
  params: {
    propertyId: string
  }
}

export default async function PropertyDetails({
  params,
}: PropertyDetailsProps) {
  try {
    const { properties } = await getPropertiesData()
    const { propertyId } = params
    const property = properties.find(({ Id }) => Id === Number(propertyId))

    return (
      <>
        <header className='mb-6'>
          <Button.Back />
        </header>
        <main className='flex gap-8 max-md:flex-col w-full'>
          <PropertyDetailsSection property={property} />

          <div className='flex flex-col gap-8 w-[35%] max-md:w-full h-fit'>
            <SaveProperty newPropertyToSave={property} />
            <ContactAgentForm />
          </div>
        </main>
      </>
    )
  } catch (error) {
    return <ErrorMessage message={(error as Error).message} />
  }
}
