// выводит окошко на экран
// alert('222');

// Только раскрытие текста
// document.querySelector('.info__link').addEventListener('click', function () {
//     this.remove()
//     document.querySelector('.info__text').classList.add('info__text--active');
// })

let buttonText;
let buttonText2 = "Скрыть текст";

// Раскрытие-сворачивание
// document.querySelector('.info__link').addEventListener('click', function () {
//     document.querySelector('.info__text').classList.toggle('info__text--active');
//     if (this.textContent == 'Показать полностью') {
//         this.textContent = "Скрыть текст";
//     } else {
//         this.textContent = "Показать полностью";
//     }
// })

document.querySelector(".info__link").addEventListener("click", function () {
  document.querySelector(".info__text").classList.toggle("info__text--active");
  buttonText = this.textContent;
  this.textContent = buttonText2;
  buttonText2 = buttonText;
});

// ждем полной загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
  const popupFilter = document.querySelector(".popup-filter");

  if (popupFilter) {
    const buttonPopup = document.querySelector(".catalog__filter");
    if (buttonPopup) {
      buttonPopup.addEventListener("click", function () {
        document.body.classList.add("no-scroll");
        popupFilter.classList.add("popup-filter--show");
        setTimeout(function () {
          popupFilter.classList.add("popup-filter--active");
        }, 10);
      });
    }

    const buttonPopupClose = document.querySelector(".popup-filter__close");
    if (buttonPopupClose) {
      buttonPopupClose.addEventListener("click", function () {
        popupFilter.classList.remove("popup-filter--active");
        setTimeout(function () {
          popupFilter.classList.remove("popup-filter--show");
          document.body.classList.remove("no-scroll");
        }, 300);
      });
    }
  }

  let titles = ["Общее", "Сыр", "Мясо", "Компонент"];

  let buttons = [
    [
      "Супер хит",
      "Новинка",
      "С мясом",
      "Вегетарианская",
      "С курицей",
      "Без лука",
      "С грибами",
      "С морепродуктами",
      "Барбекью",
    ],
    [
      "Реджанито",
      "Моцарелла",
      "Чеддер",
      "С голубой плесенью",
      "Смесь итальянских сыров",
      "Мягкий молодой сыр лука",
    ],
    [
      "Пепперони",
      "Свинина",
      "Ветчина",
      "Бекон",
      "Говядина",
      "Чоризо",
      "Колбаски",
      "Куриная грудка",
    ],
    [
      "Креветка",
      "Ананасы",
      "Шампиньоны",
      "Лук",
      "Перец халапеньо",
      "Орегано",
      "Зеленый перец",
      "Томаты",
      "Чеснок",
      "Красный перец",
      "Оливки",
      "Маслины",
      "Клубника",
      "Смесь итальянских трав",
    ],
  ];

  const groups = document.querySelector(".popup-filter__groups");
  if (groups) {
    let groupHtml = "";
    for (let i = 0; i < titles.length; i++) {
      let buttonsHtml = "";
      for (let j = 0; j < buttons[i].length; j++) {
        buttonsHtml = buttonsHtml + `<button>${buttons[i][j]}</button>`;
      }
      groupHtml =
        groupHtml +
        `<div class="popup-filter__group">
                        <h4>${titles[i]}</h4>
                        <div class="popup-filter__checkbox">
                            ${buttonsHtml}
                        </div>
                    </div>`;
    }
    groups.innerHTML = groupHtml;
  }

  // const here = document.querySelector(".here");
  // if (here) {
  //   let hereHtml = "";
  //   for (let i = 0; i < 11; i++) {
  //     hereHtml =
  //       hereHtml + `<li><a href="#" class="pagination__button">${i}</a></li>`;
  //   }
  //   here.outerHTML = hereHtml;
  // }

  const here = document.querySelector(".here");
  let list = 1000;
  if (here) {
    let hereHtml = "";
    for (let i = 1; i <= list; i++) {
      if (i <= 3) {
        hereHtml =
          hereHtml + `<li><a href="#" class="pagination__button">${i}</a></li>`;
      }
      if (i == 4) {
        hereHtml = hereHtml + `<li><span>...</span></li>`;
      }
      if (i > list - 3) {
        hereHtml =
          hereHtml + `<li><a href="#" class="pagination__button">${i}</a></li>`;
      }
    }
    here.outerHTML = hereHtml;
  }
  let categories = [
    {
      icon: "icon-sale",
      title: "Акции",
      isActive: true,
    },
    {
      icon: "icon-pizza",
      title: "Пицца",
      isActive: false,
    },
    {
      icon: "icon-sushi",
      title: "Суши",
      isActive: false,
    },
    {
      icon: "icon-juice",
      title: "Напитки",
      isActive: false,
    },
    {
      icon: "icon-snakes",
      title: "Закуски",
      isActive: false,
    },
    {
      icon: "icon-combo",
      title: "Комбо",
      isActive: false,
    },
    {
      icon: "icon-desert",
      title: "Десерты",
      isActive: false,
    },
    {
      icon: "icon-souce",
      title: "Соусы",
      isActive: false,
    },
  ];

  let categoriesList = document.querySelector('.categories__list');
  if (categoriesList) {
    let categoriesHtml = '';
    categories.forEach(function (category) {
      categoriesHtml =
        categoriesHtml +
        `<li>
              <a href="#" class="${category.isActive ? "active" : ""}">
                <svg width="24" height="24">
                  <use xlink:href="images/icons/sprite.svg#${category.icon}" />
                </svg>
                ${category.title}
              </a>
            </li>`;
    });
    categoriesList.innerHTML = categoriesHtml;
  }
});

// let m = [5, 4, 5, 2];
// console.log(m[0])
// m[1] = 7
// console.log(m);
// m[10] = 9
// console.log(m[10])
// m.push(588)
// m.length
