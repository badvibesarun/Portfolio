import React, { useState } from 'react';
import axios from 'axios';


type ContactFormProps = {
  darkMode: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({ darkMode }) => {
  const [status, setStatus] = useState<string | null>(null);
  // State to manage submission status

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form); // Collect form data

    try {
      // Replace with your Formspree endpoint
      const response = await axios.post('https://formspree.io/f/movjleke', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      if (response.status === 200) {
        setStatus('Form submitted successfully!'); // Show success message
        form.reset(); // Reset the form
      }
    } catch (error) {
      setStatus('Submission failed. Please try again.'); // Show error message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border`}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border`}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border`}
          ></textarea>
        </div>
        <button type="submit" className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'} transition duration-300`}>
          Send Message
        </button>
      </form>

      {status && <p className={`mt-4 text-lg ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{status}</p>} {/* Display status message */}
    </div>
  );
};

export default ContactForm;