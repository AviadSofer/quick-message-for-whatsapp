"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var path_1 = __importDefault(require("path"));
// import Message from "./routes/messages.js";
var app = (0, express_1.default)();
// port
var port = process.env.PORT || 5000;
// connect to the db
mongoose_1.default.connect('mongodb+srv://admin:1cfC1wzKOn53ZtJc@cluster0.9wxyh.mongodb.net/quick-message-for-whatsapp?retryWrites=true&w=majority');
mongoose_1.default.connection.on("connected", function () { return console.log("MongoDB connected"); });
// add middleware
app.use(express_1.default.json());
// app.use('/api/messages', Message);
app.use(express_1.default.static(path_1.default.join(path_1.default.resolve(), "client", "dist")));
// start express server on port 5000
app.listen(port, function () {
    console.log("server started on port 5000");
});
//# sourceMappingURL=app.js.map