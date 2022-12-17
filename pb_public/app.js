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
  ))), /* @__PURE__ */ React.createElement("main", { className: "max-w-3xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "mt-6 space-y-2" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold" }, pb.authStore.model.username, "'s Reading List"), /* @__PURE__ */ React.createElement(Bio, null)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-medium" }, "Subject #1"), /* @__PURE__ */ React.createElement("button", { className: "p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700" }, "New Reading")), /* @__PURE__ */ React.createElement("div", { className: "mt-6 w-full space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-900 text-white w-full rounded-md space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("h4", { className: "font-medium" }, "Reading #1"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500" }, "http://some-url.com")), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400" }, "A short description of the reading.")), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-900 text-white w-full rounded-md space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("h4", { className: "font-medium" }, "Reading #2"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500" }, "http://some-other-url.com")), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400" }, "A short description of the reading.")))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-baseline space-y-12 border-b-2 pb-2 mt-8" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-medium" }, "Subject #2"), /* @__PURE__ */ React.createElement("button", { className: "p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700" }, "New Reading")), /* @__PURE__ */ React.createElement("div", { className: "mt-6 w-full space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-900 text-white w-full rounded-md space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("h4", { className: "font-medium" }, "Reading #1"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500" }, "http://some-url.com")), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400" }, "A short description of the reading."))))), /* @__PURE__ */ React.createElement("div", { className: "flex justify-end mt-8" }, /* @__PURE__ */ React.createElement("button", { className: "px-3 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-500" }, "Add A New Subject"))));
}
function Bio() {
  let bio = "";
  console.log(pb.authStore.bio);
  if (pb.authStore.bio === void 0) {
    bio = "This user has not entered a bio yet.";
  } else {
    bio = pb.authStore.bio;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement("p", { id: "bio", className: "text-medium text-gray-500 hover:bg-gray-200" }, bio), /* @__PURE__ */ React.createElement(Form, null)));
}
function Form() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", { htmlFor: "my-modal-4", className: "absolute bottom-0 right-0 p-2 bg-gray-900 text-white rounded-md hover:bg-gray-700" }, "Edit"), /* @__PURE__ */ React.createElement("input", { type: "checkbox", id: "my-modal-4", className: "modal-toggle" }), /* @__PURE__ */ React.createElement("label", { htmlFor: "my-modal-4", className: "modal cursor-pointer" }, /* @__PURE__ */ React.createElement("label", { className: "modal-box relative", htmlFor: "" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold" }, "Congratulations random Internet user!"), /* @__PURE__ */ React.createElement("p", { className: "py-4" }, "You've been selected for a chance to get one year of subscription to use Wikipedia for free!"))));
}
function EditBio() {
  console.log("click");
}
