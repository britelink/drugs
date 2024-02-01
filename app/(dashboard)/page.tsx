import DrugSearchAutocomplete from "@/components/DrugSearchAutocomplete";
import FeaturedDrugs from "@/components/featuredDrugs";

const DashboardPage = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Drug Information Search</h1>
        <p className="text-gray-600 mt-2">Explore detailed drug information</p>
      </header>

      <main className="mt-8 text-center">
        <DrugSearchAutocomplete />
      </main>

      <section className="mt-12">
        <FeaturedDrugs />
      </section>
    </div>
  );
};

export default DashboardPage;
