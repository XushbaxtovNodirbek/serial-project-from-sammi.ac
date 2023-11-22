function modal(){
    // Modal
    const modal = document.querySelector(".modal"),
        modalBtns = document.querySelectorAll("[data-modal]")

    modalBtns.forEach((item) => {
        item.addEventListener("click", openModal);
    });

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        clearTimeout(modalTimer);
    }
    function closeModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }

    // modalBtn.addEventListener('click',openModal)

    modal.addEventListener("click", (e) => {
        // console.dir(e.target.getAttribute('data-close') == '');
        if (e.target == modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.code == "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });

    const modalTimer = setTimeout(openModal,50000)

    function showModalByScroll() {
        if (
            window.scrollY + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);
}

export default modal;