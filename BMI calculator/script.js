function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight && height) {
        var heightInMeters = height / 100;
        var bmi = weight / (heightInMeters * heightInMeters);
        bmi = bmi.toFixed(2);

        var category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        document.getElementById('result').innerText = `Your BMI is ${bmi}. Category: ${category}`;
    } else {
        document.getElementById('result').innerText = 'Please enter both weight and height.';
    }
}
