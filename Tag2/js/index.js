// console.log("start index.js")
// console.error("error index.js")
// console.warn("warn index.js")
// console.info("info index.js")

// var a = 1;
// const b = 2;
// let c = 3;

// function test(){
//     console.log("inside test function")
//     let d = 4;
//     console.log(d)
//     a = 6;
//     console.log(a)
// }
// test();

//console.log(d) // ReferenceError: d is not defined
// console.log(a);

// function durchmesser(radius: number): number{
//         return radius * 2;
// }
// console.log(durchmesser(5));


//id text mit Hallo Welt ersetzen
// document.getElementById("text").innerHTML = "Hallo Welt";

// import { durchmesser } from "./app.js";
// console.log(durchmesser(5));


// $('#text').html('Hallo Welt mit JQUERY');
// $('#text').addClass('blue');
// $('#text').removeClass('yellow');

// $('#text')
//     .html('Hallo Welt mit jQuery')
//     .addClass('blue')
//     .removeClass('yellow')
//     .on('click', function(){
//         console.log('click')
//         $(this).toggleClass('red')
//     });

$.getJSON("data.json", function (response) {
       //console.log(response);
        $.get("template.hbs", function(template){
        //console.log(template);
        var compiled = Handlebars.compile(template);
        var html = compiled(response);
       //console.log(html);
        $('main').append(html);
    });
});