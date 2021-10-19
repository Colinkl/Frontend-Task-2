function menuButtonOnClick() {
    const menu = document.getElementsByClassName("menu")[0];
    const button = document.getElementsByClassName("header_burger")[0];
    menu.classList.toggle(menu.classList[0] + "-hidden");
    button.classList.toggle(button.classList[0] + "-active");
}