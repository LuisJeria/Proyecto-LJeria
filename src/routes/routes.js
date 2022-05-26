const app = require("../../app")
const GetAllTables = require("../controllers/get_all_tables_controller")
exports.InitRoutes = function() {
    app.ExpressRouter.get('/', GetAllTables.GetAllTablesController)
}