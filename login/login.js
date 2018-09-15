$(document).ready(function() {
    $("#log-email").click(function() { bounceInput($("#email").val()); });

    console.log("Click function has been set, if something has the id of 'log-email'");
});


// Runs if there's a button of id 'log-email' when the page loads, that's pressed any time later
var bounceInput = function(email) {
    if (email) {
        console.log("User email: "+email);
    } else {
        console.log("Please give the input tag an id of \"email\" for this button to work as intended");
    }
    
    // Can you see what this is trying to add text to?
    // Add a component that lets you see this message on the web page when you press the login button
    $("#err-login-p").text('You sure "'+email+'" is an email?');
}