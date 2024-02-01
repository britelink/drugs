import DrugSearchAutocomplete from "@/components/DrugSearchAutocomplete";
import FeaturedDrugs from "@/components/featuredDrugs";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Africa's No. #1 Drug Information</h1>
        <p className="text-gray-600 mt-2">
          Discover the comprehensive drug information you need for research,
          education and software integration.
        </p>
        <Link
          href="britelink.io"
          target="_blank"
          className="flex text-center  font-semibold"
        >
          Powered by <span>Brite</span>{" "}
          <span className="text-orange-600">Link.</span>
        </Link>
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
