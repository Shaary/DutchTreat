$(document).ready(function () {

    var form = $("#theForm");

    form.hide();

    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Clicked");
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(500);
    });
    
});
