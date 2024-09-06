'use client'

import { useState } from 'react';
import NodeCreator from '@/components/NodeCreator';
import Flow from '@/components/FlowContainer';

type JSONNodeData = {
  label: string;
  json: string;
};

export default function Home() {
  const [nodes, setNodes] = useState<JSONNodeData[]>([]);
  const [selectedNodeBackgroundColor, setSelectedNodeBackgroundColor] = useState<string | null>(null);
  const [selectedNodeTextColor, setSelectedNodeTextColor] = useState<string | null>(null);

  const handleAddNode = (nodeData: JSONNodeData) => {
    setNodes((prevNodes) => [...prevNodes, nodeData]);
  };

  const handleNodeSelect = (backgroundColor: string | null, textColor: string | null) => {
    setSelectedNodeBackgroundColor(backgroundColor);
    setSelectedNodeTextColor(textColor);
  };

  return (
    <div className="flex w-screen h-screen bg-cream text-dark-brown">
      <div className="w-1/2 border-r-2 border-light-brown frontier-bar h-full">
        <NodeCreator 
          onAddNode={handleAddNode} 
          selectedNodeBackgroundColor={selectedNodeBackgroundColor}
          selectedNodeTextColor={selectedNodeTextColor}
        />
      </div>
      <div className="w-1/2 h-full">
        <Flow nodes={nodes} onAddNode={handleAddNode} onNodeSelect={handleNodeSelect} />
      </div>
    </div>
  );
}
