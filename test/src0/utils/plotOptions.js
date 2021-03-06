const RANGES = [
  '1991 - present',
  'Past 10 Years',
  'Past 5 Years',
  'Past Year',
  'Past 3 Months',
];
const TYPES = [
  'Line Chart',
  'Stacked Chart'
];
const CATEGORIES = [
  'Astrophysics',
  'Condensed Matter',
  'Physics',
  'Mathematics',
  'Nonlinear Sciences',
  'Computer Science',
  'Quantitative Biology',
  'Quantitative Finance',
  'Statistics',
  'Electrical Engineering',
  'Economics',
];

export default {
  RANGES,
  TYPES,
  CATEGORIES,
  getPlotStateValues: (plotState) => {
    return {
      range: RANGES[plotState.rangeIndex],
      type: TYPES[plotState.typeIndex],
      category: CATEGORIES[plotState.categoryIndex]
    }
  },
  getPlotOptions: (type) => {
    let stacked = type === 'Stacked Chart';
    return {
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          fill: stacked
        }
      },
      hover: {
        mode: 'nearest',
        intersect: false
      },
      tooltips: {
        mode: 'nearest',
        intersect: false
      },
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          type: 'time',
          gridLines: {
            display: false
          }
        }],

        yAxes: [{
          stacked: stacked,
          gridLines: {
            display: true
          },
          ticks: {
            suggestedMax: stacked ? 100 : 50,
            suggestedMin: 0
          }
        }]
      }
    }
  }
}
