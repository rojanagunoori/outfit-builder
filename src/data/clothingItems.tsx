import { ClothingItem,CharacterProfile } from "@/types";


const faceShapes = [
  { name: 'Round', svg: '<circle cx="20" cy="20" r="15" stroke="black" stroke-width="2" fill="lightgray" />' },
  { name: 'Square', svg: '<rect x="5" y="5" width="30" height="30" stroke="black" stroke-width="2" fill="lightgray" />' },
  { name: 'Oval', svg: '<ellipse cx="20" cy="20" rx="15" ry="20" stroke="black" stroke-width="2" fill="lightgray" />' },
];

const eyeShapes = [
  { name: 'Round', svg: '<circle cx="15" cy="15" r="5" stroke="black" stroke-width="2" fill="black" />' },
  { name: 'Almond', svg: '<ellipse cx="15" cy="15" rx="6" ry="4" stroke="black" stroke-width="2" fill="black" />' },
  { name: 'Square', svg: '<rect x="10" y="10" width="10" height="10" stroke="black" stroke-width="2" fill="black" />' },
];

const noseShapes = [
  { name: 'Button', svg: '<circle cx="20" cy="20" r="3" stroke="black" stroke-width="2" fill="lightgray" />' },
  { name: 'Straight', svg: '<rect x="18" y="15" width="4" height="10" stroke="black" stroke-width="2" fill="lightgray" />' },
  { name: 'Narrow', svg: '<rect x="18" y="15" width="2" height="10" stroke="black" stroke-width="2" fill="lightgray" />' },
];

const mouthShapes = [
  { name: 'Smile', svg: '<path d="M10 25 Q 20 35, 30 25" stroke="black" stroke-width="2" fill="transparent" />' },
  { name: 'Frown', svg: '<path d="M10 25 Q 20 15, 30 25" stroke="black" stroke-width="2" fill="transparent" />' },
  { name: 'Neutral', svg: '<line x1="10" y1="25" x2="30" y2="25" stroke="black" stroke-width="2" />' },
];

const hairColors = [
  { name: 'Black', value: '#000000' },
  { name: 'Brown', value: '#6b4f30' },
  { name: 'Blonde', value: '#f1c27d' },
  { name: 'Red', value: '#c05c3d' },
];

const hairStyles = [
  { name: 'Short', svg: '<path d="M10 5 Q 15 0, 20 5 Q 25 0, 30 5" stroke="black" stroke-width="2" fill="brown" />' },
  { name: 'Long', svg: '<path d="M10 5 Q 15 0, 20 5 Q 25 0, 30 5 Q 30 15, 10 15 Q 10 5" stroke="black" stroke-width="2" fill="brown" />' },
  { name: 'Curly', svg: '<path d="M10 5 Q 15 0, 20 5 Q 25 0, 30 5 Q 30 10, 10 10 Q 10 5" stroke="black" stroke-width="2" fill="brown" />' },
];

const bodyParts = [
  { name: 'Arms', svg: '<rect x="5" y="25" width="10" height="15" stroke="black" stroke-width="2" fill="peachpuff" />' },
  { name: 'Legs', svg: '<rect x="5" y="40" width="10" height="15" stroke="black" stroke-width="2" fill="peachpuff" />' },
  { name: 'Torso', svg: '<rect x="5" y="10" width="30" height="20" stroke="black" stroke-width="2" fill="peachpuff" />' },
];

const skinTones = [
  { name: 'Light', value: '#f1c27d' },
  { name: 'Medium', value: '#e0ac69' },
  { name: 'Dark', value: '#6a4e23' },
];

const clothingItems1 = [
  { name: 'T-Shirt', svg: '<rect x="10" y="15" width="20" height="15" stroke="black" stroke-width="2" fill="blue" />' },
  { name: 'Pants', svg: '<rect x="10" y="30" width="20" height="20" stroke="black" stroke-width="2" fill="gray" />' },
  { name: 'Dress', svg: '<path d="M10 15 L 15 30 L 25 30 L 30 15 Z" stroke="black" stroke-width="2" fill="pink" />' },
];

const accessories = [
  { name: 'Glasses', svg: '<rect x="10" y="10" width="20" height="5" stroke="black" stroke-width="2" fill="transparent" />' },
  { name: 'Hat', svg: '<path d="M5 5 Q 15 0, 25 5" stroke="black" stroke-width="2" fill="brown" />' },
  { name: 'Earrings', svg: '<circle cx="5" cy="15" r="3" stroke="black" stroke-width="2" fill="gold" />' },
];

/*const generateCharacterSVG = (face, eyes, nose, mouth, hair, body, skinTone, clothing, accessory) => {
  return `
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      ${face}
      ${eyes}
      ${nose}
      ${mouth}
      ${hair}
      ${body}
      ${skinTone}
      ${clothing}
      ${accessory}
    </svg>
  `;
};

// Example of how to generate a character SVG:
const face = faceShapes[0].svg;
const eyes = eyeShapes[0].svg;
const nose = noseShapes[0].svg;
const mouth = mouthShapes[0].svg;
const hair = hairStyles[0].svg;
const body = bodyParts[0].svg;
const skinTone = `<circle cx="20" cy="20" r="15" stroke="black" stroke-width="2" fill="${skinTones[0].value}" />`;
const clothing = clothingItems1[0].svg;
const accessory = accessories[0].svg;

//const characterSVG = generateCharacterSVG(face, eyes, nose, mouth, hair, body, skinTone, clothing, accessory);
//console.log(characterSVG);

export const clothingItems: ClothingItem[] = [
 

];

*/