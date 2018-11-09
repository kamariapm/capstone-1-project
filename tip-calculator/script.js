$(document).ready(function () {
    // define a function to perform our calculation.
    function calculate() {
        // retrieve the values from the amount and percentage fields
        // and store them in letiables.
        let amount = $('#amount').val();
        let percentage = $('#percentage').val();
        let totalPeople = $('#totalPeople').val();

        // calculate the actual tip.
        let tip = amount * (percentage / 100);

        // also calculate the total.

        // Note the 'Number' function: amount is actually a string
        // and adding a number to a string just makes a longer
        // string, so we convert it to a number first.
        let total = Number(amount) + tip;
        let totalPerPerson = (Number(amount) + tip) / (totalPeople);


        // toFixed function makes sure there are only two digits after the decimal point.
        $('#tip').val(tip.toFixed(2));
        $('#total').val(total.toFixed(2));
        $('#totalPerPerson').val(totalPerPerson.toFixed(2));

        // submit event fucntions must return false,
        // to tell the browser not to load a new page.
        return false;
    }
    // attach our function to the form's submit event.
        $('#calculator').submit(calculate);

        $("#resetButton").click(function () {
            location.reload()
        });
});

