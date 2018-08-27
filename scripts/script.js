const navigation = document.querySelector(`.navigation`).querySelectorAll(`div`)
const sections = document.querySelectorAll(`section`)
console.log(sections)
console.log(navigation)
navigation.forEach((element, i, arr) => {

    element.addEventListener('click', (e) => {

        console.log(e.target.id)
        sections.forEach(el => {
            console.log(el.className)
            if(el.className === e.target.id) el.style.display = "flex"
            else el.style.display = "none"
        })

    })
})





















window.addEventListener('load', () => console.log(123))