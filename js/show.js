const more768 = document.querySelectorAll('.more-768');
const more1120 = document.querySelectorAll('.more-1120');

if (window.innerWidth >= 768 && window.innerWidth < 1120) {

    let addCards768 = (value) => {
        const btn = document.querySelector('.services__show-button');
        const btn2 = document.querySelector('.services__hide-button');
        btn.addEventListener('click', () => {
            more768[value].style.display = 'flex';
            btn.style.display = 'none';
            btn2.style.display = 'flex';
        })
    }

    let removeCards768 = (value) => {
        const btn = document.querySelector('.services__hide-button');
        const btn2 = document.querySelector('.services__show-button');
        btn.addEventListener('click', () => {
            more768[value].style.display = 'none';
            btn.style.display = 'none';
            btn2.style.display = 'flex';
        })
    }

    for (let i = 0; i < more768.length; i++) {
        addCards768(i);
        removeCards768(i);

    }
}

if (window.innerWidth >= 1120) {

    let addCards1120 = (value) => {
        const btn = document.querySelector('.services__show-button');
        const btn2 = document.querySelector('.services__hide-button');
        btn.addEventListener('click', () => {
            more1120[value].style.display = 'flex';
            btn.style.display = 'none';
            btn2.style.display = 'flex';
        })
    }
    
    let removeCards1120 = (value) => {
        const btn = document.querySelector('.services__hide-button');
        const btn2 = document.querySelector('.services__show-button');
        btn.addEventListener('click', () => {
            more1120[value].style.display = 'none';
            btn.style.display = 'none';
            btn2.style.display = 'flex';
        })
    }
    
    for (let i = 0; i < more1120.length; i++) {
        addCards1120(i);
        removeCards1120(i);
    
    }
}
