// @pages/Contact.tsx
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    societe: '',
    email: '',
    telephone: '',
    fonction: '',
    objet: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-[#23374D]">Contactez-nous</h1>
      <p className="mb-8">Nous serons ravis de répondre à vos questions. N'hésitez pas à nous contacter.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-[#23374D]">
              Nom* <input type="text" name="nom" value={formData.nom} onChange={handleChange} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3572EF]" />
            </label>
          </div>
          <div>
            <label className="block font-semibold text-[#23374D]">
              Prénom* <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3572EF]" />
            </label>
          </div>
          <div>
            <label className="block font-semibold text-[#23374D]">
              Société* <input type="text" name="societe" value={formData.societe} onChange={handleChange} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3572EF]" />
            </label>
          </div>
          <div>
            <label className="block font-semibold text-[#23374D]">
              E-mail* <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3572EF]" />
            </label>
          </div>
          <div>
            <label className="block font-semibold text-[#23374D]">
              Téléphone <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3572EF]" />
            </label>
          </div>
          <div>
            <label className="block font-semibold text-[#23374D]">
              Fonction <input type="text" name="fonction" value={formData.fonction} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3572EF]" />
            </label>
          </div>
        </div>
        <div>
          <label className="block font-semibold text-[#23374D]">
            Objet <input type="text" name="objet" value={formData.objet} onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3572EF]" />
          </label>
        </div>
        <div>
          <label className="block font-semibold text-[#23374D]">
            Message <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3572EF]" />
          </label>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-[#1089FF] rounded-md hover:bg-[#3572EF]">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
