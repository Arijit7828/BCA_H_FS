document.getElementById('bmiForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid height and weight values.');
        return;
    }

    const bmi = weight / Math.pow(height / 100, 2);
    const bmiResult = document.getElementById('bmiResult');

    bmiResult.textContent = `Your BMI: ${bmi.toFixed(2)}`;

    const needle = document.querySelector('.needle');
    const maxBmi = 35;
    const minBmi = 15;
    const needleHeight = (bmi - minBmi) / (maxBmi - minBmi) * 80;

    needle.style.borderTopColor = getBmiColor(bmi);
    needle.style.top = `calc(50% - ${needleHeight}px)`;
});

function getBmiColor(bmi) {
    if (bmi < 18.5) {
        return 'blue';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'green';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'yellow';
    } else {
        return 'red';
    }
}