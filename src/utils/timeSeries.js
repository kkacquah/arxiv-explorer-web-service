const moment = require('moment');

export function convertIntsToMoments(timeSeriesData) {
  const timeSeriesDataWithMoments = timeSeriesData.map(datapoint => ({
    y: datapoint.y,
    t: moment(datapoint.t * 1000)
  }));
  return timeSeriesDataWithMoments
}

export function convertResponseMapToDataset(responseMap) {
  const dataset = [...responseMap.keys()].map(key => {
    const value = responseMap.get(key);
    return ({
      label: key,
      backgroundColor: value.color,
      borderColor: value.color,
      data: convertIntsToMoments(value.pointArray)
    });
  });
  return dataset
}
