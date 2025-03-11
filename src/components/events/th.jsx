import React, { useState } from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

const UpcomingEventsContainer = ({ events }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000); // Auto-stop confetti after 2 seconds
  };

  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-md mx-auto mt-10 w-full max-w-4xl">
      <h2 className="text-center text-3xl font-bold mb-6">Upcoming Events</h2>

      <div className="overflow-y-auto max-h-[350px] space-y-4 scrollbar-hide">
        {events.map((event) => (
          <Link to={`./event${event.id}`} key={event.id} className="block">
            <div
              className="relative p-5 bg-white text-black rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
              onMouseEnter={triggerConfetti}
            >
              {showConfetti && (
                <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                  numberOfPieces={100}
                  recycle={false}
                  gravity={0.2}
                  style={{ position: "absolute", zIndex: -1 }}
                />
              )}
              <h3 className="text-lg font-semibold">{event.name}</h3>
              <h1 className="text-blue-500 font-bold">Certificates Are Out!</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsContainer;
