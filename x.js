const elements = document.querySelectorAll('div.mcb-wrap-inner');
elements[4].remove();

const targetImg = document.querySelector('img[title="orzel 1919"]');

if (targetImg) {
  const newDiv = document.createElement('div');
  newDiv.style.width = '200px';
  newDiv.style.border = '1px solid #ccc';
  newDiv.style.padding = '10px';

  newDiv.innerHTML = `
    <marquee behavior="alternate">
    <div style="width: 200px; border: 1px solid #ccc; padding: 10px;">
        <marquee behavoir="alternate"><img src="https://cdn.aniagotuje.com/app/client/static/imgs/ania/ania_kolo_216.jpg" alt="Koktajl z truskawek" width="200"></marquee>
        <h3 style="font-size: 16px;">Koktajl z truskawek</h3>
        <a href="https://www.kwestiasmaku.com/przepis/koktajl-z-truskawek" target="_blank">Zobacz przepis</a>
    </div>
    </marquee>
  `;

  targetImg.replaceWith(newDiv);
}

const buttons = document.querySelectorAll('span.button_label');
buttons[0].remove();
buttons[1].remove();
