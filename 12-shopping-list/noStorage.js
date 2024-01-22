
class ShoppingList {
    constructor(itemsSelector, addItemButtonSelector, newItemTextSelector) {
      this.UlShow = document.querySelector(itemsSelector);
      this.addItemButtonElement = document.querySelector(addItemButtonSelector);
      this.newItemTextElement = document.querySelector(newItemTextSelector);
      this.items = []; // Initialize items array without using localStorage
  
      this.initialise();
    }
  
    initialise() {
      this.addItemButtonElement.addEventListener('click', () => {
        this.addItem(this.newItemTextElement.value);
        this.newItemTextElement.value = '';
        this.renderItems();
      });
  
      this.renderItems();
    }
  
    renderItems() {
      this.UlShow.innerHTML = '';
      if (this.items.length === 0) {
        const itemElement = document.createElement('li');
        itemElement.textContent = 'No items';
        this.UlShow.appendChild(itemElement);
      }
  
      this.items.forEach((item, index) => {
        const itemElement = document.createElement('li');
        itemElement.textContent = item;
        const removeElement = document.createElement('span');
        removeElement.textContent = 'Remove';
        removeElement.classList.add('remove-item');
        removeElement.onclick = () => {
          this.removeItemAt(index);
          this.renderItems();
        };
        itemElement.appendChild(removeElement);
        this.UlShow.appendChild(itemElement);
      });
    }
  
    addItem(newItem) {
      this.items.push(newItem);
    }
  
    removeItemAt(indexToRemove) {
      this.items = this.items.filter((item, itemIndex) => itemIndex != indexToRemove);
    }
  }
  
  const myShoppingList = new ShoppingList('#shoppingListItems', '#addItem', '#newItemText');
  