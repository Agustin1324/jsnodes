import { memo } from 'react';
import { Handle, Position } from 'reactflow';

type JSONNodeData = {
  label: string;
  json: string;
};

function JSONNode({ data }: { data: JSONNodeData }) {
  let bgColor = 'bg-light-brown';
  try {
    const jsonData = JSON.parse(data.json);
    if (jsonData.color && typeof jsonData.color === 'string') {
      bgColor = jsonData.color;
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }

  return (
    <div 
      className={`p-2 rounded-md shadow-md w-40`} 
      style={{ backgroundColor: bgColor }}
    >
      <Handle type="target" position={Position.Top} />
      <div className="font-bold text-dark-brown mb-2 text-center">{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default memo(JSONNode);