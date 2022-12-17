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
  <script defer src="./js/lists.js"></script>
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
    <div id = "pt">
      <ul id = "subjects">
        <li className = "subject">
          <div className="flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8">
            <h3 className="text-xl font-medium">Subject #1</h3>
            <button className="p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
              New Reading
            </button>
          </div>
          <ul className = "readings">
            <li>
              <div className="mt-6 w-full space-y-6">
                <div className="p-4 bg-gray-900 text-white w-full rounded-md space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Reading #1</h4>
                    <p className="text-gray-500">http://some-url.com</p>
                  </div>
                  <p className="text-gray-400">A short description of the reading.</p>
                </div>
              </div>
            </li>

            <li className = "readings">
              <div className="mt-6 w-full space-y-6">
                <div className="p-4 bg-gray-900 text-white w-full rounded-md space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Reading #2</h4>
                    <p className="text-gray-500">http://some-other-url.com</p>
                  </div>
                  <p className="text-gray-400">A short description of the reading.</p>
                </div>
              </div>
            </li>
          </ul>
        </li>

        <li className = "subject">
          <div className="flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8">
            <h3 className="text-xl font-medium">Subject #2</h3>
            <button className="p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
              New Reading
            </button>
          </div>
          <ul>
            <li>
              <div className="mt-6 w-full space-y-6">
                <div className="p-4 bg-gray-900 text-white w-full rounded-md space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Reading #1</h4>
                    <p className="text-gray-500">http://some-url.com</p>
                  </div>
                  <p className="text-gray-400">A short description of the reading.</p>
                </div>
              </div>
            </li>
            <li id = "currentSubli"> </li>
          </ul>
        </li>
        </ul>

      </div>
      <div className="flex justify-end mt-8">
        <button onClick={() => addSubject()} id = "subjectbtn" className="px-3 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-500">
          Add A New Subject
        </button>
      </div>
    </main>

  </>
)
}

function Bio () {
  let bio = ''
  console.log(pb.authStore.bio)
  if (pb.authStore.bio === undefined) {
    bio = 'This user has not entered a bio yet.'
  } else {
    bio = pb.authStore.bio
  }
  return (
    <>
    <div className="relative">
      <p id="bio" className="text-medium text-gray-500 hover:bg-gray-200">
      {bio}
      </p>
      <Form/>
    </div>
    </>
  )
}

function Form () {
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
        <h3 className="text-lg font-bold">
          Congratulations random Internet user!
        </h3>
        <p className="py-4">
          You've been selected for a chance to get one year of subscription to use
          Wikipedia for free!
        </p>
      </label>
    </label>
  </>
  )
}

function EditBio () {
  console.log("click")
}

function addSubject () {
  console.log("click")
  const div = document.createElement('div')
  const div2 = document.createElement('div')
  const div3 = document.createElement('div')
  div.className = 'mt-6 w-full space-y-6 p-4 bg-gray-900 text-white w-full rounded-md space-y-2'
  div2.className = 'flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8'
  div3.className = 'text-xl font-medium'
  const subjectli = document.createElement('li')
  subjectli.className = 'subject'
  //subjectli.setAttribute('className','subject')
  const readingul = document.createElement('ul')
  const readingli = document.createElement('li')
  const h3 = document.createElement('h3')
  h3.className = 'text-xl font-medium'
  const btn = document.createElement('button')

  // var subcount = document.getElementById('pt').getElementsByTagName('li')
  // var container = document.querySelector('ul#subject')
  // var sbcount = container.querySelectorAll('li')
  // console.log(sbcount)
  // console.log(sbcount.length)
  // console.log(subcount.length)

  var elem = document.getElementById('pt').getElementsByClassName('subject').length
  var totalElem = elem + 1
  var s_totalElem = document.createTextNode(totalElem.toString())

  const content = document.createTextNode('Subject ')
  h3.appendChild(content)
  h3.appendChild(s_totalElem)
  const contentbtn = document.createTextNode('New Reading')
  btn.appendChild(contentbtn)
  div2.appendChild(h3)
  div2.appendChild(btn)
  readingli.appendChild(div)
  readingul.appendChild(readingli)
  subjectli.appendChild(div2)
  subjectli.appendChild(readingul)
  const ptDiv = document.getElementById('subjects')
  //console.log(currentSubli)
  ptDiv.appendChild(subjectli)
}
