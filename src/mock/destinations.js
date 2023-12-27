//список пунктов назначения
const mockDestinations = [
  {
    id: 'd-1',
    description: 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
    name: 'Amsterdam',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152/town?=1',
        description: 'Amsterdam beautiful place'
      },
      {
        src: 'https://loremflickr.com/248/152/town?=2',
        description: 'Amsterdam old city'
      }
    ]
  },
  {
    id: 'd-2',
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152/town?=3',
        description: 'Chamonix parliament building'
      },
      {
        src: 'https://loremflickr.com/248/152/town?=4',
        description: 'Chamonix old city'
      },
      {
        src: 'https://loremflickr.com/248/152/town?=5',
        description: 'Chamonix beautiful place'
      }
    ]
  },
  {
    id: 'd-3',
    description: 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
    name: 'Geneva',
    pictures: []
  },
];

function getDestinations() {
  return mockDestinations;
}

export {getDestinations};
