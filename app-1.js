class Storage {
    constructor(items) {
      this.items = items;
    }
  
    getItems() {
      return this.items;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(item) {
      const itemIndex = this.items.indexOf(item);
      if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1);
      }
    }
  }
  
  const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);
  
  const items = storage.getItems();
  console.table(items);  
  
  storage.addItem('Дроїд');
  console.table(storage.items);  
  
  storage.removeItem('Пролонгер');
  console.table(storage.items);  
  