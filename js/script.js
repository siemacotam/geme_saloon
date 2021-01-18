// typing

const mainInfo = document.querySelector('.type')
const txt = 'Wybierz grę, która Cię pochłonie...'
let indexText = 0
const time = 50

const addLetter = () => {
    mainInfo.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}

const indexTyping = setInterval(addLetter, time)

// papier kamien nozyczki

