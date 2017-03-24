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
    } else if (endDevelopmentInput === "back-end" && mobileInput === "Of course" && contentInput === "There is a lot of interactivity with the user" && (companyInput === "A small, but established local company" || companyInput === "A large corporate enterprise")) {
      $("#result").show();
      $("#resultName").text(nameInput);
      $("#java-result").show();
    } else if (endDevelopmentInput === "back-end" && mobileInput === "Not interested" && contentInput === "There is a lot of interactivity with the user" && (companyInput === "A new start up" || companyInput === "A small, but established local company")) {
      $("#result").show();
      $("#resultName").text(nameInput);
      $("#ruby-result").show();
    } else {
      $("#result").show();
      $("#resultName").text(nameInput);
      $("#php-result").show();
    }
    event.preventDefault();
  });
});
