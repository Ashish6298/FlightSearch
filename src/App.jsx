

import { useState } from "react";
import SearchForm from "./components/SearchForm";
import FlightResults from "./components/FlightResults";
import SkyCanvas from "./components/SkyCanvas";

function App() {
  const [results, setResults] = useState([]);

  const searchFlights = async (form) => {
    const url = "https://flight-data28.p.rapidapi.com/flights/search/summary";
    const options = {
      method: "POST",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "flight-data28.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fly_from: form.origin,
        fly_to: form.destination,
        date_from: form.departureDate,
        date_to: form.departureDate,
        adults: form.travelers,
        curr: "USD",
        limit: 10,
      }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const summary = data || {};
      const flights = [
        {
          airline: summary.airlines?.join(", "),
          departure_time: summary.departure_city || "Unknown",
          arrival_time: summary.arrival_city || "Unknown",
          duration: `${summary.total_flights} total flights`,
          price: `From $${summary.price_range?.min_price} to $${summary.price_range?.max_price}`,
        },
      ];
      setResults(flights);
    } catch (error) {
      console.error("Flight API error:", error);
      setResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-teal-200 to-orange-300 relative overflow-hidden">
      <SkyCanvas />
      <main className="relative z-10 flex flex-col items-center p-4 md:p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center text-white drop-shadow-lg tracking-tight animate-slide-in-up">
          ✈️ Soar to New Horizons
        </h1>
        <div className="w-full max-w-5xl">
          <SearchForm onSearch={searchFlights} />
          <FlightResults results={results} />
        </div>
      </main>
    </div>
  );
}

export default App;