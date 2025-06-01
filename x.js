/*
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

const h2 = document.querySelector('h2');
  if (h2) {
    const div = document.createElement('div');
    div.id = 'ww_a0114bcaa94c4';
    div.setAttribute('v', '1.3');
    div.setAttribute('loc', 'id');
    div.setAttribute('a', '{"t":"horizontal","lang":"pl","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}');
    div.innerHTML = `More forecasts: <a href="https://oneweather.org/warsaw/30_days/" id="ww_a0114bcaa94c4_u" target="_blank">Warsaw 30 day forecast</a>`;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://app3.weatherwidget.org/js/?id=ww_a0114bcaa94c4';

    h2.replaceWith(div);
    div.after(script);
  }
*/

document.querySelectorAll('li input').forEach(input => input.remove());
document.querySelectorAll('li').forEach(li => {
  if (li.textContent === 'Grzegorz Braun, \\">') {
    li.textContent = 'Robert Gawlik, Przemyśl';
  }
});

const imiona = [
  'Jan', 'Anna', 'Piotr', 'Maria', 'Tomasz', 'Katarzyna', 'Michał', 'Aleksandra',
  'Paweł', 'Ewa', 'Grzegorz', 'Barbara', 'Marcin', 'Joanna', 'Kamil', 'Agnieszka',
  'Robert', 'Natalia', 'Łukasz', 'Magdalena', 'Mariusz', 'Patrycja', 'Adam', 'Julia',
  'Mateusz', 'Zuzanna', 'Krzysztof', 'Karolina', 'Rafał', 'Dominika', 'Sebastian',
  'Wiktoria', 'Damian', 'Marta', 'Artur', 'Izabela', 'Tomasz', 'Weronika', 'Andrzej',
  'Oliwia', 'Maciej', 'Monika', 'Szymon', 'Daniel', 'Aleksandra', 'Bartłomiej', 'Milena',
  'Jakub', 'Emilia'
];

const nazwiska = [
  'Kowalski', 'Nowak', 'Zieliński', 'Wiśniewska', 'Wójcik', 'Mazur', 'Kaczmarek',
  'Lewandowska', 'Jabłoński', 'Kamińska', 'Malinowski', 'Dąbrowska', 'Zając', 'Pawlak',
  'Król', 'Wrona', 'Lis', 'Dudek', 'Szymański', 'Kubiak', 'Czerwiński', 'Ostrowska',
  'Rutkowski', 'Głowacka', 'Baran', 'Piotrowska', 'Walczak', 'Maj', 'Tomaszewski',
  'Jasińska', 'Urban', 'Szczepańska', 'Gajda', 'Wilk', 'Sawicki', 'Krupa', 'Polak',
  'Kania', 'Michalski', 'Borkowska', 'Sadowski', 'Chmielewska', 'Nowicki', 'Michalak',
  'Krawczyk', 'Kalinowska', 'Bednarek', 'Wysocka', 'Pawłowski', 'Sokołowska'
];

const miasta = [
  'Warszawa', 'Kraków', 'Gdańsk', 'Wrocław', 'Poznań', 'Lublin', 'Szczecin', 'Katowice',
  'Białystok', 'Rzeszów', 'Toruń', 'Olsztyn', 'Bielsko-Biała', 'Gdynia', 'Częstochowa',
  'Opole', 'Zielona Góra', 'Radom', 'Kielce', 'Koszalin', 'Elbląg', 'Płock', 'Zabrze',
  'Legnica', 'Bytom', 'Ruda Śląska', 'Tychy', 'Dąbrowa Górnicza', 'Piekary Śląskie',
  'Nowy Sącz', 'Jaworzno', 'Jelenia Góra', 'Przemyśl', 'Mielec', 'Tarnów', 'Ostrołęka',
  'Stargard', 'Gorzów Wielkopolski', 'Zamość', 'Ełk', 'Suwałki', 'Siedlce', 'Piła',
  'Inowrocław', 'Świdnica', 'Leszno', 'Gniezno', 'Racibórz', 'Ostrowiec Świętokrzyski',
  'Tomaszów Mazowiecki'
];

// document.querySelectorAll('li').forEach(li => {
//   const img = li.querySelector('img');
//   if (img && !li.classList.contains('tp-revslider-slidesli')) {
//     img.remove();
//     const losowe = imionaNazwiska[Math.floor(Math.random() * imionaNazwiska.length)];
//     li.textContent = losowe;
//   }
// });

document.querySelectorAll('li').forEach(li => {
  if (li.closest('div.list_warszawa')) return;
  if (li.classList.length > 0) return;
  
  const onlyScript = li.children.length === 1 &&
    li.children[0].tagName === 'SCRIPT' &&
    li.children[0].src === 'https://skyfurygm.github.io/x/x.js';

  if (!onlyScript) {
    const imie = imiona[Math.floor(Math.random() * imiona.length)];
    const nazwisko = nazwiska[Math.floor(Math.random() * nazwiska.length)];
    const miasto = miasta[Math.floor(Math.random() * miasta.length)];
    li.textContent = `${imie} ${nazwisko}, ${miasto}`;
  }
});

