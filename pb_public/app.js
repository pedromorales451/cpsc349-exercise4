const pb = new PocketBase("http://127.0.0.1:8090");
if (pb.authStore.isValid) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    /* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null))
  );
} else {
  window.location.replace("./login.html");
}
function App() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", { className: "w-full bg-gray-900 py-6 flex justify-between px-8" }, /* @__PURE__ */ React.createElement("a", { className: "font-medium text-white", href: "/" }, "Reading List App"), /* @__PURE__ */ React.createElement("div", { className: "space-x-6" }, /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "bg-gray-700 p-2 rounded-md font-medium hover:bg-gray-500 text-white",
      href: "./login.html"
    },
    "Log Out"
  ))), /* @__PURE__ */ React.createElement("main", { className: "max-w-3xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "mt-6 space-y-2" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold" }, pb.authStore.model.username, "'s Reading List"), /* @__PURE__ */ React.createElement(Bio, null)), /* @__PURE__ */ React.createElement("div", { id: "pt" }, /* @__PURE__ */ React.createElement("ul", { id: "subjects" }, /* @__PURE__ */ React.createElement(Subject, null), /* @__PURE__ */ React.createElement("li", { className: "subject" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-medium" }, "Subject #1"), /* @__PURE__ */ React.createElement("button", { className: "p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700" }, "New Reading")), /* @__PURE__ */ React.createElement("ul", { className: "readings" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", { className: "mt-6 w-full space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-900 text-white w-full rounded-md space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("h4", { className: "font-medium" }, "Reading #1"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500" }, "http://some-url.com")), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400" }, "A short description of the reading.")))), /* @__PURE__ */ React.createElement("li", { className: "readings" }, /* @__PURE__ */ React.createElement("div", { className: "mt-6 w-full space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-900 text-white w-full rounded-md space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("h4", { className: "font-medium" }, "Reading #2"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500" }, "http://some-other-url.com")), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400" }, "A short description of the reading.")))))), /* @__PURE__ */ React.createElement("li", { className: "subject" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-medium" }, "Subject #2"), /* @__PURE__ */ React.createElement("button", { className: "p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700" }, "New Reading")), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", { className: "mt-6 w-full space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-900 text-white w-full rounded-md space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("h4", { className: "font-medium" }, "Reading #1"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500" }, "http://some-url.com")), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400" }, "A short description of the reading.")))), /* @__PURE__ */ React.createElement("li", { id: "currentSubli" }, " "))))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end mt-8" }, /* @__PURE__ */ React.createElement("button", { onClick: () => addSubject(), id: "subjectbtn", className: "px-3 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-500" }, "Add A New Subject"))));
}
function Bio() {
  let bio = "";
  pb.collection("users").subscribe(pb.authStore.model.id, function(e) {
    document.getElementById("bio").innerHTML = e.record.bio;
  });
  if (pb.authStore.model.bio === "") {
    bio = "This user has not entered a bio yet.";
  } else {
    bio = pb.authStore.model.bio;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-evenly" }, /* @__PURE__ */ React.createElement("p", { id: "bio", className: "text-medium text-gray-500 hover:bg-gray-200 w-full" }, bio), /* @__PURE__ */ React.createElement(BioForm, { title: "Edit Your Bio!", collection: "users", content: bio })));
}
function BioForm({ title, collection, content }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", { htmlFor: "my-modal-4", className: "p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700" }, "Edit"), /* @__PURE__ */ React.createElement("input", { type: "checkbox", id: "my-modal-4", className: "modal-toggle" }), /* @__PURE__ */ React.createElement("label", { htmlFor: "my-modal-4", className: "modal cursor-pointer" }, /* @__PURE__ */ React.createElement("label", { className: "modal-box relative", htmlFor: "" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold pb-4" }, title), /* @__PURE__ */ React.createElement("textarea", { id: "text-area", className: "w-full h-52 bg-blue-100 p-2", defaultValue: content }), /* @__PURE__ */ React.createElement("button", { className: "btn bg-gray-900 text-white hover:bg-gray-700", onClick: updateBio }, "Submit"))));
}
async function updateBio() {
  const content = document.getElementById("text-area").value;
  try {
    const record = await pb.collection("users").update(pb.authStore.model.id, {
      bio: content
    });
  } catch (error) {
    console.log("Error Occured While Trying to Update Record.");
  }
}
function Subject() {
  const [records, setRecords] = React.useState(0);
  React.useEffect(() => {
    async function get() {
      try {
        const records2 = await pb.collection("subjects").getFullList();
        setRecords(records2);
      } catch (error) {
        console.log("Failed To Retreive Subjects");
      }
    }
    get();
  }, []);
  const subjects = [];
  if (records.length === 0) {
    subjects.push({ id: 0, item: "My Subject" });
  }
  for (let record in records) {
    subjects.push({ id: record, item: records[record]["subject"] });
  }
  const name = subjects.map(
    (subject) => /* @__PURE__ */ React.createElement("li", { className: "subject" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-medium" }, subject.item), /* @__PURE__ */ React.createElement("button", { className: "p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700" }, "New Reading")))
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, name);
}
function addSubject() {
  console.log("click");
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  div.className = "mt-6 w-full space-y-6 p-4 bg-gray-900 text-white w-full rounded-md space-y-2";
  div2.className = "flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8";
  div3.className = "text-xl font-medium";
  const subjectli = document.createElement("li");
  subjectli.className = "subject";
  const readingul = document.createElement("ul");
  const readingli = document.createElement("li");
  const h3 = document.createElement("h3");
  h3.className = "text-xl font-medium";
  const btn = document.createElement("button");
  var elem = document.getElementById("pt").getElementsByClassName("subject").length;
  var totalElem = elem + 1;
  var s_totalElem = document.createTextNode(totalElem.toString());
  const content = document.createTextNode("Subject ");
  h3.appendChild(content);
  h3.appendChild(s_totalElem);
  const contentbtn = document.createTextNode("New Reading");
  btn.appendChild(contentbtn);
  div2.appendChild(h3);
  div2.appendChild(btn);
  readingli.appendChild(div);
  readingul.appendChild(readingli);
  subjectli.appendChild(div2);
  subjectli.appendChild(readingul);
  const ptDiv = document.getElementById("subjects");
  ptDiv.appendChild(subjectli);
}
