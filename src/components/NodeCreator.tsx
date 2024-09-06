'use client'
import { useState } from 'react';
import SelectedNodeProperties from './SelectedNodeProperties';

type JSONNodeData = {
  label: string;
  json: string;
};

type NodeCreatorProps = {
  onAddNode: (nodeData: JSONNodeData) => void;
  selectedNodeProperties: {
    backgroundColor: string | null;
    textColor: string | null;
    width: number | null;
    height: number | null;
    titleText: string | null;
  };
};

function NodeCreator({ onAddNode, selectedNodeProperties }: NodeCreatorProps) {
  const [nodeName, setNodeName] = useState('');
  const [jsonContent, setJsonContent] = useState('');

  const handleAddNode = () => {
    if (nodeName && jsonContent) {
      try {
        JSON.parse(jsonContent); // Validate JSON
        onAddNode({ label: nodeName, json: jsonContent });
        setNodeName('');
        setJsonContent('');
      } catch (error) {
        alert('Invalid JSON. Please check your input.');
      }
    } else {
      alert('Please enter both node name and valid JSON content.');
    }
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-dark-brown">Node Creator</h2>
      <div className="flex-grow flex flex-col">
        <input
          type="text"
          placeholder="Enter node name..."
          value={nodeName}
          onChange={(e) => setNodeName(e.target.value)}
          className="w-full p-2 mb-2 rounded-md bg-white border border-light-brown focus:outline-none focus:ring-2 focus:ring-dark-brown"
        />
        <textarea 
          placeholder="Enter JSON with 'backgroundColor', 'textColor', 'width', 'height', and 'titleText' properties. E.g., {'backgroundColor': '#ff0000', 'textColor': '#ffffff', 'width': 200, 'height': 100, 'titleText': 'My Node'}"
          value={jsonContent}
          onChange={(e) => setJsonContent(e.target.value)}
          className="w-full h-1/3 p-4 mb-4 rounded-md bg-white border border-light-brown focus:outline-none focus:ring-2 focus:ring-dark-brown resize-none"
        />
        <button 
          onClick={handleAddNode}
          className="w-full py-2 bg-light-brown text-dark-brown rounded-md hover:bg-dark-brown hover:text-cream transition-colors"
        >
          Add Node
        </button>
        <SelectedNodeProperties {...selectedNodeProperties} />
      </div>
    </div>
  );
}

export default NodeCreator;