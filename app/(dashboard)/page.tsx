import DrugSearchAutocomplete from "@/components/DrugSearchAutocomplete";
import FeaturedDrugs from "@/components/featuredDrugs";

const DashboardPage = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center">
        <h1 className="text-4xl font-bold">
          Discover the Comprehensive Drug Information You Need
        </h1>
        <p className="text-gray-600 mt-2">
          Your trusted source for reliable drug data and research, aligned with
          African standards, and ready to integrate into software.
        </p>
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
