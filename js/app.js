document.addEventListener('DOMContentLoaded', init)

function init() {
    const menu = document.getElementsByClassName("menu")[0];
    const header = document.getElementsByClassName("welcome-header")[0];
    const button = document.getElementsByClassName("welcome-header_burger")[0];
    let isHeaderBlack = false;

    function toggleMenu() {
        if (window.innerWidth > 1270) return;
        menu.classList.toggle(menu.classList[0] + "-hidden");
        button.classList.toggle(button.classList[0] + "-active");
    }

    window.addEventListener("resize", onResize)

    function onResize() {
        if (window.innerWidth > 1270) {
            menu.classList.remove(menu.classList[0] + "-hidden")
        } else {
            menu.classList.add(menu.classList[0] + "-hidden")
            button.classList.remove(button.classList[0] + "-active")
        }
    }

    if (window.innerWidth > 1270) {
        menu.classList.remove(menu.classList[0] + "-hidden")
    }

    button.addEventListener('click', toggleMenu);
    menu.addEventListener('click', toggleMenu)

    window.addEventListener('scroll', function() {
        if (this.scrollY >= this.window.innerHeight - 50 && !isHeaderBlack) {
            isHeaderBlack = true;
            header.classList.toggle(header.classList[0] + "-black");
        }
        if (this.scrollY <= this.window.innerHeight - 50 && isHeaderBlack) {
            isHeaderBlack = false;
            header.classList.toggle(header.classList[0] + "-black");
        }
    });
}