// @pages/Services.tsx
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#024CAA]">Nos Services</h1>

      {/* Liste de services */}
      <nav className="mb-8 text-center">
        <ul className="flex flex-wrap justify-center space-x-4">
          <li><Link to="#intervention-sur-incident" className="text-blue-600 hover:underline">Intervention sur Incident</Link></li>
          <li><Link to="#contrat-support-maintenance" className="text-blue-600 hover:underline">Contrat de support et Maintenance</Link></li>
          <li><Link to="#infogerance-globale-partielle" className="text-blue-600 hover:underline">Infogérance Globale ou Partielle</Link></li>
          <li><Link to="#ressource-en-regie" className="text-blue-600 hover:underline">Ressource en Régie</Link></li>
          <li><Link to="#integration-erp" className="text-blue-600 hover:underline">Intégration ERP</Link></li>
        </ul>
      </nav>

      

      

      

      

      
    </div>
  );
};

export default Services;
