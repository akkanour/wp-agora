// @pages/Services.tsx
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Nos services</h1>
      <ul>
        <li><Link to="/services/intervention-sur-incident" className="text-blue-600 hover:underline">Intervention sur Incident</Link></li>
        <li><Link to="/services/contrat-support-maintenance" className="text-blue-600 hover:underline">Contrat de support et Maintenance</Link></li>
        <li><Link to="/services/infogerance-globale-partielle" className="text-blue-600 hover:underline">Infogérance Globale ou Partielle</Link></li>
        <li><Link to="/services/ressource-en-regie" className="text-blue-600 hover:underline">Ressource en Régie</Link></li>
        <li><Link to="/services/integration-erp" className="text-blue-600 hover:underline">Intégration ERP</Link></li>
      </ul>
    </div>
  );
};

export default Services;
