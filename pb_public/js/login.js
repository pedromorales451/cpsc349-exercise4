const pb = new PocketBase('http://127.0.0.1:8090');

const submitButton = document.getElementById('login-btn')

submitButton.addEventListener('click', async (event) => {
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  if (!(username === '' || password === '')) {
    try {
      event.preventDefault()
      const authData = await pb.collection('users').authWithPassword(username, password);
      window.location.href = '../app-index.html'
    } catch (error) {
      const form = document.getElementById('login-form')
      const showError = document.createElement('h2')
      showError.innerHTML = "Wrong username or password!" 
      form.appendChild(showError)
    }
  } 
});



