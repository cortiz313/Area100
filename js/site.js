// get the values from the Page
// starts or controller function
function getValues() {
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // We need to validate our input
    // parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue) &&
        startValue >= 0 && startValue < 100 && endValue > 0 && endValue <= 100) {
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        // call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("You must enter integers between 0 and 100.");
    }
}

// generate numbers from the startvalue to the end value
// logic function(s)
function generateNumbers(startValue, endValue) {

    let numbers = [];


    // we want to get all numbers from start to end

    for (let i = startValue; i <= endValue; i++) {
        // this will execute in a loop until index = endValue
        numbers.push(i);
    }

    return numbers;
}

// display numbers and mark the even numbers bold
// display or view functions
function displayNumbers(numbers) {

    let className = "even";
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let number = numbers[index];
        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}