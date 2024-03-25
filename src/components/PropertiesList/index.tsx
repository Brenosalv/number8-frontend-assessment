import { getPropertiesData } from '@/utils/getPropertiesData'
import { ErrorMessage } from '../ErrorMessage'
import { List } from './List'

export async function PropertiesList() {
  try {
    const { properties } = await getPropertiesData()

    return <List properties={properties} />
  } catch (error) {
    return <ErrorMessage message={(error as Error).message} />
  }
}
