const elements = document.querySelectorAll('div.mcb-wrap-inner');

for (let i = 0; i < 5 && i < elements.length; i++) {
  elements[i].remove();
}

