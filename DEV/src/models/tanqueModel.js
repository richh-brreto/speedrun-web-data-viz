var database = require("../database/config");

function buscarTanquesPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM tanque a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function puxar() {
    var instrucaoSql = `select dayname(dataHora) as dia_semana, time(dataHora) as hora_dado from alertas 
    where fk_tanque =${1} and data_hora >= DATE_SUB(NOW(), INTERVAL 7 DAY);`;
    return database.executar(instrucaoSql);
};

function cadastrar(empresaId, descricao) {

  var instrucaoSql = `INSERT INTO tanque (descricao, fk_empresa) VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarTanquesPorEmpresa,
  cadastrar,
  puxar
}
