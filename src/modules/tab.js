function tab(){

    // Tabs
    const tabheaderItems = document.querySelector(".tabheader__items");
    const tabcontents = document.querySelectorAll(".tabcontent");
    loadTabs();
    tabheaderItems.addEventListener("click", (event) => {
        // console.dirp(event.target);

        tabheaderItems.childNodes.forEach((child) => {
            if (child.nodeType == 1)
                child.classList.remove("tabheader__item_active");
        });

        if (
            event.target &&
            event.target.classList.contains("tabheader__item") &&
            !event.target.classList.contains("tabheader__item_active")
        ) {
            event.target.classList.add("tabheader__item_active");
            tabcontentsActivator(event.target.textContent.toLowerCase());
        }
    });

    function tabcontentsActivator(alt) {
        tabcontents.forEach((tabcontent) => {
            if (tabcontent.firstElementChild.alt == alt) {
                tabcontent.classList.add("show", "fade");
                tabcontent.classList.remove("hide");
            } else {
                tabcontent.classList.remove("show");
                tabcontent.classList.add("hide");
            }
        });
    }

    function loadTabs() {
        tabheaderItems.childNodes.forEach((child) => {
            if (child.nodeType == 1)
                if (child.classList.contains("tabheader__item_active"))
                    tabcontentsActivator(child.textContent.toLocaleLowerCase());
        });
    }
}

export default tab;