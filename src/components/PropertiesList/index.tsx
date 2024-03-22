import { getPropertiesData } from "@/utils/getPropertiesData"
import { List } from "./List"

export async function PropertiesList() {
  try {
    const { properties } = await getPropertiesData()

    return (
      <List properties={properties} />
    )
  } catch (error) {
    alert(error) // TODO: Implement a snackbar to show the error to the user.
  }
}
