var tanqueModel = require("../models/tanqueModel");

function buscarTanquesPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  tanqueModel.buscarTanquesPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os tanques: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function puxar(req, res) {
    tanqueModel.puxar(req.params.empresaId)
        .then(function (dados) {
            if (dados.length > 0) {
                res.status(200).json(dados);
            } else {
                res.status(204).send('Informações Não Encontradas!!')
            }
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao Coletar Informações! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
};

function cadastrar(req, res) {
  var descricao = req.body.descricao;
  var idUsuario = req.body.idUsuario;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    tanqueModel.cadastrar(descricao, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarTanquesPorEmpresa,
  cadastrar,
  puxar
}