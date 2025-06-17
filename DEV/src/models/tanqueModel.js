var database = require("../database/config");

function buscarTanquesPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM tanque a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {

  var instrucaoSql = `INSERT INTO tanque (descricao, fk_empresa) VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarTanquesPorEmpresa,
  cadastrar
}
