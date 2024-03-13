document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmi-form');
    const result = document.getElementById('result');
    const resetBtn = document.getElementById('reset-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const gender = document.getElementById('gender').value;
        const weight = document.getElementById('weight').value;
        const age = document.getElementById('age').value;
        const height = document.getElementById('height').value;

        if (validateInput(weight, height)) {
            const bmi = calculateBMI(weight, height);
            displayResult(bmi, gender, age);
        }
    });

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        result.classList.add('hidden');
        form.reset();
    });
});

function validateInput(weight, height) {
    if (weight <= 0 || height <= 0) {
        alert('Berat badan dan tinggi badan harus lebih besar dari nol.');
        return false;
    }
    return true;
}

function calculateBMI(weight, height) {
    height /= 100;
    const bmi = weight / (height * height);
    return parseFloat(bmi.toFixed(1));
}

function displayResult(bmi, gender, age) {
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    const interpretation = document.getElementById('interpretation');

    bmiValue.textContent = bmi;

    if (bmi < 18.5) {
        bmiCategory.textContent = 'Kekurangan Berat Badan';
    } else if (bmi < 24.9) {
        bmiCategory.textContent = 'Normal (Ideal)';
    } else if (bmi < 29.9) {
        bmiCategory.textContent = 'Kelebihan Berat Badan';
    } else {
        bmiCategory.textContent = 'Obesitas';
    }

    interpretation.textContent = `Berat badan Anda ${bmiCategory.textContent}. Untuk usia Anda (${age} tahun), ${gender === 'male' ? 'pria' : 'wanita'} dengan berat badan seperti Anda memiliki resiko ${bmiCategory.textContent.toLowerCase()} berat badan.`;

    result.classList.remove('hidden');
}