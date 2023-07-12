import "./App.css";
import ChartComponent from "./ChartComponent";
import Footer from "./Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-tw-cream grid place-items-center px-6">
      <main className="w-full max-w-[36rem]">
        <Header />

        <section className="bg-tw-pale-orange rounded-xl md:rounded-3xl p-6 md:p-12 shadow-sm ring-1 ring-tw-medium-brown/10">
          <ChartComponent />

          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
