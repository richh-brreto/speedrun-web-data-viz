var express = require("express");
var router = express.Router();

var tanqueController = require("../controllers/tanqueController");

router.get("/puxar/:sensorId", function (req, res) {
    tanqueController.puxar(req, res);
});

router.get("/:empresaId", function (req, res) {
  tanqueController.buscarTanquesPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  tanqueController.cadastrar(req, res);
})

module.exports = router;