const userRega = document.querySelector('.userRega');
const userLogo = document.querySelector('.userLogo');

if (userRega) {
  userRega.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name, email, password } = event.target;
    const res = await fetch('/api/auth/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.registration) {
      window.location.assign(data.url);
    } else {
      document.querySelector('.errRega').innerHTML = data.message;
    }
  });
}

if (userLogo) {
  userLogo.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    const res = await fetch('/api/auth/logo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const data = await res.json();

    if (data.logo) {
      window.location.assign(data.url);
    } else {
      document.querySelector('.errLogo').innerHTML = data.message;
    }
  });
}
