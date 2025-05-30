const elements = document.querySelectorAll('div.mcb-wrap-inner');
elements[4].remove();

const targetImg = document.querySelector('img[title="orzel 1919"]');

if (targetImg) {
  const newDiv = document.createElement('div');
  newDiv.style.width = '200px';
  newDiv.style.border = '1px solid #ccc';
  newDiv.style.padding = '10px';

  newDiv.innerHTML = `
    <marquee behavior="alternate"">
    <div style="width: 200px; border: 1px solid #ccc; padding: 10px;">
        <img src="https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/koktajl-truskawkowy-01.jpg" alt="Koktajl z truskawek" width="200">
        <h3 style="font-size: 16px;">Koktajl z truskawek</h3>
        <a href="https://www.kwestiasmaku.com/przepis/koktajl-z-truskawek" target="_blank">Zobacz przepis</a>
    </div>
    </marquee>
  `;

  targetImg.replaceWith(newDiv);
}

  const elementsTwo = document.querySelectorAll('.list_warszawa');
  const marquee = document.createElement('marquee');
  marquee.setAttribute('behavior', 'alternate');
  marquee.setAttribute('direction', 'left');
  marquee.setAttribute('scrollamount', '4');

  elementsTwo.forEach(el => {
    marquee.appendChild(el);
  });

  if (elementsTwo.length > 0) {
    const parent = elementsTwo[0].parentNode;
    parent.insertBefore(marquee, elementsTwo[0]);
  }
