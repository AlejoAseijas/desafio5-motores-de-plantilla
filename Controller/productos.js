const { json } = require("express");

let productos = [
  {
    title: "Vans Rv7",
    price: 20000,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vans.rv-7.g-kels.arp.jpg/320px-Vans.rv-7.g-kels.arp.jpg",
    id: 1,
  },
  {
    title: "Rans S10",
    price: 20000,
    thumbnail:
      "https://lh3.googleusercontent.com/proxy/aPPH4leRw9SCota7bfnIUDetZ2_U0KN-4FTzrtuAg0KWZySbCZ0orLhrKCpGV0OtQL1_ISHZK5L6ITQXep50ewkLVFkTA3rsvg",
    id: 2,
  },
  {
    title: "Test",
    price: "200",
    thumbnail:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgZHBoYGhoaGh0cHBgZGhkcGRgcGRocIS4lHB4rHxoaJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALwBDAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAEQQAAEDAgMDCgMEBwgCAwAAAAEAAhEDIQQSMUFRYQUGEyJxgZGhsfAywdFCUnLhFGKCkrLS8QczQ1NjosLiFSMWk8P/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACURAAICAQQCAgIDAAAAAAAAAAABAhEhEhMxUQNBBGEUsSIycf/aAAwDAQACEQMRAD8A7tpRQo2hHBC9ZxsJjJKvwAqlI7VI4lYZuInIWOiQme9DRElKDZYa5Rvemc2EIRINi6Ra1JggRpCx2NkwVq0yRZSQiyxlTwga9FmXM0IhIMTgpwUMiARAJgU4KhoWVNCKUJcEBBUqbrKJ7yRdFVaDcKJwK0kACyxMqBj4IUrgYhQOF10RGWKlSUAO5HRo5tqM4U71MIpC18IHEEq1+iDaSnOFbuTUgVHEFRuJ2BaTMO0JVGgBNRKMVznKJzHnYtEO1CjL10TMOPbM92HdqVE9q0XydiEYeVpS7MOPRmOTXWr+ihH+jjcFrWhoZDTeFJmlR5ISBXI1ZaY0Qk8wq3SkJnVSVKZrUqE8oqYMgoQJUkLRgne6Qos0Ji5O4SokVuxpV7DVZF1UymEdBjpUllFRohwT5ghA4p4XI0PnCQqjeqT6qi6RaURZpl6WZVGPkKXOpRUTGok0ybqMFC6pClCi65ohQPAAUHS8VHVxEoostkj5BmFWeVcDhlE6gKtUYDotxZGTYYWVqVXoiApmPlYkW",
    id: 3,
  },
];

class Productos {
  constructor() {}
  get() {
    return productos;
  }
  getById(id) {
    try {
      let productSelect = productos.find((item) => {
        return item.id === parseInt(id);
      });
      productSelect === undefined
        ? (productSelect = "id invalido")
        : productSelect;
      return productSelect;
    } catch (err) {
      return err;
    }
  }
  post(bodyData) {
    try {
      let lastId = productos.length + 1;
      bodyData.id = lastId;
      productos.push(bodyData);
      return bodyData;
    } catch (err) {
      return err;
    }
  }
  put(id, bodyData) {
    try {
      let status = "product-edited";
      let productFind = productos.find((item) => {
        return item.id === parseInt(id);
      });
      if (productFind === undefined) {
        status = "id invalido";
      } else {
        productFind.title = bodyData.title;
        productFind.price = bodyData.price;
        productFind.thumbnail = bodyData.thumbnail;
        let indexProd = productos.findIndex((item) => item.id === parseInt(id));
        productos[indexProd] = productFind;
      }
      return status;
    } catch (err) {
      return err;
    }
  }
  delete(id) {
    try {
      let status = productos.find((item) => {
        return item.id === parseInt(id);
      });
      if (status === undefined) {
        status = "id invalido";
      } else {
        let indexProd = productos.findIndex((item) => item.id === parseInt(id));
        productos.splice(indexProd, 1);
        status = "producto-eliminado";
      }
      return status;
    } catch (err) {}
  }
}

module.exports = Productos;
