// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let button = document.getElementById("takeoff");
    button.addEventListener("click", function() {
        let popup = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (popup) {
            let p = document.getElementById("flightStatus");
            p.innerHTML = "Shuttle in flight.";
        }
    })

});

//may need event as parameter for function line 5?
//difference between querySelector and getElementById?



//When the "Take off" button is clicked, the following should happen:
//A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
//The flight status should change to "Shuttle in flight."
//The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
//The shuttle height should increase by 10,000 miles.