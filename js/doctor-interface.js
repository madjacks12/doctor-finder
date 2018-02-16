import { promise } from './../js/apicall.js';

$(document).ready(function () {
   // jQuery Flavor dropdown
$('#form').submit(function (event) {
  event.preventDefault();
  debugger;
  let name = $('#name-form').val();
  let condition = $('#condition-form').val();
  let apiCall = promise(name, condition);

  apiCall.then(function (response) {

  		let body = JSON.parse(response);
      $('#results').append(body.data.profile.last_name)
  	}, function (error) {
  		$('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
