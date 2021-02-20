const value = document.querySelector("#value")
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')
const refreshBtn = document.querySelector('button[data-action="refresh"]')
refreshBtn.addEventListener("click", refresh)
decrementBtn.addEventListener("click", decrement)
incrementBtn.addEventListener("click", increment)

let counterValue = 0
function increment() {
	counterValue += 1
	value.textContent = counterValue
}

function decrement() {
	counterValue -= 1
	value.textContent = counterValue
}

function refresh() {
	counterValue = 0
	value.textContent = counterValue
}
