'use client'

import { useState } from 'react';
import NodeCreator from '@/components/NodeCreator';
import Flow from '@/components/FlowContainer';

type JSONNodeData = {
  label: string;
  json: string;
};

type SelectedNodeProperties = {
  backgroundColor: string | null;
  textColor: string | null;
  width: number | null;
  height: number | null;
  titleText: string | null;
};

export default function Home() {
  const [nodes, setNodes] = useState<JSONNodeData[]>([]);
  const [selectedNodeProperties, setSelectedNodeProperties] = useState<SelectedNodeProperties>({
    backgroundColor: null,
    textColor: null,
    width: null,
    height: null,
    titleText: null,
  });

  const handleAddNode = (nodeData: JSONNodeData) => {
    setNodes((prevNodes) => [...prevNodes, nodeData]);
  };

  const handleNodeSelect = (properties: SelectedNodeProperties) => {
    setSelectedNodeProperties(properties);
  };

  return (
    <div className="flex w-screen h-screen bg-cream text-dark-brown">
      <div className="w-1/2 border-r-2 border-light-brown frontier-bar h-full">
        <NodeCreator 
          onAddNode={handleAddNode} 
          selectedNodeProperties={selectedNodeProperties}
        />
      </div>
      <div className="w-1/2 h-full">
        <Flow nodes={nodes} onAddNode={handleAddNode} onNodeSelect={handleNodeSelect} />
      </div>
    </div>
  );
}
