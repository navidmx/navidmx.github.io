var subtitles = ["Guitarist","Slight Egomaniac","Graphic Designer","Metalhead","Web Developer",];
var projects = [{title:"All Star Wars", desc:"Developed for All Star Code, a (virtual reality supported) game that connects your phone to your display, allowing you to wield a lightsaber.", img:"img/all-star-wars.png", link:"http://navidmx.herokuapp.com"},{title:"C. L. Halpern's Website", desc:"Developed for Christina Lewis Halpern, built to showcase her work and philanthropic efforts.", img:"img/christina-website.png", link:"http://christinalewis.com"}]
var count = 0;
var tabOut = false;

$( document ).ready(function() {
    $("#title").fadeIn(2000);
    $("#navbar").fadeIn(1000);
    changeSubtitle();
    for(var i=0; i<projects.length; i++){
        $("#sidebar").append("<div class=\"project\"><a href="+projects[i].link+" target=\"_newtab\"><img class=\"projectImg\" src="+projects[i].img+"></a><h4>"+projects[i].title+"</h4><h5>"+projects[i].desc+"</h5></div>"); 
    };
});

$("#sidebarTab").hover(function(){
    $("#sidebar").css("background-color","#1a1a1a");
},function(){
    $("#sidebar").css("background-color","#212121");
});

$("#sidebarTab").click(function(){
    if (window.innerWidth > 700){
        if (!tabOut){
            $("#title").css("right","30%");
            $("#sidebar").css("right",0);
            $("#sidebarTab").css("right",(.3*window.innerWidth)-10);
            document.getElementById("arrow").innerHTML="&gt;";
            tabOut = true;
        }
        else if (tabOut){
            $("#title").css("right","0");
            $("#sidebar").css("right","-30%");
            $("#sidebarTab").css("right","-10px");
            document.getElementById("arrow").innerHTML="&lt;";
            tabOut = false;
        }
    }
    else if (window.innerWidth <= 700){
        if (!tabOut){
            $("#title").css("transform","translateY(-95%)");
            $("#sidebar").css("bottom",0);
            $("#sidebarTab").css("bottom",(.5*window.innerHeight)-10);
            if (window.innerWidth < 360){$("#navbar").fadeOut(500);}
            document.getElementById("arrow").innerHTML="&gt;";
            tabOut = true;
        }
        else if (tabOut){
            $("#title").css("transform","translateY(-70%)");
            $("#sidebar").css("bottom","-50%");
            $("#sidebarTab").css("bottom","-10px");
            if (window.innerWidth < 360){$("#navbar").fadeIn(500);}
            document.getElementById("arrow").innerHTML="&lt;";
            tabOut = false;
        }
    }
});

function changeSubtitle(){
    setInterval(function(){
        if (count < subtitles.length-1){
            document.getElementById("subtitle").innerHTML=subtitles[count];
            count++;
        }
        else{
            document.getElementById("subtitle").innerHTML=subtitles[subtitles.length-1];
            count = 0;
        }
    },1000);
}