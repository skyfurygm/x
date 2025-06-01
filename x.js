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
  'Adam', 'Adrian', 'Albert', 'Aleksander', 'Andrzej', 'Antoni', 'Artur',
  'Bartłomiej', 'Bartosz', 'Błażej', 'Bogdan', 'Bogusław', 'Borys', 'Brunon',
  'Cezary', 'Cyprian', 'Czesław', 'Damian', 'Daniel', 'Dariusz', 'Dawid',
  'Dominik', 'Emil', 'Ernest', 'Eryk', 'Fabian', 'Feliks', 'Filip', 'Franciszek',
  'Fryderyk', 'Grzegorz', 'Gustaw', 'Hubert', 'Ignacy', 'Igor', 'Ireneusz',
  'Jacek', 'Jakub', 'Jan', 'Janusz', 'Jarosław', 'Jerzy', 'Józef', 'Julian',
  'Kacper', 'Kajetan', 'Karol', 'Kazimierz', 'Klaudiusz', 'Konrad', 'Kornel',
  'Krzysztof', 'Lech', 'Leon', 'Leszek', 'Lucjan', 'Ludwik', 'Łukasz',
  'Maciej', 'Maksymilian', 'Marcel', 'Marek', 'Marian', 'Mariusz', 'Mateusz',
  'Michał', 'Miłosz', 'Norbert', 'Oktawian', 'Olgierd', 'Oskar', 'Paweł',
  'Patryk', 'Piotr', 'Przemysław', 'Radosław', 'Rafał', 'Remigiusz',
  'Robert', 'Roman', 'Ryszard', 'Sebastian', 'Seweryn', 'Sławomir',
  'Stanisław', 'Stefan', 'Sylwester', 'Szymon', 'Tadeusz', 'Tomasz',
  'Waldemar', 'Wiktor', 'Witold', 'Władysław', 'Włodzimierz', 'Wojciech',
  'Zbigniew', 'Zdzisław', 'Zenon'
];

const nazwiska = [
  'Kowalski', 'Nowak', 'Wiśniewski', 'Wójcik', 'Kowalczyk', 'Kamiński',
  'Lewandowski', 'Zieliński', 'Szymański', 'Woźniak', 'Dąbrowski',
  'Kozłowski', 'Jankowski', 'Mazur', 'Wojciechowski', 'Kwiatkowski',
  'Krawczyk', 'Kaczmarek', 'Piotrowski', 'Grabowski', 'Zając', 'Pawlak',
  'Michalski', 'Król', 'Wieczorek', 'Jabłoński', 'Wróbel', 'Nowicki',
  'Majewski', 'Olszewski', 'Stępień', 'Jaworski', 'Malinowski',
  'Adamczyk', 'Dudek', 'Górski', 'Pawłowski', 'Witkowski', 'Walczak',
  'Sikora', 'Baran', 'Rutkowski', 'Szulc', 'Szczepański', 'Wesołowski',
  'Urban', 'Lis', 'Wilk', 'Borkowski', 'Sawicki', 'Bąk', 'Chmielewski',
  'Błaszczyk', 'Głowacki', 'Zawadzki', 'Kubiak', 'Włodarczyk',
  'Kujawa', 'Tomczak', 'Sadowski', 'Michalak', 'Makowski', 'Kosiński',
  'Marciniak', 'Kaczmarczyk', 'Tomaszewski', 'Piasecki', 'Czerwiński',
  'Andrzejewski', 'Przybylski', 'Orłowski', 'Strzelczyk', 'Sławiński',
  'Cieślak', 'Rogowski', 'Kasprzak', 'Bogusz', 'Kołodziej', 'Kopczyński',
  'Piekarski', 'Czarnecki', 'Szewczyk', 'Konieczny', 'Ziółkowski',
  'Gajda', 'Krysztof', 'Gajos', 'Barczak', 'Sienkiewicz', 'Barański',
  'Kowal', 'Kaleta', 'Domagała', 'Zaremba', 'Augustyniak', 'Szpak',
  'Krawiec', 'Siwek', 'Skiba', 'Bieńkowski', 'Brodowski'
];

const miasta = [
  'Warszawa', 'Kraków', 'Łódź', 'Wrocław', 'Poznań', 'Gdańsk', 'Szczecin', 'Bydgoszcz', 'Lublin', 'Białystok',
  'Katowice', 'Gdynia', 'Częstochowa', 'Radom', 'Toruń', 'Sosnowiec', 'Kielce', 'Gliwice', 'Zabrze', 'Olsztyn',
  'Bielsko-Biała', 'Rzeszów', 'Ruda Śląska', 'Rybnik', 'Tychy', 'Dąbrowa Górnicza', 'Opole', 'Elbląg', 'Płock',
  'Wałbrzych', 'Włocławek', 'Tarnów', 'Chorzów', 'Koszalin', 'Kalisz', 'Legnica', 'Grudziądz', 'Jaworzno',
  'Słupsk', 'Nowy Sącz', 'Jelenia Góra', 'Konin', 'Piotrków Trybunalski', 'Inowrocław', 'Lubin', 'Ostrołęka',
  'Gniezno', 'Suwałki', 'Głogów', 'Zamość', 'Leszno', 'Stargard', 'Mielec', 'Tomaszów Mazowiecki', 'Chełm',
  'Przemyśl', 'Pabianice', 'Świdnica', 'Siemianowice Śląskie', 'Otwock', 'Zgierz', 'Starachowice', 'Olkusz',
  'Wejherowo', 'Ełk', 'Skarżysko-Kamienna', 'Knurów', 'Żory', 'Nowa Sól', 'Zawiercie', 'Puławy', 'Świętochłowice',
  'Śrem', 'Kołobrzeg', 'Łomża', 'Kutno', 'Ostrów Wielkopolski', 'Tczew', 'Zduńska Wola', 'Siedlce', 'Chojnice',
  'Krosno', 'Kwidzyn', 'Łowicz', 'Jarosław', 'Będzin', 'Malbork', 'Mińsk Mazowiecki', 'Sanok', 'Żyrardów',
  'Ostróda', 'Świnoujście', 'Sopot', 'Nowy Dwór Mazowiecki', 'Kępno', 'Kościan', 'Hrubieszów', 'Środa Wielkopolska',
  'Bochnia', 'Płońsk', 'Marki', 'Brzeg', 'Dębica', 'Cieszyn', 'Police', 'Nysa', 'Lębork', 'Trzebnica', 'Łańcut',
  'Kłodzko', 'Lubartów', 'Myszków', 'Wieliczka', 'Ustroń', 'Ząbki', 'Reda', 'Żywiec', 'Bielawa', 'Wągrowiec',
  'Piaseczno', 'Strzelce Opolskie', 'Sandomierz', 'Lubań', 'Mikołów', 'Świdnik', 'Biała Podlaska', 'Łuków',
  'Oleśnica', 'Ciechanów', 'Września', 'Bogatynia', 'Augustów', 'Gostynin', 'Andrychów', 'Skierniewice', 'Zielonka',
  'Pruszków', 'Wodzisław Śląski', 'Piekary Śląskie', 'Łęczna', 'Jarocin', 'Myszków', 'Zgorzelec', 'Żagań'
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

