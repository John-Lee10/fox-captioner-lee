const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

router.get("/", ({ session: { isLoggedIn } }, res) => {
  res.render("index", { isLoggedIn });
});

router.get("/login", async (req, res) => {
  if (req.session.isLoggedIn) return res.redirect("/");
  res.render("login", { error: req.query.error });
});

router.get("/signup", async (req, res) => {
  if (req.session.isLoggedIn) return res.redirect("/");
  res.render("signup", { error: req.query.error });
});

router.get("/private", checkAuth, ({ session: { isLoggedIn } }, res) => {
  res.render("protected", { isLoggedIn });
});

///////////////render fox types from schema
// router.get('/', async (req, res) => {
//   const [rows] = await db.query('SELECT * FROM foxtypes;')
//   res.render('index',{rows})
// })
////////////didnt work

//render foxtypes from controllers
router.get("/foxtypes", async (req, res) => {
  res.render("index", { rows });
});

module.exports = router;
