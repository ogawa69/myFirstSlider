const cards = document.querySelectorAll('.card');
const btn = document.querySelector('.services__show-button');
const isTablet = window.matchMedia("(min-width: 768px) and (max-width: 1119.98px)");
const isDesktop = window.matchMedia("(min-width: 1120px)");

const getEveryNth = (arr, nth) => {
    const result = [];

    for (let i = 3; i < arr.length; i += nth) {
        result.push(arr[i]);
    }

    return result;
}

const hideItems = (arr, value) => {
    value = value - 1;

    for (let i = arr.length - 1; i > value;  i = i - 1) {
        arr[i].classList.add('hidden')
    }
}

const showItems = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove('hidden');
    }
}

if (isTablet.matches) {
    const getEveryFourthCard = getEveryNth(cards, 4);

    for (let i = 0; i < getEveryFourthCard.length; i++) {
        getEveryFourthCard[i].classList.add('hidden');
    }

    hideItems(cards, 8);
}

if (isDesktop.matches) {
    hideItems(cards, 8);
}

btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const txt = btn.querySelector('span');
    
    if (txt.textContent === 'Показать все') {
        showItems(cards);
        txt.textContent = 'Скрыть';
        img.classList.toggle('services__expand-ico-down');
    } else {
        hideItems(cards, 8);
        txt.textContent = 'Показать все';
        img.classList.toggle('services__expand-ico-down');
    }
})
