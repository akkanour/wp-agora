import SolutionsSection from "@components/Acceuil/SolutionsSection";

// @pages/Solutions.tsx
const Solutions: React.FC = () => {
    return (
      <div className="container mx-auto px-6 md:px-16 lg:px-32 xl:px-44">
        <section className="space-y-6 text-gray-700 text-justify">
      <h2 className="text-3xl font-extrabold text-[#024CAA] mb-6">Nos Solutions</h2>
      <p >
        Chez <strong>AGORA TECHNOLOGY</strong>, nous mettons en avant notre expertise approfondie en matière de technologies et de services innovants, visant à répondre aux exigences croissantes en matière de sécurité, de performance et de flexibilité des infrastructures informatiques modernes.
      </p>
      <p>
        Nous couvrons un large éventail de solutions qui s'adaptent aux besoins spécifiques de nos clients. Nos solutions de <strong>sauvegarde</strong> assurent la protection et la récupération efficace des données critiques, tandis que nos systèmes de <strong>stockage</strong> offrent une capacité d'adaptation et une fiabilité optimales. Nous déployons des solutions de <strong>messagerie</strong> et de <strong>collaboration</strong> telles que Microsoft Exchange et SharePoint, facilitant la communication et la productivité au sein des entreprises.
      </p>
      <p >
        Dans le domaine des infrastructures, nous proposons des services complets incluant <strong>Active Directory</strong>, les environnements <strong>virtualisés</strong>, et la <strong>haute disponibilité</strong>, garantissant ainsi une continuité opérationnelle et une performance optimisée. Nos solutions de <strong>sécurité</strong>, intégrant des technologies de pointe telles que les UTM Sophos et la gestion des correctifs, permettent de protéger les systèmes contre les menaces actuelles et d'assurer une gestion proactive des risques.
      </p>
      <p >
        Grâce à des outils spécialisés comme <strong>ManageEngine</strong> pour la gestion et l’audit d’Active Directory, ainsi que des modules ERP et DMS pour la gestion commerciale et financière, nous aidons nos clients à automatiser, simplifier et sécuriser leurs processus, améliorant ainsi leur efficacité et leur rentabilité. Avec plus de 25 ans d’expérience dans le secteur, notre équipe de consultants offre une expertise technique et stratégique, garantissant des solutions sur mesure adaptées à chaque défi spécifique rencontré par nos clients.
      </p>
    </section>
        <SolutionsSection/>
      </div>
    );
  };
  
  export default Solutions;
  