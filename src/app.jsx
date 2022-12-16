const pb = new PocketBase('http://127.0.0.1:8090')

if (pb.authStore.isValid) {
console.log(pb.authStore.model.email);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
)
} else {
  window.location.replace('./login.html')
}

function App () {
  return (
    <div className='App'>
      <h1>Hello, {authData.admin.email}</h1>
    </div>
  )
}

function Greeting () {
  return (
    <div className="mt-6 space-y-2">
      <h1 className="text-3xl font-bold">{pb.authStore.model.username}'s Reading List</h1>
      <p className="text-medium text-gray-500 hover:bg-gray-200">
        This user has not entered a bio yet.
      </p>
    </div>
  )
}

