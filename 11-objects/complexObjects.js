// netflix object:

let netflix = {
  id: 9,
  name: "Super Store",
  season1: {
    seasonInfo: {
      episodeInfo: [
        { episode: 1, episodeName: "Pilot" },
        { episode: 2, episodeName: "Magazine Profile" },
        { episode: 3, episodeName: "Shots and Salsa" },
        { episode: 4, episodeName: "Mannequin" },
        { episode: 5, episodeName: "Shoplifter" },
        { episode: 6, episodeName: "Secret Shopper" },
        { episode: 7, episodeName: "Color Wars" },
        { episode: 8, episodeName: "Wedding Day Sale" },
        { episode: 9, episodeName: "All-Nighter" },
        { episode: 10, episodeName: "Demotion" },
        { episode: 11, episodeName: "Labor" }
      ]
    }
  },
  season2: {},
  season3: {}
};

console.log(
  netflix.season1.seasonInfo.episodeInfo[10].episode,
  netflix.season1.seasonInfo.episodeInfo[10].episodeName
);

//JSON --> JavaScript Object Notation

// json object:
var json = {
  "workbench.colorTheme": "One Dark+ (Sublime)",
  "window.zoomLevel": 3,
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/*.js": {
      when: "$(basename).ts"
    },
    "**/*.js.map": {
      when: "$(basename)"
    }
  },
  "editor.fontFamily": "Monaco, 'Courier New', monospace",
  "editor.detectIndentation": false,
  "editor.letterSpacing": 0,
  "editor.tabSize": 2,
  "files.autoSave": "off",
  "editor.wordWrap": "on",
  "extensions.ignoreRecommendations": true,
  "[html]": {},
  "files.associations": {
    "*.html": "html",
    "*.js": "javascriptreact"
  },
  "html.format.indentInnerHtml": true,
  "editor.fontSize": 11,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.port": 3500,
  "[javascriptreact]": {}
};

// spacejam object:
let spaceJam = {
  toonSquad: {
    human: "Michael Jordan",
    rabbit1: "Bugs Bunny",
    rabbit2: "Lola Bunny",
    duck: "Daffy Duck",
    tDevil: "Tasmanian Devil",
    bird: "Tweety",
    cat: "Sylvester",
    pig: "Porky Pig"
  },
  monstars: {
    0: "Bupkus",
    1: "Bang",
    2: "Nawt",
    3: "Pound",
    4: "Blanko"
  },
  nbaPlayers: {
    phoenixSuns: "Charles Barkley",
    newJerseyNets: "Shawn Bradley",
    newYorkNicks: "Patrick Ewing",
    charlotteHornets1: "Larry Johnson",
    charlotteHornets2: "Muggsy Bogues"
  }
};

console.log(Object.keys(spaceJam)); //Object.keys returns an array consisting of the keys in our object
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam));
console.log(Object.values(spaceJam.toonSquad));

let garden = {
  vegetable: "tomato",
  flower: "sunflower",
  fruit: "grape",
  water: true,
  size: 10,
  sun: true
};

console.log(garden.vegetable);

let inc = "fruit";

console.log(garden[inc]);

let baking = {};
baking["cake"] = "I like cake";
baking.bestKeyEver = "cake";

console.log(baking.cake);
console.log(baking.bestKeyEver);
console.log(baking[baking.bestKeyEver]);

let g = "water";

Object.keys(garden).forEach(key => {
  if (key == g) {
    console.log(garden[key]);
  }
});
