import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [form, setForm] = useState({
    origin: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: 1,
  });
  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split("T")[0]; // Current date in YYYY-MM-DD format (e.g., "2025-07-31")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being changed
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.origin.trim()) newErrors.origin = "Origin is required.";
    if (!form.destination.trim()) newErrors.destination = "Destination is required.";
    if (!form.departureDate) newErrors.departureDate = "Departure date is required.";
    else if (new Date(form.departureDate) < new Date(today)) {
      newErrors.departureDate = "Departure date cannot be in the past.";
    }
    if (form.returnDate) {
      if (new Date(form.returnDate) < new Date(today)) {
        newErrors.returnDate = "Return date cannot be in the past.";
      } else if (new Date(form.returnDate) < new Date(form.departureDate)) {
        newErrors.returnDate = "Return date cannot be earlier than departure date.";
      }
    }
    if (form.travelers < 1 || isNaN(form.travelers)) {
      newErrors.travelers = "Please enter a valid number of travelers (minimum 1).";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      onSearch(form);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="relative bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-6 md:p-8 animate-slide-in-up">
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" onSubmit={handleSubmit}>
        <div className="relative group">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-teal-400 group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
          </svg>
          <input
            name="origin"
            placeholder="From (IATA or City)"
            value={form.origin}
            onChange={handleChange}
            className={`w-full pl-12 pr-4 py-4 rounded-xl border ${errors.origin ? "border-red-500" : "border-gray-200/50"} bg-white/30 focus:ring-4 focus:ring-teal-300/50 focus:border-teal-400 outline-none transition-all duration-500 text-gray-900 placeholder-gray-400 font-medium text-sm md:text-base group-hover:shadow-glow`}
            required
          />
          {errors.origin && <p className="text-red-500 text-xs mt-1">{errors.origin}</p>}
        </div>
        <div className="relative group">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-teal-400 group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <input
            name="destination"
            placeholder="To (IATA or City)"
            value={form.destination}
            onChange={handleChange}
            className={`w-full pl-12 pr-4 py-4 rounded-xl border ${errors.destination ? "border-red-500" : "border-gray-200/50"} bg-white/30 focus:ring-4 focus:ring-teal-300/50 focus:border-teal-400 outline-none transition-all duration-500 text-gray-900 placeholder-gray-400 font-medium text-sm md:text-base group-hover:shadow-glow`}
            required
          />
          {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
        </div>
        <div className="relative group">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-teal-400 group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <input
            type="date"
            name="departureDate"
            value={form.departureDate}
            onChange={handleChange}
            className={`w-full pl-12 pr-4 py-4 rounded-xl border ${errors.departureDate ? "border-red-500" : "border-gray-200/50"} bg-white/30 focus:ring-4 focus:ring-teal-300/50 focus:border-teal-400 outline-none transition-all duration-500 text-gray-900 font-medium text-sm md:text-base group-hover:shadow-glow`}
            min={today}
            required
          />
          {errors.departureDate && <p className="text-red-500 text-xs mt-1">{errors.departureDate}</p>}
        </div>
        <div className="relative group">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-teal-400 group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <input
            type="date"
            name="returnDate"
            value={form.returnDate}
            onChange={handleChange}
            className={`w-full pl-12 pr-4 py-4 rounded-xl border ${errors.returnDate ? "border-red-500" : "border-gray-200/50"} bg-white/30 focus:ring-4 focus:ring-teal-300/50 focus:border-teal-400 outline-none transition-all duration-500 text-gray-900 font-medium text-sm md:text-base group-hover:shadow-glow`}
            min={today}
          />
          {errors.returnDate && <p className="text-red-500 text-xs mt-1">{errors.returnDate}</p>}
        </div>
        <div className="relative group">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-teal-400 group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <input
            type="number"
            name="travelers"
            value={form.travelers}
            onChange={handleChange}
            className={`w-full pl-12 pr-4 py-4 rounded-xl border ${errors.travelers ? "border-red-500" : "border-gray-200/50"} bg-white/30 focus:ring-4 focus:ring-teal-300/50 focus:border-teal-400 outline-none transition-all duration-500 text-gray-900 font-medium text-sm md:text-base group-hover:shadow-glow`}
            min="1"
            required
          />
          {errors.travelers && <p className="text-red-500 text-xs mt-1">{errors.travelers}</p>}
        </div>
        <button
          type="submit"
          className="w-full sm:col-span-2 lg:col-span-1 bg-teal-500 text-white py-4 rounded-xl hover:bg-teal-600 focus:ring-4 focus:ring-teal-300 focus:ring-offset-2 transition-all duration-300 font-semibold text-sm md:text-base hover:scale-105 animate-pulse-glow"
        >
          Search Flights
        </button>
      </form>
    </div>
  );
}