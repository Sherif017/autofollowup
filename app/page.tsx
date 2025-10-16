import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h2 className="text-lg font-medium mt-4">Bienvenue 👋</h2>
        <p className="text-gray-700 mt-2">
          Cette app deviendra ton CRM + moteur de relances automatiques.
        </p>
      </main>
    </>
  );
}
