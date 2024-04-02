export async function getJson(source) {
    const resPromise = await fetch(source)
    const json = await resPromise.json()
    return json
}

export function createListElement(arr, parent, dataStart, dataEnd) {
    arr.forEach(item => {
        const tableLine = document.createElement('a')
        tableLine.classList.add('table-line')
        tableLine.setAttribute('href', './user.html')

        const keyArray = Object.keys(item)
        for (let i = dataStart; i <= dataEnd; i++) {
            createSpan(item[keyArray[i]], tableLine)
        }

        parent.append(tableLine)
    })
}

export function createSpan(content, parent) {
    const spanEl = document.createElement('span')
    spanEl.classList.add('user-list-span')
    spanEl.textContent = content
    parent.append(spanEl)
}