function convertToNegative() {

    let number = prompt("Enter a positive integer:");


    while (isNaN(number) || number <= 0) {
        number = prompt("Please enter a positive integer only:");
    }


    number = parseInt(number);
    let negativeNumber = -number;


    alert("The negative equivalent is: " + negativeNumber);
}