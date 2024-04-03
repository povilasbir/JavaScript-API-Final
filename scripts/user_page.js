import { getJson, createListElement } from '../scripts/main_functions.js'
import { DATA_POST_START, DATA_POST_END } from './variables.js'

const searchParams = new URLSearchParams(location.search)
const id = searchParams.get("id")
const username = document.getElementById('username')
const fullName = document.getElementById('full-name')
const email = document.getElementById('email')
const street = document.getElementById('street')
const suite = document.getElementById('suite')
const city = document.getElementById('city')
const zipcode = document.getElementById('zipcode')
const lat = document.getElementById('lat')
const lng = document.getElementById('lng')
const postsWrap = document.getElementById('user-posts-wrap')

async function init() {
    const userData = await getJson('https://jsonplaceholder.typicode.com/users/' + id)
    assignValues(userData)

    const postsArr = await getJson('https://jsonplaceholder.typicode.com/posts')
    const userPosts = postsArr.filter(post => {
        return post.userId == id
    })
    createListElement(userPosts, postsWrap, DATA_POST_START, DATA_POST_END, 'post')
}

init()

function assignValues(values) {
    username.textContent = 'Username: ' + values.username
    fullName.textContent = 'Full Name: ' + values.name
    email.textContent = 'Email: ' + values.email
    street.textContent = 'Street: ' + values.address.street
    suite.textContent = 'Suite: ' + values.address.suite
    city.textContent = 'City: ' + values.address.city
    zipcode.textContent = 'Zipcode: ' + values.address.zipcode
    lat.textContent = 'Latitude: ' + values.address.geo.lat
    lng.textContent = 'Longitude: ' + values.address.geo.lng
}