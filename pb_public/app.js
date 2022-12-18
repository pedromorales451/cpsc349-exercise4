const pb = new PocketBase("http://127.0.0.1:8090");
function logout() {
  pb.authStore.clear();
}
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
      onClick: logout,
      href: "./login.html"
    },
    "Log Out"
  ))), /* @__PURE__ */ React.createElement("main", { className: "max-w-3xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "mt-6 space-y-2" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold" }, pb.authStore.model.username, "'s Reading List"), /* @__PURE__ */ React.createElement(Bio, null)), /* @__PURE__ */ React.createElement("div", { id: "pt" }, /* @__PURE__ */ React.createElement("ul", { id: "subjects" }, /* @__PURE__ */ React.createElement(Subject, null), /* @__PURE__ */ React.createElement("li", { className: "subject" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-medium" }, "Subject #2"), /* @__PURE__ */ React.createElement("button", { className: "p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700" }, "New Reading")), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", { className: "mt-6 w-full space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-900 text-white w-full rounded-md space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("h4", { className: "font-medium" }, "Reading #1"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500" }, "http://some-url.com")), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400" }, "A short description of the reading.")))), /* @__PURE__ */ React.createElement("li", { id: "currentSubli" }, " "))))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end mt-8" }, /* @__PURE__ */ React.createElement("button", { onClick: () => addSubject(), id: "subjectbtn", className: "px-3 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-500" }, "Add A New Subject"))));
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
  for (let record in records) {
    if (records[record]["user"] == pb.authStore.model.id) {
      subjects.push({ id: records[record]["id"], item: records[record]["subject"] });
    }
  }
  if (subjects.length === 0) {
    subjects.push({ id: "0", item: "My Subject" });
  }
  const name = subjects.map(
    (subject) => /* @__PURE__ */ React.createElement("li", { className: "subject" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-medium" }, subject.item)), /* @__PURE__ */ React.createElement(AddReading, { arr: [subject.id, subject.item] }))
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, name);
}
function AddReading({ arr }) {
  const [reading, setReadings] = React.useState([]);
  const addReading2 = (event) => {
    setReadings([
      ...reading,
      /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", { className: "mt-6 w-full space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-900 text-white w-full rounded-md space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("h4", { className: "font-medium" }, "Reading"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500" }, "http://some-url.com")), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400" }, "A short description of the reading."))))
    ]);
    async function addRecord() {
      if (arr[0] == 0) {
        try {
          const record = await pb.collection("subjects").create({
            subject: arr[1],
            user: pb.authStore.model.id
          });
        } catch (error) {
          console.log("Failed to create subject");
        }
      }
      try {
        const record = await pb.collection("readings").create({
          subject: arr[0],
          description: "A short description of the reading."
        });
      } catch (error) {
        console.log("could not create reading");
      }
    }
    addRecord();
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", { className: "p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700", onClick: addReading2 }, "New Reading"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", null, reading)));
}
function addSubject(name) {
  if (name !== "") {
    console.log("name");
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    div.className = "mt-6 w-full space-y-6 p-4 bg-gray-900 text-white  rounded-md space-y-2";
    div2.className = "flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8";
    div3.className = "text-xl font-medium";
    const subjectli = document.createElement("li");
    subjectli.className = "subject";
    const readingul = document.createElement("ul");
    const h3 = document.createElement("h3");
    h3.className = "text-xl font-medium";
    const btn = document.createElement("button");
    btn.className = "p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700";
    var elem = document.getElementById("pt").getElementsByClassName("subject");
    var totalElem;
    if (elem) {
      totalElem = elem.length + 1;
    } else {
      totalElem = 1;
    }
    var s_totalElem = document.createTextNode(totalElem.toString());
    readingul.setAttribute("id", "readingID" + totalElem.toString());
    btn.setAttribute("id", totalElem.toString());
    btn.onclick = function() {
      readingDetails(this.id);
    };
    const content = document.createTextNode(name);
    h3.appendChild(content);
    const contentbtn = document.createTextNode("New Reading");
    btn.appendChild(contentbtn);
    div2.appendChild(h3);
    div2.appendChild(btn);
    subjectli.appendChild(div2);
    subjectli.appendChild(readingul);
    const ptDiv = document.getElementById("subjects");
    ptDiv.appendChild(subjectli);
    const form = document.getElementById("abc123");
    form.remove();
  }
}
function addReading(name, link, descr, btn_id) {
  console.log(btn_id);
  const ulrID = "readingID" + btn_id.toString();
  console.log(ulrID);
  const target_ul = document.getElementById(ulrID);
  console.log(target_ul);
  const reading_li = document.createElement("li");
  const div1 = document.createElement("div");
  div1.className = "mt-6 w-full space-y-6";
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  div3.className = "flex justify-between";
  div2.className = "p-4 bg-gray-900 text-white w-full rounded-md space-y-2";
  const h4 = document.createElement("h4");
  h4.className = "font-medium";
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.className = "text-gray-500";
  p2.className = "text-gray-500";
  var content = document.createTextNode(name);
  h4.appendChild(content);
  content = document.createTextNode(link);
  p1.appendChild(content);
  content = document.createTextNode(descr);
  p2.appendChild(content);
  div3.appendChild(h4);
  div3.appendChild(p1);
  div2.appendChild(div3);
  div2.appendChild(p2);
  div1.appendChild(div2);
  reading_li.appendChild(div1);
  target_ul.appendChild(reading_li);
  const form = document.getElementById("lmnop");
  form.remove();
}
function subDetails() {
  const check = document.getElementById("abc123");
  if (!check) {
    const form = document.createElement("form");
    form.id = "abc123";
    form.setAttribute("onsubmit", "return false");
    const sNameLabel = document.createElement("label");
    const sNameInput = document.createElement("input");
    sNameInput.className = "mx-8 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500";
    sNameInput.type = "text";
    sNameInput.id = "sName";
    sNameInput.name = "sName";
    sNameInput.required = true;
    const submit = document.createElement("input");
    submit.className = "px-3 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-500";
    submit.type = "submit";
    submit.value = "Submit";
    submit.onclick = function() {
      addSubject(sNameInput.value);
    };
    form.appendChild(sNameLabel);
    form.appendChild(sNameInput);
    form.appendChild(submit);
    const target_tag = document.getElementById("subjectdetbtn");
    target_tag.appendChild(form);
  } else {
    alert("Please Enter Subject Name and click Submit");
  }
}
function readingDetails(btn_id) {
  const check = document.getElementById("lmnop");
  if (!check) {
    const ulrID = "readingID" + btn_id.toString();
    const target_ul = document.getElementById(ulrID);
    const br = document.createElement("br");
    const form = document.createElement("form");
    form.id = "lmnop";
    form.setAttribute("onsubmit", "return false");
    const rNameLabel = document.createElement("label");
    rNameLabel.for = "rName";
    var content = document.createTextNode("Reading Title: ");
    rNameLabel.appendChild(content);
    const rNameInput = document.createElement("input");
    rNameInput.className = "mx-8 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500";
    rNameInput.type = "text";
    rNameInput.id = "rName";
    rNameInput.name = "rName";
    rNameInput.required = true;
    const rLinkLabel = document.createElement("label");
    rLinkLabel.for = "rLink";
    content = document.createTextNode("Link: ");
    rLinkLabel.appendChild(content);
    const rLinkInput = document.createElement("input");
    rLinkInput.className = "mx-8 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500";
    rLinkInput.type = "text";
    rLinkInput.id = "rLink";
    rLinkInput.name = "rLink";
    rLinkInput.required = true;
    const rDescriptionLabel = document.createElement("label");
    rDescriptionLabel.for = "rDescr";
    content = document.createTextNode("Short Description:");
    rDescriptionLabel.appendChild(content);
    const rDescriptionInput = document.createElement("input");
    rDescriptionInput.className = "mx-8 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500";
    rDescriptionInput.type = "text";
    rDescriptionInput.id = "rDescr";
    rDescriptionInput.name = "rDescr";
    rDescriptionInput.required = true;
    const submit = document.createElement("input");
    submit.className = "px-3 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-500";
    submit.type = "submit";
    submit.value = "Submit";
    submit.onclick = function() {
      addReading(rNameInput.value, rLinkInput.value, rDescriptionInput.value, btn_id);
    };
    form.appendChild(rNameLabel);
    form.appendChild(rNameInput);
    form.append(br);
    form.appendChild(rLinkLabel);
    form.appendChild(rLinkInput);
    form.append(br);
    form.appendChild(rDescriptionLabel);
    form.appendChild(rDescriptionInput);
    form.append(br);
    form.appendChild(submit);
    target_ul.appendChild(form);
  } else {
    alert("Please Enter Reading Details and click Submit");
  }
}
