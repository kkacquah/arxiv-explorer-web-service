//TODO: More sophisticated error catching

function createRecord(base, feedbackType, description) {
  const fields = {
    "Description": description,
    "Name": "Unnamed",
    "Status": "Unassigned"
  };

  base(feedbackType).create([{
    "fields": fields
  }], function(err, records) {
    if (err) {
      //TODO: Throw Error Here
    }
  });
  return "Success"
}

module.exports = (body, {
  records
}) => {
  return createRecord(records, body.feedbackType, body.description);
};
