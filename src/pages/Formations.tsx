// @pages/Formations.tsx
import { Link } from "react-router-dom";

const Formations: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Nos Formations</h1>
      <ul>
        <li><Link to="/formations/inter-entreprises" className="text-blue-600 hover:underline">Inter-entreprises</Link></li>
        <li><Link to="/formations/intra-entreprise" className="text-blue-600 hover:underline">Intra-entreprise</Link></li>
        <li><Link to="/formations/formations-personnalisees" className="text-blue-600 hover:underline">Formations Personnalisées</Link></li>
        <li><Link to="/formations/transfert-competences" className="text-blue-600 hover:underline">Transfert de compétences</Link></li>
      </ul>
    </div>
  );
};

export default Formations;
