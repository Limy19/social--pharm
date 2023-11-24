/* eslint-disable object-curly-newline */
const formAddProduct = document.querySelector('.addProduct');
const productList = document.querySelector('.card');
const editProduct = document.querySelector('.editProduct');

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
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title.value,
        url: url.value,
        price: price.value,
        count: count.value,
        status: status.value,
      }),
      // body: dataFile,
    });
    const data = await response.json();
    if (data.html) {
      productList.insertAdjacentHTML('beforeend', data.html);
    } else {
      formAddProduct.style.cssText = 'border: 1px solid red';
    }
  });
}

if (editProduct) {
  editProduct.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { id } = event.target.dataset;
    const { title, url, price, count, status } = event.target;
    const request = await fetch(`/api/product/${id}/update`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title.value,
        url: url.value,
        price: price.value,
        count: count.value,
        status: status.value,
      }),
    });
    const date = await request.json();
    if (date.update) {
      window.location.assign('/');
    } else {
      document.querySelector('.errorEditProduct').innerHTML = date.message;
    }
  });
}
if (productList) {
  productList.addEventListener('click', async (event) => {
    const card = event.target.closest('.cardItem');
    if (event.target.classList.contains('delProduct')) {
      const res = await fetch(`/api/product/${card.dataset.id}/delete`, {
        method: 'DELETE',
      });
      const date = await res.json();
      if (date.delete) {
        card.remove();
      } else {
        document.querySelector('.errorDelProduct').innerHTML = date.message;
      }
    }
    // console.log(card);
    else if (event.target.classList.contains('buyProduct')) {
      // console.log(card.dataset.id);
      // const card = event.target.closest('.cardItem');
      const res = await fetch('/api/basket/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ id: card.dataset.id }),
      });
    }
  });
}
