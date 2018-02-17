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
      console.log(body.data);
      if (body.data.length == 0) {
        $('#results').append("<p>No doctors with that name are currently accepting new patients in Portland, OR for that condition</p>");
      };
      for (let i = 0; i < body.data.length; i++) {
        $('#results').append($('<div/>', {
          class: "card",
          id: `card${i}`,
          style: 'width: 50 px;'
        })).append($("<br><br>"));
        $(`#card${i}`).append($('<div/>', {
          class: "card-block",
          id: `card-block${i}`,
        }));
        $(`#card${i}`).append($('<div/>', {
          class: "card-block",
          id: `card-block2${i}`,
        }));
        $(`#card${i}`).append($('<div/>', {
          class: "card-block",
          id: `card-block3${i}`,
        }));

        $(`#card-block${i}`).append($("<img class=card-img-top id=card-img"+[i] + " " + "src=" + body.data[i].profile.image_url + "></img>"));

        $(`#card-block${i}`).append($(`<h4 class="card-title" id=card-title${i}></h4>`).append(body.data[i].profile.first_name + " " + body.data[i].profile.last_name));

        $(`#card-block2${i}`).append($(`<p class="card-text" id=card-text${i}></p>`).append(body.data[i].practices[0].visit_address.street + " " + body.data[i].practices[0].visit_address.state_long + " " + body.data[i].practices[0].visit_address.zip));

        $(`#card-block3${i}`).append($(`<p class="card-text" id=card-text1${i}></p>`).append("Currently Accepting new patients: " + body.data[i].practices[0].accepts_new_patients));
      }
      }, function (error) {
  		$('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
