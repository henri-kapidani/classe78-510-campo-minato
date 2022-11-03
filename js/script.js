/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

const eleSelectLevel = document.querySelector('#select-level');
const eleBtnPlay = document.querySelector('#btn-play');
const eleBtnHelp = document.querySelector('#btn-help');
const eleStartScreen = document.querySelector('.start-screen');
const eleGrid = document.querySelector('.grid');

eleBtnPlay.addEventListener('click', function () {
	// pulire la griglia ad ogni cambio di livello
	eleGrid.innerHTML = '';
	// eleGrid.replaceChildren();

	eleGrid.classList.remove('hidden');
	eleStartScreen.classList.add('hidden');

	const nCells = parseInt(eleSelectLevel.value);
	// let nCells;
	// switch (eleSelectLevel.value) {
	// 	case 'facile':
	// 		nCells = 100
	// 		break;
	// 	case 'medio':
	// 		nCells = 81
	// 		break;
	// 	case 'difficile':
	// 		nCells = 49
	// 		break;
	// }

	const sideSquare = Math.sqrt(nCells);
	eleGrid.style.setProperty('--sideSquare', sideSquare);

	for (let i = 1; i <= nCells; i++) {
		// eleGrid.innerHTML += `<div class="cell">${i}</div>`;

		const eleCell = document.createElement('div');
		eleCell.classList.add('cell');
		eleCell.innerHTML = i;
		// eleCell.style.width = `calc(100% / ${sideSquare})`;
		// eleCell.style.height = `calc(100% / ${sideSquare})`;
		eleGrid.append(eleCell);

		eleCell.addEventListener('click', toggleCell);
	}
});

eleBtnHelp.addEventListener('click', function () {
	if (eleBtnHelp.dataset.function == 'show-help') {
		eleBtnHelp.innerHTML = 'Back to game';
		eleBtnHelp.dataset.function = 'show-game';
		eleGrid.classList.add('hidden');
		eleStartScreen.classList.remove('hidden');
	} else if (eleBtnHelp.dataset.function == 'show-game') {
		eleBtnHelp.innerHTML = 'Show help';
		eleBtnHelp.dataset.function = 'show-help';
		eleGrid.classList.remove('hidden');
		eleStartScreen.classList.add('hidden');
	}
});


function toggleCell() {
	this.classList.toggle('active');
}
