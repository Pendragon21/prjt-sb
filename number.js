const numberElement = document.getElementById('numberElement');
const generateBtn = document.getElementById('generateBtn');
const numbers = [];
const listElement = document.getElementById('list'); // New code to get reference to the list div

function generateRandomNumber() {
  let sortedNumber = Math.floor(Math.random() * 51);
  numbers.push(sortedNumber);
  numberElement.innerHTML = sortedNumber;
  renderList(); // New code to call the renderList function after each number is generated
}

generateRandomNumber(); // Call the function initially to display a random number

generateBtn.addEventListener('click', generateRandomNumber);

function renderList() {
  listElement.innerHTML = ''; // Clear the list before re-rendering it
  const ul = document.createElement('ul');
  for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement('li');
    li.textContent = numbers[i];
    ul.appendChild(li);
  }
  listElement.appendChild(ul);
}
