'use client'

import { useState } from 'react';
import NodeCreator from '@/components/NodeCreator';
import Flow from '@/components/FlowContainer';

export default function Home() {
  const [nodes, setNodes] = useState([]);

  const handleAddNode = (nodeData) => {
    setNodes((prevNodes) => [...prevNodes, nodeData]);
  };

  return (
    <div className="flex w-screen h-screen bg-cream text-dark-brown">
      <div className="w-1/2 border-r-2 border-light-brown frontier-bar h-full">
        <NodeCreator onAddNode={handleAddNode} />
      </div>
      <div className="w-1/2 h-full">
        <Flow nodes={nodes} onAddNode={handleAddNode} />
      </div>
    </div>
  );
}
