export default function FlightResults({ results }) {
    if (!results || results.length === 0) {
      return <p className="text-center mt-8 text-black-200 text-lg md:text-xl animate-slide-in-up">No flights found.</p>;
    }
  
    return (
      <div className="mt-6 space-y-4">
        {results.map((flight, i) => (
          <div
            key={i}
            className="relative border-2 border-transparent bg-gradient-to-r from-teal-50/80 to-blue-50/80 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-slide-in-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-200/20 to-blue-200/20 rounded-2xl"></div>
            <p className="relative text-gray-800 text-sm md:text-base flex items-center">
              <svg className="w-5 h-5 text-teal-500 mr-2 hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <strong className="text-teal-600 font-semibold">Airline:</strong> {flight.airline || "Unknown"}
            </p>
            <p className="relative text-gray-800 text-sm md:text-base flex items-center">
              <svg className="w-5 h-5 text-teal-500 mr-2 hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <strong className="text-teal-600 font-semibold">Departure:</strong> {flight.departure_time || "N/A"}
            </p>
            <p className="relative text-gray-800 text-sm md:text-base flex items-center">
              <svg className="w-5 h-5 text-teal-500 mr-2 hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <strong className="text-teal-600 font-semibold">Arrival:</strong> {flight.arrival_time || "N/A"}
            </p>
            <p className="relative text-gray-800 text-sm md:text-base flex items-center">
              <svg className="w-5 h-5 text-teal-500 mr-2 hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <strong className="text-teal-600 font-semibold">Duration:</strong> {flight.duration || "N/A"}
            </p>
            <p className="relative text-gray-800 text-sm md:text-base flex items-center">
              <svg className="w-5 h-5 text-teal-500 mr-2 hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <strong className="text-teal-600 font-semibold">Price:</strong> {flight.price || "N/A"}
            </p>
          </div>
        ))}
      </div>
    );
  }