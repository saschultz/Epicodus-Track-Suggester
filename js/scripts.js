//Back-End Logic:




//Front-End Logic:
$(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("#name").val();
    $("#result").show();
    $("#resultName").text(nameInput);
    console.log(nameInput);


    event.preventDefault();
  });
});
