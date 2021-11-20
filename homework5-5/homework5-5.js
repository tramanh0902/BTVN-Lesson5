var currentId = 5;

function addItem() {
    const addingItem = document.getElementsByName("adding-item")[0];

    const currentItem = document.getElementById("sidebar");

    currentId += 1;

    const newItem = document.createElement("a");
    const newCurrentId = currentId;
    newItem.href = "#";
    newItem.ondblclick = () => deleteItem(newCurrentId);
    newItem.id = newCurrentId;
    newItem.classList = "list-group-item list-group-item-action";
    newItem.innerText = addingItem.value;

    currentItem.appendChild(newItem);
    addingItem.value = "";
}

function deleteItem(id) {
    console.log(id);
    const sidebar = document.getElementById("sidebar");
    const currentItem = document.getElementById(id);
    if (currentItem) {
        sidebar.removeChild(currentItem);
    }
}