//Back-End Logic:




//Front-End Logic:
$(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("#name").val();
    var endDevelopmentInput = $("input:radio[name=end-development]:checked").val();
    var companyInput = $("#company").val();
    var mobileInput = $("#mobile").val();
    var contentInput = $("#content").val();

    $("#result").show();
    $("#resultName").text(nameInput);
    console.log(nameInput);
    console.log(endDevelopmentInput);
    console.log(companyInput)
    console.log(mobileInput);
    console.log(contentInput);


    event.preventDefault();
  });
});
