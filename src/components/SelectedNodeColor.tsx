import React from 'react';

type SelectedNodeColorProps = {
  backgroundColor: string | null;
  textColor: string | null;
};

const SelectedNodeColor: React.FC<SelectedNodeColorProps> = ({ backgroundColor, textColor }) => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex items-center mb-2">
        <span className="mr-2">Background color:</span>
        {backgroundColor ? (
          <div
            className="w-6 h-6 rounded-md"
            style={{ backgroundColor }}
          ></div>
        ) : (
          <span className="text-gray-500">No node selected</span>
        )}
      </div>
      <div className="flex items-center">
        <span className="mr-2">Text color:</span>
        {textColor ? (
          <div
            className="w-6 h-6 rounded-md border border-gray-300"
            style={{ backgroundColor: textColor }}
          ></div>
        ) : (
          <span className="text-gray-500">No node selected</span>
        )}
      </div>
    </div>
  );
};

export default SelectedNodeColor;