/* console.log('start index.js');
console.error('error index.js');
console.warn('warn index.js');
console.info('info index.js');

var a = 1;
const b = 2;
let c = 3;

function test(){
    console.log('test');
    let d = 4;
    console.log(d); 
    a = 6;
    console.log(a);
}
test();

//console.log(d); // ReferenceError: d is not defined
console.log(a); */

/* function druchmesser(radius) {
    return radius * 2;
}
console.log(druchmesser(5)); */

// id text mit Hallo Welt ersetzen
/* document.getElementById('text').innerHTML = "Hallo Welt";



import { durchmesser } from './app.js';
console.log(durchmesser(5)); */

/* $('#text').html('Hallo Welt mit jQuery');
$('#text').addClass('blue');
$('#text').removeClass('yellow'); */

$("#text")
  .html("Hallo Welt mit jQuery")
  .addClass("blue")
  .removeClass("yellow")
  .on("click", function () {
    console.log("click");
    $(this).toggleClass("red");
  });





$("#meins tr").on("click", function () {
  console.log($(this).data("id"));
  var id = $(this).attr("data-id");
  M.toast({ html: "taxt " + id });
});


$(".edit").click(function (e) {
  e.preventDefault();
  var id = $(this).parent().parent().data("id");
  console.log(id);
});

$.getJSON("data.json", function (response) {
    $.get("template.hbs", function(template){
      var compiled = Handlebars.compile(template);
      var html = compiled(response);
      $('main').append(html);
    });
  });


