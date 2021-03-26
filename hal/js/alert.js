function customAlert(title, msg) {
  swal(title, msg);
}

$(function () {
  $("body").on("focus", "[datepicker]", function () {
    $(this).datepicker({
      minDate: new Date()
    });
  });
  //$("#datepicker").datepicker({});

  $(".schedule").on("click", '[data-event="get-started"]', function (event) {
    event.preventDefault();

    var params = {};

    $('.inner :input').each(function () {
      params[$(this)[0].name] = $(this).val();
    });

    var msg = "";
    params['owner-email'] = "hal@hastalentsearch.com";

    if (!params.name) {
      customAlert("Error", "Please enter your name.");
    } else if (!params.email) {
      customAlert("Error", "Please enter your email address");
    } else if (!params.phone) {
      customAlert("Error", "Please enter your phone number");
    } else {
      $.ajax({
        url: "https://api.everwash.com/1/email/detailing_form",
        type: "POST",
        data: params,
        success: function (res) {
          if (res === "SUCCESS") {
            customAlert(
              "Thank You!",
              "Your message has been recieved, you will recieve a response soon."
            );
            $(
              '[name="name"], [name="email"], [name="phone"], [name="title"], [name="company"], [name="who-are-you"], [name="message"]'
            ).val("");
          } else {
            customAlert(
              "Error",
              "Oops!  It looks like something went wrong, please try again later."
            );
          }
        },
        error: function (err) {
          customAlert(
            "Error",
            "Oops!  It looks like something went wrong, please try again later."
          );
          console.error(err);
        }
      });
    }
  });
});
