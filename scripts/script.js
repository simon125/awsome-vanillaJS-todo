const navigation = document.querySelector(`.navigation`).querySelectorAll(`div`)
const sections = document.querySelectorAll(`section`)
const ul = document.querySelector(`#tasks`)
const form = document.querySelector(`form`)

const renderRatingSines = (count) => {
    if (count == 1) return `<i class="fas fa-exclamation"></i>`
    else if (count == 2) return `<i class="fas fa-exclamation"></i><i class="fas fa-exclamation"></i>`
    else if (count == 3) return `<i class="fas fa-exclamation"></i><i class="fas fa-exclamation"></i><i class="fas fa-exclamation"></i>`
}

form.addEventListener(`submit`, (e) => {
    e.preventDefault()

    const li = document.createElement('li')
    li.classList.add('list-item')
    li.innerHTML = `<div class="col-1">
                    <h2 class="task-title">${form.title.value}</h2>
                    <div class="priority">
                        Priority:
                        ${renderRatingSines(form.priority.value)}
                     </div>
                    
                     <div class="option-icons">
                                    <i class="far fa-check-circle done"></i>
                                    <i class="fas fa-edit edit-task"></i>
                                    <i class="fas fa-times-circle delete-task"></i>
                                </div>
                                <div class="time-box">
                                    <div class="start-date"><strong>Start day:</strong> 12-12-1324</div>
                                    <div class="end-date"><strong>Deadline: </strong> 12-12-1324</div>
                                    <div class="days-to-end" id="days-to-end"><strong>Days left:</strong> 23</div>
                                </div>
                            </div>
                            <div class="col-2 show-content">
                            <p class="task-content">${form.content.value}</p>
                                <i class="fas fa-arrow-circle-right arrow "></i>
                            </div>`

    li.querySelector(`.show-content`).addEventListener('click', () => {

        if (li.querySelector(`.arrow`).style.transform == "rotate(0deg)" || li.querySelector(`.arrow`).style.transform == '') {
            li.querySelector(`.arrow`).style.transform = "rotate(180deg)"
            li.querySelector(`.col-1`).style.width = '0'
        }
        else {
            li.querySelector(`.arrow`).style.transform = "rotate(0deg)"
            li.querySelector(`.col-1`).style.width = '100%'
        }
    })
    ul.appendChild(li)
    form.title.value = ''
    form.content.value = ''
})

console.log(sections)
console.log(navigation)
navigation.forEach((element, i, arr) => {

    element.addEventListener('click', (e) => {

        arr.forEach(el => {
            if (el === e.target) el.classList.add('active')
            else el.classList.remove('active')
        })

        console.log(e.target.id)
        sections.forEach(el => {
            console.log(el.className)
            if (el.className === e.target.id) el.style.display = "flex" // here sholud be block but ther is a problem with UI
            else el.style.display = "none"
        })

    })
})





















window.addEventListener('load', () => console.log(123))