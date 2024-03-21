import { FilterRoot } from "./FilterRoot"

interface FilterNumberProps {
  label: string
  options: number[]
}

export function FilterNumber({ label, options }: FilterNumberProps) {
  return (
    <FilterRoot label={label}>
      <select defaultValue={options[0]} className="border min-w-12 text-center">
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </FilterRoot>
  )
}
