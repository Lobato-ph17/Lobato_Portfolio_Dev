const express = require("express");
const router = express.Router();

//Routes
router.get("", (req, res) => {
  const locals = {
    title: "Lobato Dev",
    description: "A blog created with NodeJs, Express & MongoDB.",
  };

  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/projects", (req, res) => {
  res.render("projects");
});



module.exports = router;
