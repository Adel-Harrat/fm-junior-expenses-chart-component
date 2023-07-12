import "./App.css";
import ChartComponent from "./ChartComponent";
import Footer from "./Footer";
import Header from "./components/Header";

/*
- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day's bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page
- **Bonus**: See dynamically generated bars based on the data provided in the local JSON file
*/

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
