import axios from "./config"

export function getDatapoints(phrase, plotStateValues, onSuccess, onError) {
  // Make a request for data with a given search term
  axios.instance.post('/datapoints', {
        phrase: phrase,
        range:plotStateValues.range,
        category: plotStateValues.category
      })
    .then(function(response) {
      // handle success
      onSuccess(response);
    })
    .catch(function(error) {
      // handle error
      onError(error);
    });
}
