// establishing frontend controllers via following functions and will need ajax requests that hit the routes in the backend

const getBurger = () => {
  axios.get('/burger')
    .then(burger => {
      console.log(burger)
    })
    .catch(e => console.log(e))
}
// create key value pair with key being the name of variable, the value being the value of variable
const addBurger = (name) => {
  console.log("addburger:", name)
  axios.post('/burger', {
    name,
    devoured: false
  })
    .then(() => {
      console.log('Burger Added!')
      window.location.reload()
    })
    .catch(e => console.log(e))
}
const eatBurger = id => {
  axios.put(`/burger/${id}`)
    .then(() => {
      console.log('Burger Eaten!')
    })
    .catch(e => console.log(e))
}
const removeBurger = id => {
  axios.delete(`/burger/${id}`)
    .then(() => {
      console.log('Burger Removed!')
    })
    .catch(e => console.log(e))
}
document.getElementById('addBurger').addEventListener('click', () => {
  // run this to prevent default action of + button within form
  event.preventDefault()
  console.log(document.getElementById('burger').value)
  addBurger(document.getElementById('burger').value)
  document.getElementById('burger').value = ' '
  //window.location.reload()
})

document.addEventListener('click', e => {
  // property returns the parent node of the specified node, as a Node object, if the below string includes 'eatBurger' then console log it
  // parentNode references buttons in main.hbs
  if (e.target.parentNode.className.includes('eatBurger')) {
    eatBurger(e.target.parentNode.dataset.burger)
    window.location.reload()
  } else if (e.target.parentNode.className.includes('removeBurger')) {
    removeBurger(e.target.parentNode.dataset.burger)
    window.location.reload()
  }
})