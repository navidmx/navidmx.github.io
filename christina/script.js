var timeout = 500;
var path = "";

$( document ).ready(function() {
    navbar();
    buttons();
    if (sessionStorage.page != "home"){
        $("#"+sessionStorage.page+"Content").fadeIn(500);
        $("#"+sessionStorage.page).css("color","brown");
        $("#aboutSidebar").fadeIn(500);
        $("#speakingSidebar").fadeIn(500);
    } else {
        timeout = 2500;
        path = "pages/";
        if ($("html").width()<=1980){
            $("body").css('full-bg-img','url("img/background_medium.jpg")')
        } else { $("body").css('full-bg-img','url("img/background_large.jpg")') }
    }
    $("h1").click(function(){window.location.href="../index.php";});
    $(".event-info").click(function(){
        var clicked = event.target.id;
        console.log("#"+clicked);
        $("#"+clicked).css("max-height","5000px");
    });
});

function navbar(){ $("#navbar-container").append("<nav class=\"navbar\"><button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"><\/span><\/button><div class=\"collapse navbar-collapse\" id=\"navbarNav\"><div class=\"navbar-nav\"><span class=\'nav-item nav-link\' id=\'about\'>About<\/span><span class=\'nav-item nav-link\' id=\'speaking\'>Speaking<\/span><span class=\'nav-item nav-link\' id=\'writing\'>Writing<\/span><span class=\'nav-item nav-link\' id=\'press\'>Press<\/span><span class=\'nav-item nav-link\' id=\'contact\'>Contact<\/span><\/div><\/div><\/nav>"); }

function buttons(){
    $(".nav-link").click(function(){
        var clicked = event.target.id;
        $("#"+clicked).css("color","brown");
        if (sessionStorage.page != "home"){
            $("#"+sessionStorage.page+"Content").fadeOut(500);
            $("#aboutSidebar").fadeOut(500);
            $("#speakingSidebar").fadeOut(500);
        }
        else {
            $("h2").fadeOut("slow");
            $(".newsletter").fadeOut("slow");
            $("#title").css("top","20px");
            $(".navbar").css("margin-top", "30px");
            $(".full-bg-img").fadeOut(2500);
        }
        setTimeout(function(){ window.location.href=path+clicked+".php"; },timeout);
    });
}
