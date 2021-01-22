const kittenNames = [
  "Sammy",
  "Muffin",
  "Buddy",
  "Precious",
  "Luna",
  "Charlie",
  "Simba",
  "Chester",
  "BatMan",
  "Sebastian",
];
const kittenColors = [
  { ColorName: "Dark Cyan", ColorCode: "#008B8B" },
  { ColorName: "Lavender Blush", ColorCode: "#FFF0F5" },
  { ColorName: "Gainsboro", ColorCode: "#DCDCDC" },
  { ColorName: "Dark Magenta", ColorCode: "#8B008B" },
  { ColorName: "Deep Pink", ColorCode: "#FF1493" },
  { ColorName: "Midnight Blue", ColorCode: "#191970" },
  { ColorName: "Green Yellow", ColorCode: "#ADFF2F" },
  { ColorName: "Light Slate Gray", ColorCode: "#778899" },
  { ColorName: "Navy", ColorCode: "#000080" },
  { ColorName: "Forest Green", ColorCode: "#228B22" },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const height = 200;
const width = 400;

export default function getKittenArray(size) {
  let kittenNamesArray = [];
  for (let i = 0; i < kittenNames.length; i++) {
    for (let j = 0; j < kittenColors.length; j++) {
      kittenNamesArray.push({
        name: `${kittenColors[j].ColorName} ${kittenNames[i]}`,
        ColorCode: kittenColors[j].ColorCode,
      });
    }
  }

  let kittenSizeArray = [];
  for (let i = -5; i < 5; i++) {
    for (let j = -5; j < 5; j++) {
      kittenSizeArray.push({
        url: `https://placekitten.com/${width + i}/${height + j}`,
      });
    }
  }

  shuffleArray(kittenNamesArray);
  shuffleArray(kittenSizeArray);

  let kittenArray = [];

  for (let i = 0; i < size; i++) {
    kittenArray.push({
      ...kittenNamesArray[i],
      ...kittenSizeArray[i],
    });
  }

  return kittenArray;
}
