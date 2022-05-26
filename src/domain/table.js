class Table {
    id;
    name;
    position;
    status;
  
    constructor(data) {
      Object.assign(this, data);
    }
  }