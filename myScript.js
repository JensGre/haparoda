$(document).ready(function() {
  $(".A1").change(function() {
    if ($("#1").val().toLowerCase() === "k" &&
      $("#2").val().toLowerCase() === "e" &&
      $("#3").val().toLowerCase() === "r" &&
      $("#4").val().toLowerCase() === "z" &&
      $("#5").val().toLowerCase() === "e"
    ) {
      alert("Wow! Ihr habt es geschafft. Aber was nun?");
    }
  });
});
