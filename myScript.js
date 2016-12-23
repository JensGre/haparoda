$(document).ready(function() {
  $(".A1").change(function() {
    if ($("#1").val().toLowerCase() === "k" &&
      $("#2").val().toLowerCase() === "e" &&
      $("#3").val().toLowerCase() === "r" &&
      $("#4").val().toLowerCase() === "z" &&
      $("#5").val().toLowerCase() === "e"
    ) {
      alert("Super! Nur doof, dass hier keiner 'ne Kerze hat :)");
    }
  });
});
