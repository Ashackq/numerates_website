import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

const UpcomingEventsContainer = ({ events }) => {
  const calculateTimeRemaining = (targetDate) => {
    const now = new Date();
    const eventDate = new Date(targetDate);
    const timeDiff = eventDate - now;

    return {
      days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
    };
  };

  const [eventsWithTimeRemaining, setEventsWithTimeRemaining] = useState(
    events.map((event) => ({
      ...event,
      timeRemaining: calculateTimeRemaining(event.date),
    }))
  );

  const [confetti, setConfetti] = useState([]);
  const confettiContainerRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEventsWithTimeRemaining(
        events.map((event) => ({
          ...event,
          timeRemaining: calculateTimeRemaining(event.date),
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [events]);

  const handleMouseMove = (event, index) => {
    const { clientX, clientY } = event;
    const { left, top } =
      confettiContainerRefs.current[index].getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setConfetti((prevConfetti) => ({
      ...prevConfetti,
      [index]: { x, y },
    }));
  };

  return (
    <div className="bg-black text-white py-8 px-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-center text-3xl font-bold mb-6">Upcoming Events</h2>

      <div className="overflow-y-auto max-h-[350px] space-y-4 scrollbar-hide">
        {eventsWithTimeRemaining.map((event, index) => (
          <a
            href={event.link}
            key={event.name}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="relative p-5 bg-white text-black rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
              ref={(el) => (confettiContainerRefs.current[index] = el)}
              onMouseMove={(event) => handleMouseMove(event, index)}
            >
              {confetti[index] && (
                <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                  numberOfPieces={100}
                  recycle={false}
                  gravity={0.2}
                  style={{
                    position: "absolute",
                    zIndex: -1,
                    height: "100%",
                    width: "100%",
                  }}
                />
              )}

              <h3 className="text-lg font-semibold">{event.name}</h3>

              {/* Countdown Timer */}
              <table className="w-full text-center border-collapse mt-4">
                <thead>
                  <tr className="text-gray-700">
                    <th className="py-1 px-3 border border-gray-300">Days</th>
                    <th className="py-1 px-3 border border-gray-300">Hours</th>
                    <th className="py-1 px-3 border border-gray-300">
                      Minutes
                    </th>
                    <th className="py-1 px-3 border border-gray-300">
                      Seconds
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-3 border border-gray-300">
                      {event.timeRemaining.days}
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      {event.timeRemaining.hours}
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      {event.timeRemaining.minutes}
                    </td>
                    <td className="py-2 px-3 border border-gray-300">
                      {event.timeRemaining.seconds}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsContainer;
