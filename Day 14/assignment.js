function getDatabase(callback) {
  console.log("this is the data from database");
  let dataToProcess = "random data";
  callback(dataToProcess);
}

function processData(data) {
  console.log("Processing the data: " + data);
}

getDatabase(processData);
