// @pages/Presentation.tsx
import { Link } from "react-router-dom";

const Presentation: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Présentation de notre entreprise</h1>
      <ul>
        <li><Link to="/presentations/qui-sommes-nous" className="text-blue-600 hover:underline">Qui sommes-nous ?</Link></li>
        <li><Link to="/presentations/partenaires" className="text-blue-600 hover:underline">Partenaires</Link></li>
        <li><Link to="/presentations/references" className="text-blue-600 hover:underline">Références</Link></li>
      </ul>
    </div>
  );
};

export default Presentation;
