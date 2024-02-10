const App = require("./app");
const BaseRoute = require("./routes/base.routes");
const StudentsRoutes = require("./routes/students.routes");

const app = new App([new BaseRoute(), new StudentsRoutes()]);

app.listen();
