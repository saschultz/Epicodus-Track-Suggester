//Back-End Logic:




//Front-End Logic:
$(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("#name").val();
    var endDevelopmentInput = $("input:radio[name=end-development]:checked").val();
    var mobileInput = $("#mobile").val();
    var contentInput = $("#content").val();
    var companyInput = $("#company").val();

    if (endDevelopmentInput === "front-end" && (mobileInput === "Not interested" || mobileInput === "Not sure") && contentInput === "It is content heavy, but still very readable and pleasing" && (companyInput === "A new start up" || companyInput === "A small, but established local company" || companyInput === "A large corporate enterprise")) {

      $("#result").show();
      $("#resultName").text(nameInput);
      $("#design-result").show();
    }

    // $("#result").show();


    // console.log(nameInput);
    // console.log(endDevelopmentInput);
    // console.log(companyInput)
    // console.log(mobileInput);
    // console.log(contentInput);
    event.preventDefault();
  });
});
