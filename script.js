function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const resultElement = document.getElementById('result');

    if (unitInput === 'celsius') {
        const fahrenheit = (temperatureInput * 9/5) + 32;
        resultElement.innerText = `${temperatureInput}°C is ${fahrenheit}°F`;
    } else if (unitInput === 'fahrenheit') {
        const celsius = (temperatureInput - 32) * 5/9;
        resultElement.innerText = `${temperatureInput}°F is ${celsius}°C`;
    } else {
        resultElement.innerText = 'Invalid unit selected';
    }
}
