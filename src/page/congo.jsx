import React, { useEffect, useState } from "react";
import { auth, storage } from "../firebaseConfig.js";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [userTeamName, setUserTeamName] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        const [teamName] = email.split("@");
        setUserTeamName(teamName);
        console.log(teamName);
        const certificatesRef = storage.ref(`certificates/${teamName}`);

        certificatesRef.listAll().then((result) => {
          const downloadURLPromises = result.items.map((item) =>
            item.getDownloadURL()
          );

          Promise.all(downloadURLPromises)
            .then((downloadURLs) => {
              setCertificates(downloadURLs);
            })
            .catch((error) => {
              console.error("Error fetching download URLs:", error);
            });
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4 space-y-6">
      <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800">
          Congratulations {userTeamName ? userTeamName.toUpperCase() : ""} Team!
        </h2>
        <p className="text-gray-600 mt-2">
          You have successfully reached your destination.
        </p>
        <p className="text-gray-600">Enjoy your achievement!</p>
      </div>

      <div className="bg-teal-700 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Certificates</h1>
        <ul className="space-y-2">
          {certificates.map((certificate, index) => (
            <li key={index}>
              <a
                href={certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                Certificate {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certificates;
