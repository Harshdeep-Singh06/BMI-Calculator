document.getElementById('calcBtn').addEventListener('click', () => {
  const height = document.getElementById('height').value / 100;
  const weight = document.getElementById('weight').value;

  if (!height || !weight) return;

  const bmi = (weight / (height * height)).toFixed(2);

  document.getElementById('result').textContent = `Your BMI is ${bmi}`;
});
