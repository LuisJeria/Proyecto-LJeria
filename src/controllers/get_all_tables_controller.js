const getAllTables = require("../usecase/get_all_tables_usecase")

exports.GetAllTablesController = (req, res) => {
  res.send(getAllTables.GetAllTables())
}