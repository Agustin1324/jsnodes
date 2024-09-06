const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;
const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export function generateRandomNodeData() {
  const label = `Node_${Math.random().toString(36).substr(2, 5)}`;
  
  const properties = {
    backgroundColor: randomColor(),
    textColor: randomColor(),
    width: randomNumber(100, 300),
    height: randomNumber(50, 200),
    titleText: `Random ${label}`,
    image_import: Math.random() > 0.5 ? "yes" : "no"
  };

  return { label, properties };
}