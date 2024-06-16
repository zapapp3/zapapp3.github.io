class Nav {
    constructor() {
        this.hamburger = document.querySelector('.hamburger > .wrapper');
        this.nav = document.querySelector('.nav');

        // initialize
        this.init();
    }

    init() {
        this.hamburger.addEventListener('click', (event) => {
            this.nav.classList.toggle('active');
        });
    }
}

let nav1 = new Nav();
