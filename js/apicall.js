import apiKey from './../.env';

export let promise = function(name, condition) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${condition}&location=or-portland&user_location=45.5231%2C%20122.6765&skip=0&limit=10&user_key=${apiKey.apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
};
