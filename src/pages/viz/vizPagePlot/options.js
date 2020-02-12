export default function getPlotOptions(plotState) {
  console.log(plotState);
  return ({
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        fill: plotState.stacked
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
        stacked: plotState.stacked,
        gridLines: {
          display: true
        },
        ticks: {
          suggestedMax:  plotState.stacked ? 100 : 50
        }
      }]
    }
  });
}
