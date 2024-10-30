// @pages/Consulting.tsx
import { Link } from "react-router-dom";

const Consulting: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Consulting</h1>
      <ul>
        <li><Link to="/consulting/etude-besoins" className="text-blue-600 hover:underline">Étude des besoins</Link></li>
        <li><Link to="/consulting/definir-perimetre-prestations" className="text-blue-600 hover:underline">Définir le périmètre des Prestations</Link></li>
        <li><Link to="/consulting/etude-solutions-strategiques" className="text-blue-600 hover:underline">Étude et intégration des Solutions Stratégiques</Link></li>
        <li><Link to="/consulting/rapports-livrables" className="text-blue-600 hover:underline">Rapports et Livrables</Link></li>
      </ul>
    </div>
  );
};

export default Consulting;
