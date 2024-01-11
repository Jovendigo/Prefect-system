flatpickr("#date", {
    dateFormat: "Y/m/d",
    allowInput: true,
});
const {ipcRenderer} = require('electron');
let studentId = document.getElementById('studentId');
let dateOccurred = document.getElementById('dateOccurred');
let csHours = document.getElementById('csHours');
let Submit = document.getElementById('submit');


Submit.addEventListener('click', () => {
    let data = '{' +
        '\\"studentId\\":\\"' + studentId.value + '\\",' +
        '\\"dateOccurred\\":\\"' + dateOccurred.value + '\\"' +
        '\\"csHours\\":\\"' + csHours.value + '\\"'
        '}';
    ipcRenderer.send('item-channel', data);
});