const pb = new PocketBase('http://127.0.0.1:8090');

const submitButton = document.getElementById('sign-up-submit')

submitButton.addEventListener('click', async (event) => {
  const userVal = document.getElementById('username').value
  const emailVal = document.getElementById('email').value
  const passwordVal = document.getElementById('password').value
  const confirmPass = document.getElementById('confirm-password').value
  
  if (!(userVal.length < 3 || userVal === '' || emailVal === '' || passwordVal === '' || confirmPass === '' || passwordVal !== confirmPass)) {
    const record = await pb.collection('users').create({
      username: userVal,
      email: emailVal, 
      password: passwordVal,
      passwordConfirm: confirmPass
    });
  } else {
    event.preventDefault();
    if (passwordVal !== confirmPass) {
      alert("Passwords Do Not Match.")
    }
  }


});
