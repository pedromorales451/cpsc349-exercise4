const pb = new PocketBase('http://127.0.0.1:8090')

if (pb.authStore.isValid) {
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
} else {
  window.location.replace('./login.html')
}

function App () {
return (
  <>
  <nav className="w-full bg-gray-900 py-6 flex justify-between px-8">
    <a className="font-medium text-white" href="/">
      Reading List App
    </a>
    <div className="space-x-6">
      <a
        className="bg-gray-700 p-2 rounded-md font-medium hover:bg-gray-500 text-white"
        href="./login.html"
      >
        Log Out
      </a>
    </div>
  </nav>
  <main className="max-w-3xl mx-auto">
    <div className="mt-6 space-y-2">
      <h1 className="text-3xl font-bold">{pb.authStore.model.username}'s Reading List</h1>
      <Bio />
    </div>
    <div>
      <section>
        <div className="flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8">
          <h3 className="text-xl font-medium">Subject #1</h3>
          <button className="p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
            New Reading
          </button>
        </div>
        <div className="mt-6 w-full space-y-6">
          <div className="p-4 bg-gray-900 text-white w-full rounded-md space-y-2">
            <div className="flex justify-between">
              <h4 className="font-medium">Reading #1</h4>
              <p className="text-gray-500">http://some-url.com</p>
            </div>
            <p className="text-gray-400">A short description of the reading.</p>
          </div>
          <div className="p-4 bg-gray-900 text-white w-full rounded-md space-y-2">
            <div className="flex justify-between">
              <h4 className="font-medium">Reading #2</h4>
              <p className="text-gray-500">http://some-other-url.com</p>
            </div>
            <p className="text-gray-400">A short description of the reading.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8">
          <h3 className="text-xl font-medium">Subject #2</h3>
          <button className="p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
            New Reading
          </button>
        </div>
        <div className="mt-6 w-full space-y-6">
          <div className="p-4 bg-gray-900 text-white w-full rounded-md space-y-2">
            <div className="flex justify-between">
              <h4 className="font-medium">Reading #1</h4>
              <p className="text-gray-500">http://some-url.com</p>
            </div>
            <p className="text-gray-400">A short description of the reading.</p>
          </div>
        </div>
      </section>
    </div>
    <div className="flex justify-end mt-8">
      <button className="px-3 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-500">
        Add A New Subject
      </button>
    </div>
  </main>
  </>
)
}

function Bio () {
  let bio = ''
  pb.collection('users').subscribe(pb.authStore.model.id, function (e) {
    document.getElementById('bio').innerHTML = e.record.bio
  });
  
  if (pb.authStore.model.bio === '') {
    bio = 'This user has not entered a bio yet.'
  } else {
    bio = pb.authStore.model.bio
  }
  return (
    <>
    <div className="relative">
      <p id="bio" className="text-medium text-gray-500 hover:bg-gray-200">
      {bio}
      </p>
      <Form title="Edit Your Bio!" collection="users" content={bio}/>
    </div>
    </>
  )
}

function Form ({ title, collection, content}) {
  return (
  <>
    {/* The button to open modal */}
    <label htmlFor="my-modal-4" className="absolute bottom-0 right-0 p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
    Edit
    </label>
    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
    <label htmlFor="my-modal-4" className="modal cursor-pointer">
      <label className="modal-box relative" htmlFor="">
        <h3 className="text-lg font-bold pb-4">
          {title}
        </h3>
        <textarea id="text-area" className="w-full h-52 bg-blue-100 p-2" defaultValue={content}/>
        <button className="btn bg-gray-900 text-white hover:bg-gray-700" onClick={updateBio}>
          Submit
        </button>
      </label>
    </label>
  </>
  )
}

async function updateBio () {
  const content = document.getElementById('text-area').value

  try { 
    const record = await pb.collection('users').update(pb.authStore.model.id, {
      bio: content
    });
  } catch (error) {
    console.log("Error Occured While Trying to Update Record.")
  }
} 

