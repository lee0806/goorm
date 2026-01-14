const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");

let todo = [];


createBtn.addEventListener('click', createNewTodo);










function createNewTodo() {
    const item = {
        id: new Date().getTime(),
        text: "",
        complete: false
    }

    todo.unshift(item);

    const { itemEl, inputEl } = createTodoElement(item);

    list.prepend(itemEl);
    inputEl.removeAttribute("disabled");
    inputEl.focus();
}

function createTodoElement(item) {
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.complete;

    saveToLocalStorage();

    if (item.complete) {
        itemEl.classList.add("complete");
    }

    const inputEl = document.createElement("div");
    inputEl.type = "text";
    inputEl.value = item.text;
    inputEl.setAttribute("disabled", "");

    const actionsEl = document.createElement("div");
    actionsEl.classList.add("actions");

    const editBtnEl = document.createElement("button");
    editBtnEl.classList.add("meterial-icons");
    editBtnEl.innerText = "edit";

    const removeBtnEl = document.createElement("button");
    removeBtnEl.classList.add("material-icons", "remove-btn");
    removeBtnEl.innerText = "remove_circle";

    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);

    itemEl.append(checkbox);
    itemEl.append(inputEl);
    itemEl.append(actionsEl);

    checkbox.addEventListener("change", () => {
        item.complete = checkbox.checked;

        if (item.complete) {
            itemEl.classList.add("complete");
        } else {
            itemEl.classList.remove("complete");
        }
        saveToLocalStorage();
    });

    inputEl.addEventListener("input", () => {
        item.text = inputEl.value;
    });

    inputEl.addEventListener("blur", () => {
        inputEl.setAttribute("disabled", "");
        saveToLocalStorage();
    })

    editBtnEl.addEventListener("click", () => {
        inputEl.removeAttribute("disabled");
        inputEl.focus();
    });

    removeBtnEl.addEventListener("click", () => {
        todo = todo.filter(t => t.id != item.id);
        saveToLocalStorage();
        itemEl.remove();
    })
    
    return {
        itemEl, inputEl, editBtnEl, removeBtnEl
    }
}

function saveToLocalStorage() {
    const data = JSON.stringify(todo);
    localStorage.setItem("my_todos", data);
}