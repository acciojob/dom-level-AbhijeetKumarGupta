//your JS code here. If required.
const element = document.getElementById('level');
let level = 0;
let current = element;

while (current) {
  if (current.tagName === 'HTML') {
    level++;
    break;
  }

  current = current.parentElement;
  level++;
}

alert(`The level of the element is: ${level}`);