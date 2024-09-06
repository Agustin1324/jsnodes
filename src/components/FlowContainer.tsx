'use client'

import { useCallback, useEffect, useState } from 'react';
import ReactFlow, { Node, Edge, Controls, Background, useNodesState, useEdgesState, addEdge, applyNodeChanges, Connection, NodeChange } from 'reactflow';
import 'reactflow/dist/style.css';
import JSONNode from './nodes/JSONNode';

type JSONNodeData = {
  label: string;
  json: string;
};

type FlowProps = {
  nodes: JSONNodeData[];
  onAddNode: (nodeData: JSONNodeData) => void;
  onNodeSelect: (backgroundColor: string | null, textColor: string | null) => void;
};

const nodeTypes = {
  jsonNode: JSONNode,
};

function Flow({ nodes: initialNodes, onAddNode, onNodeSelect }: FlowProps) {
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

  const handleNodesChange = useCallback((changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, [setNodes]);

  const handleNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    try {
      const jsonData = JSON.parse(node.data.json);
      const backgroundColor = jsonData.backgroundColor && typeof jsonData.backgroundColor === 'string' ? jsonData.backgroundColor : null;
      const textColor = jsonData.textColor && typeof jsonData.textColor === 'string' ? jsonData.textColor : null;
      onNodeSelect(backgroundColor, textColor);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      onNodeSelect(null, null);
    }
  }, [onNodeSelect]);

  const handlePaneClick = useCallback(() => {
    onNodeSelect(null, null);
  }, [onNodeSelect]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={handleNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      onNodeClick={handleNodeClick}
      onPaneClick={handlePaneClick}
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
