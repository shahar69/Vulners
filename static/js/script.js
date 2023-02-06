document.getElementById("network_scanning").addEventListener("click", function(){
    $.ajax({
        url: "/network_scanning",
        success: function(result) {
            $("#main_content").html(result);
        }
    });
});

document.getElementById("vulnerability_assessment").addEventListener("click", function(){
    $.ajax({
        url: "/vulnerability_assessment",
        success: function(result) {
            $("#main_content").html(result);
        }
    });
});

document.getElementById("exploitation").addEventListener("click", function(){
    $.ajax({
        url: "/exploitation",
        success: function(result) {
            $("#main_content").html(result);
        }
    });
});

document.getElementById("post_exploitation").addEventListener("click", function(){
    $.ajax({
        url: "/post_exploitation",
        success: function(result) {
            $("#main_content").html(result);
        }
    });
});

document.getElementById("reporting").addEventListener("click", function(){
    $.ajax({
        url: "/reporting",
        success: function(result) {
            $("#main_content").html(result);
        }
    });
});

$(document).ready(function(){
    $("#main_content").on("click", "a.back_button", function(e){
        e.preventDefault();
        $("#main_content").load("/");
    });
});
