/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
const element = document.querySelector('.FreeOrder');
const divchik = document.querySelector('.gavno');
const freeDrugsBanner = document.querySelector('.freeDrugsBanner');
const card = document.querySelector('.card');

console.log(element);

if (element) {
  console.log(true);
  element.addEventListener('click', async (event) => {
    const productsData = divchik.dataset.products; // Получаем данные о товарах из атрибута
    const response = await fetch('/api/wekly', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
    const products = JSON.parse(productsData); // Преобразуем JSON-строку обратно в объект
    if (data) {
      // Обновление данных карточек товаров и баннера вместо удаления и перерендеринга
      freeDrugsBanner.innerHTML = '';
      products.forEach((product) => {
        const freeDrugsBannerElement = document.createElement('div');
        freeDrugsBannerElement.textContent = product.name; // Здесь выведите нужные данные товара
        freeDrugsBanner.appendChild(freeDrugsBannerElement);
      });

      card.innerHTML = '';
      products.forEach((product) => {
        const cardElement = document.createElement('div');
        cardElement.textContent = product.name; // Здесь выведите нужные данные товара
        card.appendChild(cardElement);
      });
      divchik.innerHTML = data; // Вставляем новые данные после существующих карточек товаров
    }
  });
}
