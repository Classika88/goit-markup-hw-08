const refs = {
	openMenuBtn: document.querySelector("[data-open-menu]"),
	closeMenuBtn: document.querySelector("[data-close-menu]"),
	menu: document.querySelector("[data-menu]"),
	menuList: document.querySelector('menu-nav'),
};

refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.closeMenuBtn.addEventListener("click", toggleMenu);
refs.menuList.addEventListener("click", removeMenu);

function toggleMenu() {
	refs.menu.classList.toggle("is-hidden");
}
function removeMenu() {
	refs.menu.classList.add("is-hidden");
	refs.body.classList.remove("no-scroll");
}
