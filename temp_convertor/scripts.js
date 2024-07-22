function convertTemp() {
    const temp = document.getElementById('inputTemp').value;
    const unit = document.getElementById('inputUnit').value;
    let convertedTemp;
    let outputUnit;

    if (unit === 'Celsius') {
        convertedTemp = (temp * 9/5) + 32;
        outputUnit = 'Fahrenheit';
    } else {
        convertedTemp = (temp - 32) * 5/9;
        outputUnit = 'Celsius';
    }

    document.getElementById('output').innerText = `Converted Temperature: ${convertedTemp.toFixed(2)}° ${outputUnit}`;
}
