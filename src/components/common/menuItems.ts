export const menuItems = [
    { name: 'Accueil', href: '/' },
    {
      name: 'À propos',
      subMenu: [
        { name: 'Qui sommes-nous ?', href: '/a-propos/qui-sommes-nous' },
        { name: 'Nos Produits', href: '/a-propos/nos-produits' },
        { name: 'Nos Références', href: '/a-propos/nos-references' },
      ],
    },
    {
      name: 'Services',
      subMenu: [
        { name: 'Intervention sur Incident', href: '/services/intervention-sur-incident' },
        { name: 'Contrat de support et Maintenance', href: '/services/contrat-support-maintenance' },
        { name: 'Infogérance Globale ou Partielle', href: '/services/infogerance-globale-partielle' },
        { name: 'Ressource en Régie', href: '/services/ressource-en-regie' },
        { name: 'Intégration ERP', href: '/services/integration-erp' },
      ],
    },
    {
      name: 'Consulting',
      href: '/consulting',
    },
    { name: 'Solutions', href: '/solutions' },
    
    
  ];