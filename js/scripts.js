$(document).ready(function() {
  $("#trackForm").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var experience = parseInt($("input#experience").val());
    var frontBack = $("select#frontend").val();
    var softwareInterest = $("select#interest").val();
    var gameWeb = $("input:radio[name=game]:checked").val();
    var microsoft = $("input:radio[name=microsoft]:checked").val();

    $(".name").text(name);

    $("#suggestion").show();

    if (frontBack === 'Front-End') {
      $("#CSS").show();
      $("#PHP").show();
      $("#Ruby").show();

    } else if (softwareInterest === 'A') {
      $("#C").show();
      $("#Java").show();
      $("#PHP").show();

    } else if (softwareInterest === 'B') {
      $("#Java").show();
      $("#C").show();
      $("#PHP").show();

    } else if (softwareInterest === 'C') {
      $("#PHP").show();
      $("#Ruby").show();
      $("#CSS").show();

    } else if (softwareInterest === 'D') {
      $("#Ruby").show();
      $("#PHP").show();
      $("#CSS").show();

    } else {
      alert("Just learn all the languages!");
    }
  })
});
