const PrivacyModal = ({ closePrivacyModal }: { closePrivacyModal: () => void }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 overflow-y-auto max-h-[80vh]">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-4">Last updated: November 08, 2024</p>
        <p className="text-base mb-4">
          This Privacy Policy describes Our policies and procedures on the collection, use and
          disclosure of Your information...
        </p>
        {/* Raccourci ici pour simplifier */}
        <div className="mt-6 text-right">
          <button onClick={closePrivacyModal} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
  
  export default PrivacyModal;
  