const submitBtn = document.querySelector("#submit-btn")

const modalBg = document.querySelector(".modal-bg")
const modal = document.querySelector(".modal")

const header = document.querySelector("header")
const footer = document.querySelector("footer")

const body = document.querySelector("body")

function loginEffect(delay) {
    modalBg.style.display = "none"
    modal.style.display = "none"

    header.style.animation = `closeEffect ${delay}s linear`
    footer.style.animation = `closeEffect ${delay}s linear`

    setTimeout(() => {

        body.style.flexDirection = "row"

        header.style.width = "50vw"
        header.style.height = "100vh"

        footer.style.width = "50vw"
        footer.style.height = "100vh"

    }, +`${delay}000`)

    setTimeout(() => {

        header.style.animation = `openEffect ${delay}s linear`
        footer.style.animation = `openEffect ${delay}s linear`

    }, +`${delay + 1}000`)

    setTimeout(() => {

        header.style.display = "none"
        footer.style.display = "none"

    }, +`${(delay + 1) + delay}000`)
}

function showTemplates(delay) {

    const dashboardTemplate = `<nav>
    <a href="#"><h1>Logo</h1></a>
    <ul>
        <li><button>Dashboard</button></li>
        <li><button>Consultas</button></li>
        <li><button>Estoque</button></li>
    </ul>
   </nav>
   <section id="dashboard">

   </section>`


   

//    const petListTemplate = `<div class="pet-box">
//                 <div class="name-container">
//                     <div class="img-control">
//                         <img src="/img/${}.png" alt="${} Icon">
//                     </div>
//                     <h3>${}</h3>
//                 </div>
//                 <p>${}</p>
//             </div>`

//     const parser = new DOMParser();
//     const htmlTemplate = parser.parseFromString(template, "text/html");
    

    setTimeout(() => {
        body.style.flexDirection = "column"
        body.style.justifyContent = "unset"

        body.innerHTML = dashboardTemplate

    }, +`${(delay + 1) + delay}000`)


}


submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

    loginEffect(2)

    showTemplates(2)


})