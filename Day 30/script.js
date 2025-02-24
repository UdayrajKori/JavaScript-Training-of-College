const todoList = [
  // {
  //   id: 1,
  //   title: "Learning",
  // },
  // {
  //   id: 2,
  //   title: "Learning",
  // },
  // {
  //   id: 3,
  //   title: "Learning",
  // },
  // {
  //   id: 4,
  //   title: "Learning",
  // },
];

let todoContainer = document.querySelector(".todos");

const showTodos = () => {
  for (let i = 0; i < todoList.length; i++) {
    let list = document.createElement("li");
    list.className = "todos-item";

    //todos tags
    let p = document.createElement("p");
    let aside = document.createElement("aside");

    //creating button and adding classes
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "btn-edit";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn-delete";

    //put buttons inside the aside tag
    aside.appendChild(editBtn);
    aside.appendChild(deleteBtn);

    // put the todo text inside the p tag
    p.innerText = todoList[i].title;

    //
    list.appendChild(p);
    list.appendChild(aside);

    todoContainer.appendChild(list);
  }
};

showTodos();

const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function addTodo() {
  const input = document.getElementById("txtbox");
  let typeValue = input.value;

  let list = document.createElement("li");
  list.className = "todos-item";

  //todos tags
  let p = document.createElement("p");
  let aside = document.createElement("aside");

  //creating button and adding classes
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "btn-edit";
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "btn-delete";

  // delete  list item  function
  deleteBtn.addEventListener("click", function () {
    list.remove();
  });

  editBtn.addEventListener("click", function () {
    let newTitle = prompt("Enter new title");
    p.innerText = newTitle;
  });

  //put buttons inside the aside tag
  aside.appendChild(editBtn);
  aside.appendChild(deleteBtn);

  // put the todo text inside the p tag
  p.innerText = typeValue;

  //
  list.appendChild(p);
  list.appendChild(aside);

  todoContainer.appendChild(list);
});
