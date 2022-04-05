const router = require("express").Router();
const routesList = ["company"];
routesList.forEach(route => {
  router.use(`/${route}`, require(`./${route}Routes`));
});

module.exports = router;