
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temperature = 45;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;
}

const windChillOutput = document.getElementById("windchill");

if (temperature <= 50 && windSpeed > 3) {
    windChillOutput.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °F`;
} else {
    windChillOutput.textContent = "N/A";
}
