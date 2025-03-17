
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">
        Have questions about WatchArbitrage Pro? We're here to help.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">Email: support@watcharbitrage.pro</p>
          <p className="mb-2">Phone: +1 (555) 123-4567</p>
          <p className="mb-2">Hours: Monday-Friday, 9am-5pm EST</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="bg-watch-blue hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
