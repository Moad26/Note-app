const addbutton = document.getElementById("add");
var n = 2;

function addnote(divId) {
  var button = document.createElement("button");
  var textarea = document.createElement("textarea");
  button.id = "note " + n;
  textarea.placeholder = "empty";
  button.style = "order: " + n + ";";
  n++;
  addbutton.style = "order: " + n + ";";
  button.appendChild(textarea);
  document.getElementById(divId).appendChild(button);

  button.addEventListener("dblclick", () => {
    deletenote(button.id);
  });
}
function deletenote(id) {
  if (confirm("do u wanna delete") == true) {
    let note = document.getElementById(id);
    note.remove();
  }
}

addbutton.addEventListener("click", () => addnote("notes"));
for (let i = 1; i < n; i++) {
  let note = document.getElementById("note " + i);
  note.addEventListener("dblclick", () => {
    deletenote("note " + i);
  });
}
