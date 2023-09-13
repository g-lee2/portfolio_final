import React, { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    window.addEventListener('pageshow', () => {
      setFormData({ name: "", email: "", message: "" });
    });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('pageshow', () => {
        setFormData({ name: "", email: "", message: "" });
      });
    };
  }, []);

  return (
    <div name="contact" className="w-full h-screen bg-[#25274D] flex justify-center items-center p-4">
      <form method="POST" action={process.env.REACT_APP_GETFORM_URL} className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#2e9cca] text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">Send me a message!</p>
        </div>
        <input className="bg-[#898AA6] text-white p-2 placeholder-white" type="text" placeholder="Name" name="name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
        <input className="bg-[#898AA6] text-white p-2 my-4 placeholder-white" type="email" placeholder="Email" name="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
        <textarea className="bg-[#898AA6] text-white p-2 placeholder-white" rows="10" name="message" placeholder="Message" required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
        <button type="submit" className="text-white border-2 rounded-md hover:bg-[#2e9cca] hover:border-[#2e9cca] px-4 py-3 my-8 mx-auto flex items-center">Send</button>
      </form>
    </div>
  );
}

export default Contact;
// getform
