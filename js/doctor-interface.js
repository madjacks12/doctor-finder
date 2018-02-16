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
      if (body.data.length == 0) {
        $('#results').append("<p>No doctors with that name are currently accepting new patients in Portland, OR for that condition</p>");
      };
      for (let i = 0; i < body.data.length; i++) {
        console.log(body.data[i]);
        $('#results').append(body.data[i].profile.last_name + ", " + body.data[i].profile.first_name + "<br>"
        body.data[i].practices[0].visit_address.street + " " + body.data[i].practices[0].visit_address.state_long + " " + body.data[i].practices[0].visit_address.zip + "<br>" +
        "<img src=" +body.data[i].profile.image_url + ">");
        if (body.data[i].practices.accepts_new_patients = true) {
          $('#results').append("<p> - Accepting New Patients: Yes</p>")
      } else if (body.data[i].practices.accepts_new_patients = false) {
          $('#results').append("<p> - Accepting New Patients: No</p>")
      }
      }
      }, function (error) {
  		$('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
