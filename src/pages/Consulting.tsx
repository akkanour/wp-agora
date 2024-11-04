// @pages/Consulting.tsx
'use client';
import { FaBuilding, FaLaptopMedical, FaBalanceScale, FaNetworkWired, FaCloud, FaShieldAlt, FaUserTie, FaServer, FaChartLine, FaHandshake, FaRecycle, FaUserShield, FaTools, FaDatabase } from 'react-icons/fa';

const Consulting: React.FC = () => {
  return (
    <div className="pt-24 px-4 md:px-16 lg:px-32"> {/* Espace supérieur ajouté pour le header fixe */}
      <h1 className="text-4xl font-bold text-[#23374D] mb-12 text-center">Consulting Services</h1>

      {/* Section 1: Strategic Technology Planning */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-[#23374D]">Strategic Technology Planning</h2>
          <p className="text-gray-600">
            Our experienced IT consultants work closely with you to develop a comprehensive technology strategy tailored to your business.
          </p>
          <ul className="space-y-2 text-[#024CAA]">
            <li><FaBuilding className="inline mr-2" /> Real Estate</li>
            <li><FaLaptopMedical className="inline mr-2" /> Healthcare</li>
            <li><FaBalanceScale className="inline mr-2" /> Legal</li>
            <li><FaNetworkWired className="inline mr-2" /> Telecommunications</li>
            <li><FaCloud className="inline mr-2" /> Cloud Solutions</li>
          </ul>
        </div>
        <img src="it-consulting.png" alt="Strategic Planning" className="md:w-1/2 lg:w-1/3 rounded-lg shadow-lg" />
      </section>

      {/* Section 2: Digital Transformation */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-[#23374D]">Digital Transformation</h2>
          <p className="text-gray-600">
            Embrace digital transformation with advanced tools to enhance your business processes and operations.
          </p>
          <ul className="space-y-2 text-[#024CAA]">
            <li><FaChartLine className="inline mr-2" /> Enhanced Analytics</li>
            <li><FaHandshake className="inline mr-2" /> Improved Client Interaction</li>
            <li><FaRecycle className="inline mr-2" /> Sustainable Processes</li>
          </ul>
        </div>
        <img src="strategy.png " alt="Digital Transformation" className="md:w-1/2 lg:w-1/3 rounded-lg shadow-lg" />
      </section>

      {/* Section 3: Advanced IT Infrastructure */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-[#23374D]">Advanced IT Infrastructure</h2>
          <p className="text-gray-600">
            Our IT consultants help design and assemble your cutting-edge IT infrastructure from various components.
          </p>
          <ul className="space-y-2 text-[#024CAA]">
            <li><FaServer className="inline mr-2" /> Server Management</li>
            <li><FaNetworkWired className="inline mr-2" /> Network Management</li>
            <li><FaDatabase className="inline mr-2" /> Data Storage Solutions</li>
          </ul>
        </div>
        <img src="network-security.png" alt="Advanced IT Infrastructure" className="md:w-1/2 lg:w-1/3 rounded-lg shadow-lg" />
      </section>

      {/* Section 4: Cybersecurity */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-[#23374D]">Cybersecurity</h2>
          <p className="text-gray-600">
            Protect your business with our comprehensive cybersecurity services, ensuring data and network security.
          </p>
          <ul className="space-y-2 text-[#024CAA]">
            <li><FaShieldAlt className="inline mr-2" /> Security Consulting</li>
            <li><FaUserShield className="inline mr-2" /> Managed SOC Services</li>
            <li><FaTools className="inline mr-2" /> Incident Response</li>
          </ul>
        </div>
        <img src="security-consulting.png" alt="Cybersecurity" className="md:w-1/2 lg:w-1/3 rounded-lg shadow-lg" />
      </section>

      {/* Section 5: Why Choose Our IT Consulting */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-extrabold text-[#23374D] mb-6">Why Go with Our IT Consulting?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center space-y-2">
            <FaUserTie className="text-[#024CAA] text-3xl" />
            <h3 className="text-xl font-semibold">Experience & Expertise</h3>
            <p className="text-gray-600 text-center">Skilled professionals with over 10 years of experience.</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaHandshake className="text-[#024CAA] text-3xl" />
            <h3 className="text-xl font-semibold">Customer-Centric</h3>
            <p className="text-gray-600 text-center">Solutions tailored to your specific needs and goals.</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaChartLine className="text-[#024CAA] text-3xl" />
            <h3 className="text-xl font-semibold">Proven Track Record</h3>
            <p className="text-gray-600 text-center">Years of successful business stories from client feedback.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
