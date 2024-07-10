function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; 

    if (weight > 0 && height > 0) {
      const bmi = weight / (height * height);
      displayResult(bmi);
    } else {
      alert('Please enter valid values for weight and height.');
    }
  }

  function displayResult(bmi) {
    const resultDiv = document.getElementById('result');
    let category = '';

    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} ( you are ${category} ).`;
  }