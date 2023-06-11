// text change
$(document).ready(function () {
  $("#alert").on("click", function () {
    alert("Hello There");
  });

  $("#hide").on("mouseover", function () {
    $("h2").hide();
  });
  $("#show").on("mouseover", function () {
    $("h2").show();
  });
  $("#toggle").on("click", function () {
    $("h2").toggle();
  });
  $("#out").on("click", function () {
    $("h3").fadeOut();
  });
  $("#in").on("click", function () {
    $("h3").fadeIn();
  });
  $("#togg").on("click", function () {
    $("h3").fadeToggle();
  });
  $(".ques").on("click", function () {
    $(".ans").slideToggle("slow");
  });
  $("#anim").on("click", function () {
    $("div").animate({ left: "250px" });
  });
});
