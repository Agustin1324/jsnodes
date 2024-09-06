'use client'

import { useCallback, useEffect, useState } from 'react';
import ReactFlow, { Node, Edge, Controls, Background, useNodesState, useEdgesState, addEdge, applyNodeChanges, Connection, NodeChange } from 'reactflow';
import 'reactflow/dist/style.css';
import JSONNode from './nodes/JSONNode';

type JSONNodeData = {
  label: string;
  json: string;
  image?: string;
};

type FlowProps = {
  nodes: JSONNodeData[];
  onAddNode: (nodeData: JSONNodeData) => void;
  onNodeSelect: (properties: {
    backgroundColor: string | null;
    textColor: string | null;
    width: number | null;
    height: number | null;
    titleText: string | null;
    allowsImage: boolean | null;
  }) => void;
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
    setNodes((nds) => {
      const updatedNodes = applyNodeChanges(changes, nds);
      // Update the image data in the parent component if needed
      updatedNodes.forEach((node) => {
        if (node.data.image) {
          const originalNode = initialNodes.find((n) => n.label === node.data.label);
          if (originalNode) {
            originalNode.image = node.data.image;
          }
        }
      });
      return updatedNodes;
    });
  }, [setNodes, initialNodes]);

  const handleNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    try {
      const jsonData = JSON.parse(node.data.json);
      onNodeSelect({
        backgroundColor: jsonData.backgroundColor || null,
        textColor: jsonData.textColor || null,
        width: jsonData.width || null,
        height: jsonData.height || null,
        titleText: jsonData.titleText || node.data.label,
        allowsImage: jsonData.image_import === 'yes',
      });
    } catch (error) {
      console.error('Error parsing JSON:', error);
      onNodeSelect({ backgroundColor: null, textColor: null, width: null, height: null, titleText: null, allowsImage: null });
    }
  }, [onNodeSelect]);

  const handlePaneClick = useCallback(() => {
    onNodeSelect({ backgroundColor: null, textColor: null, width: null, height: null, titleText: null, allowsImage: null });
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
