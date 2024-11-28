import ContactForm from "@components/ContactForm";
import PrivacyModal from "@components/PrivacyModal";
import { useState } from "react";


export default function Contact() {
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);

  const openPrivacyModal = () => setPrivacyModalOpen(true);
  const closePrivacyModal = () => setPrivacyModalOpen(false);

  return (
    <div className="container mx-auto px-6 md:px-16 lg:px-32 xl:px-44">
      {/* Formulaire de contact */}
      <ContactForm openPrivacyModal={openPrivacyModal} />

      {/* Modal de politique de confidentialité */}
      {isPrivacyModalOpen && <PrivacyModal closePrivacyModal={closePrivacyModal} />}
    </div>
  );
}
