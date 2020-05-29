$("document").ready(function() {
function dynamic() {
  return Math.floor(Math.random() * 4);
}

let dyNum = dynamic();
console.log(dyNum)

  $("img").hover(function() {
   $(this).attr("src")
  },
  function() {
   $(this).attr("src", "./image/dress"+ dyNum + ".jpg");
  })
})