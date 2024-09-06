import { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';

type JSONNodeData = {
  label: string;
  json: string;
  image?: string;
};

function JSONNode({ data, id }: { data: JSONNodeData; id: string }) {
  const [image, setImage] = useState<string | null>(data.image || null);
  let bgColor = 'bg-light-brown';
  let textColor = 'text-dark-brown';
  let width = 160;
  let height = 50;
  let titleText = data.label;
  let imageImport = false;

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
      titleText = jsonData.titleText.replace(/^"|"$/g, ''); // Remove surrounding quotes
    }
    if (jsonData.image_import === 'yes') {
      imageImport = true;
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target?.result as string;
        setImage(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      className={`p-2 rounded-md shadow-md flex flex-col items-center justify-center`} 
      style={{ backgroundColor: bgColor, width: `${width}px`, height: `${height}px` }}
    >
      <Handle type="target" position={Position.Top} />
      <div className="font-bold text-center" style={{ color: textColor }}>{titleText}</div>
      {imageImport && (
        <div className="mt-2">
          {image ? (
            <img src={image} alt="Uploaded" className="max-w-full max-h-20 object-contain" />
          ) : (
            <label className="cursor-pointer bg-blue-500 text-white px-2 py-1 rounded text-sm">
              Import Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </div>
      )}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default memo(JSONNode);