import { PropertiesFilterBar } from "@/components/PropertiesFilterBar";
import { PropertiesList } from "@/components/PropertiesList";

export default function Home() {
  return (
    <div className="my-6 flex items-center justify-center flex-col gap-12 mx-auto w-full">
      <PropertiesFilterBar />
      <PropertiesList />
    </div>
  );
}
