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

      $("#resultName").text(nameInput);
      $("#result").show();
      $("#java-result").hide();
      $("#ruby-result").hide();
      $("#php-result").hide();
      $("#design-result").show();

    } else if (endDevelopmentInput === "back-end" && mobileInput === "Of course" && contentInput === "There is a lot of interactivity with the user" && (companyInput === "A small, but established local company" || companyInput === "A large corporate enterprise")) {

      $("#resultName").text(nameInput);
      $("#result").show();
      $("#design-result").hide();
      $("#ruby-result").hide();
      $("#php-result").hide();
      $("#java-result").show();
    } else if (endDevelopmentInput === "back-end" && (mobileInput === "Not interested" || mobileInput === "Not sure") && contentInput === "There is a lot of interactivity with the user" && (companyInput === "A new start up" || companyInput === "A small, but established local company")) {

      $("#resultName").text(nameInput);
      $("#result").show();
      $("#design-result").hide();
      $("#java-result").hide();
      $("#php-result").hide();
      $("#ruby-result").show();
    } else {

      $("#resultName").text(nameInput);
      $("#result").show();
      $("#design-result").hide();
      $("#java-result").hide();
      $("#ruby-result").hide();
      $("#php-result").show();
    }
    event.preventDefault();
  });
});
