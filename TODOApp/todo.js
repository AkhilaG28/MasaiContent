document.querySelector("form").addEventListener("submit", myTodo);

function myTodo() {
  event.preventDefault();
  var task = document.getElementById("task").value;
  var priority = document.getElementById("priority").value;

  console.log(task, priority);

  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerText = task;

  var td2 = document.createElement("td");
  td2.innerText = priority;
  if (priority == "High") {
    td2.setAttribute("id", "high");
  } else {
    td2.setAttribute("class", "low");
  }

  var td3 = document.createElement("td");
  var a = document.createElement("a");
  a.innerText = "Google";
  a.setAttribute("href", "https://google.com");
  a.setAttribute("target", "_blank");
  td3.append(a);
  td3.addEventListener("click", deleteTodo);

  tr.append(td1, td2, td3);

  document.querySelector("tbody").append(tr);
}

function deleteTodo() {
  console.log(event.target.parentNode);
  event.target.parentNode.remove();
}

//element.setAttribute(attributeName,attributeValue)
