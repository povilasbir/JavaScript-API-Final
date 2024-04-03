import { getJson, createListElement } from '../scripts/main_functions.js'
import { DATA_POST_START, DATA_POST_END } from './variables.js'

const searchParams = new URLSearchParams(location.search)
const id = searchParams.get("id")
const title = document.getElementById('post-title')
const username = document.getElementById('post-username')
const content = document.getElementById('post-content')
const postsWrap = document.getElementById('user-posts-wrap')

async function init() {
    const postData = await getJson('https://jsonplaceholder.typicode.com/posts/' + id)
    assignValues(postData, postData.userId)

    const postsArr = await getJson('https://jsonplaceholder.typicode.com/posts')
    const userPosts = postsArr.filter(post => {
        return post.userId == postData.userId
    })
    createListElement(userPosts, postsWrap, DATA_POST_START, DATA_POST_END, 'post')

}

init()

async function assignValues(values, userId) {
    title.textContent = values.title
    content.textContent = values.body

    const userData = await getJson('https://jsonplaceholder.typicode.com/users/' + values.userId)

    username.textContent = 'By: ' + userData.username
    username.setAttribute('href', './user.html?id=' + userId)
}