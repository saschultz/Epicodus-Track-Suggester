//Back-End Logic:




//Front-End Logic:
$(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("#name").val();
    var endDevelopmentInput = $("input:radio[name=end-development]:checked").val();
    console.log(endDevelopmentInput);
    var companyInput = $("#company").val();
    console.log(companyInput)
    $("#result").show();
    $("#resultName").text(nameInput);
    console.log(nameInput);


    event.preventDefault();
  });
});
