'use client'

import { ReactFlow, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

function Flow() {
  return (
    <ReactFlow
      nodes={[]}
      edges={[]}
      nodesDraggable={true}
    >
      <Background
        color="#8B4513"  // Darker brown color
        gap={20}  // Increased gap between dots
        size={2}  // Increased dot size
      />
      <Controls />
    </ReactFlow>
  );
}

export default Flow;
