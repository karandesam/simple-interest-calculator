function calculateInterest(){

    let principal =
    parseFloat(document.getElementById("principal").value);

    let rate =
    parseFloat(document.getElementById("rate").value);

    let time =
    parseFloat(document.getElementById("time").value);

    if(isNaN(principal) || isNaN(rate) || isNaN(time)){

        document.getElementById("result").innerHTML =
        "Please enter all values.";

        return;

    }

    let interest =
    (principal * rate * time) / 100;

    let total =
    principal + interest;

    document.getElementById("result").innerHTML =
    "Simple Interest = £" + interest.toFixed(2) +
    "<br>Total Amount = £" + total.toFixed(2);

}
