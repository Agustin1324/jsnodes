'use client'

function NodeCreator() {
  return (
    <div className="p-6 h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-dark-brown">Node Creator</h2>
      <div className="flex-grow flex flex-col">
        <textarea 
          placeholder="Enter node name..."
          className="w-full h-1/3 p-4 mb-4 rounded-md bg-white border border-light-brown focus:outline-none focus:ring-2 focus:ring-dark-brown resize-none"
        />
        <button className="w-full py-2 mb-2 bg-light-brown text-dark-brown rounded-md hover:bg-dark-brown hover:text-cream transition-colors">
          Add Node
        </button>
        <button className="w-full py-2 bg-cream text-dark-brown border border-light-brown rounded-md hover:bg-light-brown transition-colors">
          Update Node
        </button>
      </div>
    </div>
  );
}

export default NodeCreator;