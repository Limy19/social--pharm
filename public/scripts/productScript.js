const formAddProduct = document.querySelector('.addProduct');
const productList = document.querySelector('.card');

if (formAddProduct) {
  formAddProduct.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { title, url, price, count, status } = event.target;
    //
    const img = [...url.files];
    const dataFile = new FormData();
    img.forEach((foto) => {
      dataFile.append('homesImg', foto);
    });
    dataFile.append('title', title.value);
    dataFile.append('price', price.value);
    dataFile.append('count', count.value);
    dataFile.append('status', status.value);

    //
    const response = await fetch('/api/', {
      method: 'POST',
      // headers: {
      //   'Content-type': 'application/json',
      // },
      // body: JSON.stringify({
      //   title: title.value,
      //   url: url.value,
      //   price: price.value,
      //   count: count.value,
      //   status: status.value,
      // }),
      body: dataFile,
    });
    const data = await response.json();
    if (data.html) {
      productList.insertAdjacentHTML('beforeend', data.html);
    } else {
      formAddProduct.style.cssText = 'border: 1px solid red';
    }
  });
}
