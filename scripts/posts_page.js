import { getJson, createListElement } from '../scripts/main_functions.js'
import { DATA_POST_START, DATA_POST_END } from './variables.js'

async function init() {
    const wrap = document.getElementById('users-wrap')
    const userArray = await getJson('https://jsonplaceholder.typicode.com/posts')
    createListElement(userArray, wrap, DATA_POST_START, DATA_POST_END, 'post')
}

init()