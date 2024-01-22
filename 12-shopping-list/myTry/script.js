class shoppingList {
  constructor(shopigListItem, newItem, btnAdd, storageKey = "aminMW") {
    this.shopigListItem = document.querySelector(shopigListItem);
    this.newItem = document.querySelector(newItem);
    this.btnAdd = document.querySelector(btnAdd);
    this.storageKey = storageKey;
    this.allItems = JSON.parse(localStorage.getItem(storageKey)) || [
      "milk",
      "juice",
    ];
    this.firstDate();
  }

  firstDate() {
    this.btnAdd.onclick = () => {
      this.addItems(this.newItem.value);
      this.newItem.value = "";
      this.renderItem();
      this.storeItem();
    };
    this.renderItem();
  }

  renderItem() {
    this.shopigListItem.innerHTML = "";
    if (this.addItems.length === 0) {
      const itemLi = document.createElement("li");
      itemLi.textContent = "No Item!";
      this.shopigListItem.appendChild(itemLi);
    }

    this.allItems.forEach((element, index) => {
      const itemLi = document.createElement("li");
      itemLi.textContent = element;
      const removeButton = document.createElement("span");
      removeButton.textContent = "Remove";
      removeButton.classList.add("btnRemove");
      removeButton.onclick = () => {
        this.removeItem(index);
        this.renderItem();
        this.storeItem();
      };
      itemLi.appendChild(removeButton);
      this.shopigListItem.appendChild(itemLi);
    });
  }

  removeItem(indexForRemove) {
    this.allItems = this.allItems.filter(
      (item, itemIndex) => itemIndex != indexForRemove
    );
  }

  addItems(newItem) {
    this.allItems.push(newItem);
  }

  storeItem() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.allItems));
  }
}

const myshopList = new shoppingList("#shopingListItem", "#newItem", "#btnAdd");
