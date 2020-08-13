//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete To do
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $("this").remove();
    });
    e.stopPropagation();
}); 

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-times-circle'></i></span> " + todoText + "</li>");
    }
});

$(".fa-edit").click(function(){
    $("input[type='text']").fadeToggle(300);
})