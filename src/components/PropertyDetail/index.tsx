interface ProperyDetailProps {
  name: string
  value: number
}

export function PropertyDetail({ name, value }: ProperyDetailProps) {
  return (
    <div className="flex flex-col text-center">
      <span className="text-2xl font-bold max-md:text-lg">
        {value}
      </span>

      <span className="text-gray-400 max-md:text-sm">
        {name.toUpperCase()}
      </span>
    </div>
  )
}