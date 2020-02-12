import axios from "./config"

export function createRecord(description, feedbackType, onError) {
  // Make a request for data with a given search term
  axios.instance.post('/records', {
        description: description,
        feedbackType:feedbackType,
      })
    .catch(function(error) {
      // handle error
      onError(error);
    });
}
