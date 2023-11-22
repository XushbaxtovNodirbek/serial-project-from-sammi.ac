function form() {
    // Form

    const forms = document.querySelectorAll('form'),
    msg ={
        loading : 'img/svg/spinner.svg',
        success : "Thank's for submitting the form.",
        failure : "Something is wrong."
    }

    const modal = document.querySelector(".modal")
    const modalTimer = setTimeout(openModal,50000)

    forms.forEach(form => {
        bindPostData(form);
    })

    async function postData(url,data){
        const response =await fetch(url,{
                method: 'POST',
                body: data,
                headers:{
                    'Content-Type':'application/json'
                }
            })

        return await response.json();
    }

    function bindPostData(form){
        form.addEventListener('submit', e => {
            e.preventDefault()

            const spinner = document.createElement('img')
            spinner.src = msg.loading
            spinner.style.cssText = `
                display: block;
                margin: 0 auto;
            `

            form.append(spinner)
            form.insertAdjacentElement('afterend',spinner)

            const formData = new FormData(form)

            // const request =new XMLHttpRequest();
            // request.open('POST','server.php')
            // request.setRequestHeader('Content-Type','application/json')
            
            const obj = {}
            formData.forEach((val,key) => {
                obj[key] = val
            })

            // const json = JSON.stringify(obj)
            // console.log(json);
            // request.send(json)

            // fetch('http://localhost:3000/requests',{
            //     method: 'POST',
            //     body: json,
            //     headers:{
            //         'Content-Type':'application/json'
            //     }
            // })
            // .then(data => data.text()) 
            postData('http://localhost:3000/requests',JSON.stringify(obj)).then(data => {
                console.log(data);
                showThanksModal(msg.success);
            }).catch(() =>
                {showThanksModal(msg.failure)}
            ).finally(()=>{
                form.reset();
                spinner.remove()
            })

            // request.addEventListener('load',() => {
            //     if(request.status === 200){
            //         console.log(request.response)
            //         showThanksModal(msg.success)
            //         form.reset()
            //         spinner.remove()
            //     }else{
            //         showThanksModal(msg.failure)
            //         spinner.remove()
            //     }
            // })

            
        })
    }
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
    function showThanksModal(message){
        const prevModalDialog = document.querySelector('.modal__dialog') // mavjud dialog oyna

        prevModalDialog.classList.add('hide') //  hide class yordamida dispaly = none
        openModal() // yangi modal ochish

        const thanksModal = document.createElement('div') // dialog uchun div yaratish
        thanksModal.classList.add('modal__dialog') // classlist qo'shish

        thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">
              ${message}
            </div>
        </div>
        `

        document.querySelector('.modal').append(thanksModal)

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.remove('hide')
            prevModalDialog.classList.add('show')
            closeModal( )
        },4000)
    }
}

export default form;