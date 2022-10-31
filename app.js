// querySelectors
const inputEl = document.querySelector("#input-el");
const ulEl = document.getElementById("ul-el");
const btn1 = document.querySelector("#input-btn");
const btn2 = document.querySelector("#delete-btn");
const btn3 = document.querySelector("#save-btn");
//creating array
let myLeads = [];

// getting from local storage
const leads = JSON.parse(localStorage.getItem("myLeads"));
if (leads) {
  myLeads = leads;
  render(myLeads);
}
//render in ul

function render(l) {
  let listItems = "";
  for (let i = 0; i < l.length; i++) {
    listItems += `<li><a target='_blank' href='${l[i]} '>${l[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}

//eventListners
btn1.addEventListener("click", function () {
  //save button
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
});

btn2.addEventListener("click", function () {
  //delete button
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

btn3.addEventListener("click", function () {
  //save tab button

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", myLeads);
    render(myLeads);
  });
});

//render in ul another way

// for (let i = 0; i < myLeads.length; i++) {
//   const li = document.createElement("li");

//   li.textContent = myLeads[i];
//   ulEl.append(li);
// }
