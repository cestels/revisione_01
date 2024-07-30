async function getTemperature() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Urbino&appid=68f596dee38f888e05ba30c08cc79104');
        const data = await response.json();
        const kelvin = data['main']['temp'];
        const celsius = 29; //per verificare il corretto funzionamento
        //const celsius = kelvin - 273.15;
        console.log(`Temperature in Celsius: ${celsius.toFixed(2)}°C`);
        
        if (28.50 <= celsius && celsius <= 29) {
            console.log('yay ci sono riuscita');
            downloadFile('typeface/5-04-VF.ttf', '5-04-VF.ttf');
        } else if (27.50 < celsius && celsius <= 28) {
            console.log('aiuto speriamo');
            downloadFile('img/ANODE.png', 'ANODE.png');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function downloadFile(relativePath, fileName) {
    let url = window.location.href;
    url = url.substring(0, url.length - 10);
    const fileUrl = url + relativePath;

    console.log(fileUrl);

    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

document.getElementById('downloadButton').addEventListener('click', getTemperature);

