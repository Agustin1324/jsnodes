import React from 'react';

type SelectedNodeColorProps = {
  color: string | null;
};

const SelectedNodeColor: React.FC<SelectedNodeColorProps> = ({ color }) => {
  return (
    <div className="flex items-center mt-4">
      <span className="mr-2">Background color:</span>
      {color ? (
        <div
          className="w-6 h-6 rounded-md"
          style={{ backgroundColor: color }}
        ></div>
      ) : (
        <span className="text-gray-500">No node selected</span>
      )}
    </div>
  );
};

export default SelectedNodeColor;