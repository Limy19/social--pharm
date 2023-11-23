const userRega = document.querySelector('.userRega');
console.log(userRega);

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
