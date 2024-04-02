const DATA_SHOW_START = 1
const DATA_SHOW_END = 3

async function init() {
    const wrap = document.getElementById('users-wrap')
    const userArray = await getUserList('https://jsonplaceholder.typicode.com/users')
    createListElement(userArray, wrap)
}

init()

async function getUserList(source) {
    const resPromise = await fetch(source)
    const json = await resPromise.json()
    return json
}

function createListElement(arr, parent) {
    arr.forEach(item => {
        const tableLine = document.createElement('a')
        tableLine.classList.add('table-line')
        tableLine.setAttribute('href', './user.html')

        const keyArray = Object.keys(item)
        for (let i = DATA_SHOW_START; i <= DATA_SHOW_END; i++) {
            createSpan(item[keyArray[i]], tableLine)
        }

        parent.append(tableLine)
    })
}

function createSpan(content, parent) {
    const spanEl = document.createElement('span')
    spanEl.classList.add('user-list-span')
    spanEl.textContent = content
    parent.append(spanEl)
}