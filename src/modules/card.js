function card(){
    // Class Card
    class MenuCard {
        constructor(
            src,
            alt,
            title,
            description,
            price,
            parentSelector,
            ...classes
        ) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.currency = 12350;
            this.exchengeToUZS();
        }

        exchengeToUZS() {
            this.price = this.price * this.currency;
        }

        render() {
            const element = document.createElement("div");
            if (this.classes.length === 0) {
                element.classList.add("menu__item");
            } else {
                this.classes.forEach((classname) =>
                    element.classList.add(classname)
                );
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt} />
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">
                    ${this.description}
                </div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Price:</div>
                    <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
                 </div>
            `;
            this.parent.append(element);
        }
    }

    axios.get('http://localhost:3000/menu').then(response => {
        response.data.forEach(obj =>{
            new MenuCard(
                obj.img,
                obj.alt,
                obj.title,
                obj.description,
                obj.price,
                ".menu .container",
                "menu__item"
            ).render()
        })
    })
}

export default card;