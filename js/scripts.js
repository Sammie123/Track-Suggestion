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

    if (frontBack === '1') {
      $("#CSS").show();
      $("#PHP").show();
      $("#Ruby").show();
      $("#Java").hide();
      $("#C").hide();

      } else if (frontBack === '2' && softwareInterest === 'A') {
        $("#C").show();
        $("#Java").show();
        $("#PHP").show();
        $("#Ruby").hide();
        $("#CSS").hide();

      } else if (frontBack === '2' && softwareInterest === 'B') {
        $("#Java").show();
        $("#C").show();
        $("#PHP").show();
        $("#CSS").hide();
        $("#Ruby").hide();

      } else if (frontBack === '2' && softwareInterest === 'C') {
        $("#PHP").show();
        $("#Ruby").show();
        $("#CSS").show();
        $("#C").hide();
        $("#Java").hide();

      } else if (frontBack === '2' && softwareInterest === 'D') {
        $("#Ruby").show();
        $("#PHP").show();
        $("#CSS").show();
        $("#C").hide();
        $("#Java").hide();

      } else {
        alert("Just learn all the languages!");

      };
    });
});
