'use client'

import { useCallback, useEffect } from 'react';
import ReactFlow, { Node, Edge, Controls, Background, useNodesState, useEdgesState, addEdge, applyNodeChanges, Connection } from 'reactflow';
import 'reactflow/dist/style.css';
import JSONNode from './nodes/JSONNode';

type JSONNodeData = {
  label: string;
  json: string;
};

type FlowProps = {
  nodes: JSONNodeData[];
  onAddNode: (nodeData: JSONNodeData) => void;
};

const nodeTypes = {
  jsonNode: JSONNode,
};

function Flow({ nodes: initialNodes, onAddNode }: FlowProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  useEffect(() => {
    const newNodes = initialNodes.map((node, index) => ({
      id: `node_${index + 1}`,
      type: 'jsonNode',
      position: { x: Math.random() * 300, y: Math.random() * 300 },
      data: node,
    }));
    setNodes(newNodes);
  }, [initialNodes]);

  const handleNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, [setNodes]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={handleNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
    >
      <Background
        color="#8B4513"
        gap={20}
        size={2}
      />
      <Controls />
    </ReactFlow>
  );
}

export default Flow;
