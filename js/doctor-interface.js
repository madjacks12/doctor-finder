import { doctorSearch } from './../assets/js/doctorSearch.js';

$(document).ready(function () {
   // jQuery Flavor dropdown
$('#form').submit(function (event) {
  debugger;
  let name = $('#name-form').val();
  let condition = $('#condition-form').val();
  let search = doctorSearch(name, condition);

  search.then(function (response) {
  		let body = JSON.parse(response);
      console.log(body);
  	}, function (error) {
  		$('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
