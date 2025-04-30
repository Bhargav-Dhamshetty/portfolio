import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_z91jh6k",
        "template_wr9v235",
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "oZhA3P1T4lUTc9Uv0"
      );

      // Send data to backend
      const response = await fetch("http://localhost:5000/contact-api/details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to store message in database.");
      }

      setSuccess("✅ Message sent and stored successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setSuccess("❌ Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div
      id="contact"
      className="max-w-lg mx-auto mt-28 p-8 bg-gray-900 text-white shadow-2xl rounded-lg animate-fade-in"
    >
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">
        Contact Us
      </h1>

      {success && (
        <p
          className={`mt-4 text-center font-semibold text-lg animate-fade-in ${
            success.includes("✅") ? "text-green-400" : "text-red-400"
          }`}
        >
          {success}
        </p>
      )}

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-300">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold p-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
