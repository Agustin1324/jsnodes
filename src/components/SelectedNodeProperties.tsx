import React from 'react';

type SelectedNodePropertiesProps = {
  backgroundColor: string | null;
  textColor: string | null;
  width: number | null;
  height: number | null;
  titleText: string | null;
  allowsImage: boolean | null;
};

const SelectedNodeProperties: React.FC<SelectedNodePropertiesProps> = ({ 
  backgroundColor, 
  textColor, 
  width, 
  height,
  titleText,
  allowsImage
}) => {
  return (
    <div className="flex flex-col mt-4">
      <h3 className="font-bold mb-2">Selected Node Properties:</h3>
      <div className="flex items-center mb-2">
        <span className="mr-2">Background color:</span>
        {backgroundColor ? (
          <div
            className="w-6 h-6 rounded-md"
            style={{ backgroundColor }}
          ></div>
        ) : (
          <span className="text-gray-500">Not set</span>
        )}
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2">Text color:</span>
        {textColor ? (
          <div
            className="w-6 h-6 rounded-md border border-gray-300"
            style={{ backgroundColor: textColor }}
          ></div>
        ) : (
          <span className="text-gray-500">Not set</span>
        )}
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2">Width:</span>
        {width ? (
          <span>{width}px</span>
        ) : (
          <span className="text-gray-500">Default</span>
        )}
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2">Height:</span>
        {height ? (
          <span>{height}px</span>
        ) : (
          <span className="text-gray-500">Default</span>
        )}
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2">Title Text:</span>
        {titleText ? (
          <span>{titleText}</span>
        ) : (
          <span className="text-gray-500">Not set</span>
        )}
      </div>
      <div className="flex items-center">
        <span className="mr-2">Allows Image:</span>
        {allowsImage !== null ? (
          <span>{allowsImage ? 'Yes' : 'No'}</span>
        ) : (
          <span className="text-gray-500">Not set</span>
        )}
      </div>
    </div>
  );
};

export default SelectedNodeProperties;