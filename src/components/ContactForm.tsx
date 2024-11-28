import { useState, useRef, useEffect } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const itiRef = useRef<ReturnType<typeof intlTelInput> | null>(null);

  const openPrivacyModal = () => setPrivacyModalOpen(true);
  const closePrivacyModal = () => setPrivacyModalOpen(false);

  useEffect(() => {
    if (phoneInputRef.current) {
      itiRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry: 'auto',
        geoIpLookup: (callback) => {
          fetch('https://ipinfo.io/json?token=8aaa94ccef803e')
            .then((response) => response.json())
            .then((data) => callback(data.country))
            .catch(() => callback('us'));
        },
        loadUtilsOnInit: () => import('intl-tel-input/build/js/utils.js'),
      });
    }

    // Nettoyage de l'instance au démontage du composant
    return () => {
      itiRef.current?.destroy();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Vous devez accepter la politique de confidentialité avant de soumettre le formulaire.");
      return;
    }

    alert("Formulaire soumis avec succès !");
  };

  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-32 xl:px-44">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contactez-nous
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Nous sommes à votre disposition pour toute information supplémentaire.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Prénom */}
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
              Prénom
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Nom */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
              Nom
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Société */}
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
              Société
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Numéro de téléphone */}
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">
              Numéro de téléphone
            </label>
            <div className="mt-2.5 relative">
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                ref={phoneInputRef}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                required
              ></textarea>
            </div>
          </div>

          {/* Politique de confidentialité */}
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                required
              />
            </div>
            <label htmlFor="consent" className="text-sm text-gray-600">
              En sélectionnant ceci, vous acceptez notre{" "}
              <button
                type="button"
                onClick={openPrivacyModal}
                className="font-semibold text-indigo-600 underline"
              >
                politique de confidentialité
              </button>
              .
            </label>
          </div>
        </div>

        {/* Bouton de soumission */}
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Discutons
          </button>
        </div>
      </form>

      {/* Modal de politique de confidentialité */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 overflow-y-auto max-h-[80vh]">
            <h1 className="text-3xl font-bold mb-4">Politique de confidentialité</h1>
            <p className="text-base mb-4">
              Cette politique de confidentialité décrit comment nous collectons, utilisons et
              protégeons vos données personnelles.
            </p>
            <div className="mt-6 text-right">
              <button
                onClick={closePrivacyModal}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
