import app from 'app';
import GetAllTables from '../usecase/get_all_tables_usecase';


app.get('/', (req, res) => {
    res.send(GetAllTables());
  })