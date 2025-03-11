import React, { useState } from "react";
import { db } from "../../firebaseConfig";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newMessage = { name, email, message };
      await db.collection("connects").add(newMessage);
      alert("Information Successfully Added");

      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-3xl mb-4">Contact Us</h1>
      <p className="text-lg mb-2">
        If you have any questions or feedback, feel free to contact us:
      </p>
      <p className="text-lg">Phone: 7069928282</p>
      <p className="text-lg">Address: 3rd Floor, Maitri Building, MIT-WPU</p>

      <form
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mt-4 text-gray-800"
        onSubmit={handleSubmit}
      >
        <label className="block mb-2">Your Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="block mb-2">Your Email</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2">Your Message</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md mb-4 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-300"
        >
          Send Message
        </button>

        {submitStatus === "success" && (
          <p className="text-green-500 mt-4">Message sent successfully!</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-500 mt-4">
            Failed to send message. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
