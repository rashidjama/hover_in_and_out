$("document").ready(function() {
  $("img").hover(function() {
   $(this).attr("src")
  },
  function() {
   $(this).attr("src", "./image/dress5.jpg");
  })
})