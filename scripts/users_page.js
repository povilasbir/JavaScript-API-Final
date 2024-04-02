import { getJson, createListElement } from '../scripts/main_functions.js'
import { DATA_USER_START, DATA_USER_END } from './variables.js'

async function init() {
    const wrap = document.getElementById('users-wrap')
    const userArray = await getJson('https://jsonplaceholder.typicode.com/users')
    createListElement(userArray, wrap, DATA_USER_START, DATA_USER_END)
}

init()