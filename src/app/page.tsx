import { PropertiesFilterBar } from '@/components/PropertiesFilterBar'
import { PropertiesList } from '@/components/PropertiesList'
import { FilterContextProvider } from '@/contexts/FilterContext'

export default function Home() {
  return (
    <FilterContextProvider>
      <div className='flex items-center justify-center flex-col gap-12 mx-auto w-full'>
        <header className='w-full'>
          <PropertiesFilterBar />
        </header>
        <main className='w-full'>
          <PropertiesList />
        </main>
      </div>
    </FilterContextProvider>
  )
}
