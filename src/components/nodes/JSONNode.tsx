import { memo } from 'react';
import { Handle, Position } from 'reactflow';

type JSONNodeData = {
  label: string;
  json: string;
};

function JSONNode({ data }: { data: JSONNodeData }) {
  let bgColor = 'bg-light-brown';
  let textColor = 'text-dark-brown';
  let width = 160; // default width
  let height = 50; // default height
  let titleText = data.label; // default to label if title is not provided
  try {
    const jsonData = JSON.parse(data.json);
    if (jsonData.backgroundColor && typeof jsonData.backgroundColor === 'string') {
      bgColor = jsonData.backgroundColor;
    }
    if (jsonData.textColor && typeof jsonData.textColor === 'string') {
      textColor = jsonData.textColor;
    }
    if (jsonData.width && typeof jsonData.width === 'number') {
      width = jsonData.width;
    }
    if (jsonData.height && typeof jsonData.height === 'number') {
      height = jsonData.height;
    }
    if (jsonData.titleText && typeof jsonData.titleText === 'string') {
      titleText = jsonData.titleText;
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }

  return (
    <div 
      className={`p-2 rounded-md shadow-md flex items-center justify-center`} 
      style={{ backgroundColor: bgColor, width: `${width}px`, height: `${height}px` }}
    >
      <Handle type="target" position={Position.Top} />
      <div className="font-bold text-center" style={{ color: textColor }}>{titleText}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default memo(JSONNode);