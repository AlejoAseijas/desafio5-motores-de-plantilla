const { Router } = require("express");
const Productos = require("./Controller/productos");
let productosReq = new Productos();
const path = require("path");
const router = Router();

// Router
router.get("/productos", async (req, res) => {
  const resData = await productosReq.get();
  if (parseInt(resData.length) > 0) {
    //res.render("index", { tableProducts: true, products: resData }); //handlebars
    //res.render("index.pug", { nothing: false, products: resData }); //pug
    res.render("index", { products: resData }); //ejs
  } else {
    //res.render("index", { nothing: true }); //handlebars
    //res.render("index.pug", { nothing: true, products: resData }); //pug
    res.render("noproducts"); //ejs
  }
});

router.get("/productos/:id", async (req, res) => {
  const resData = await productosReq.getById(req.params.id);
  if (parseInt(resData.length) > 0) {
    //res.render("index", { tableProducts: true, products: resData }); //handlebars
    //res.render("index.pug", { nothing: false, products: resData }); //pug
    res.render("index", { products: resData });
  } else {
    //res.render("index", { nothing: true }); //handlebars
    //res.render("index.pug", { nothing: true, products: resData }); //pug
    res.render("noproducts"); //ejs
  }
});

router.post("/productos", async (req, res) => {
  const resData = await productosReq.post(req.body);
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
router.put("/productos/:id", async (req, res) => {
  const resData = await productosReq.put(req.params.id, req.body);
  res.json(resData);
});

router.delete("/productos/:id", async (req, res) => {
  const resData = await productosReq.delete(req.params.id);
  res.json(resData);
});

// Fin router

module.exports.routes = router;
