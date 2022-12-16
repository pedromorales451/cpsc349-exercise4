const USERNAME = 'pedrom2@csu.fullerton.edu'
const PASSWORD = '4!P_031dk1a(31'

const pb = new PocketBase('http://127.0.0.1:8090')

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

console.log("hello there")

console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model.id);

const record1 = await pb.collection('users').getOne(pb.authStore.model.id
);



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
    <App />
  </React.StrictMode>
)

function App () {
  return (
    <div className='App'>
      <h1>Hello, {authData.admin.email}</h1>
    </div>
  )
}

