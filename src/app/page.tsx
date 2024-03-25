import { PropertiesFilterBar } from '@/components/PropertiesFilterBar'
import { PropertiesList } from '@/components/PropertiesList'
import { FilterContextProvider } from '@/contexts/FilterContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Home - Discover the Perfect Property for You In N8 Real Estate E-Commerce',
  description:
    'Welcome to N8, where you can browse a wide selection of premium properties for sale. Find your dream home, apartment, or commercial space with ease. Start your property search today!',
}

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
