$("h1").css("color","red");
$("input").keydown(function(event){
    var x=event.key;
    $("h1").text(x);
})