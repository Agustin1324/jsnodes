'use client'

import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

export default function FlowContainer() {
  return (
    <div className="w-1/2 bg-cream-dark">
      <ReactFlow />
    </div>
  );
}