"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
//import { routerCars } from "./routes/cars.Routes";
//import { routerEmployee } from "./routes/employee.Routes";
//import { connection } from './database/configMySQL/mysql'; 
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.middlewares();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        /*
        this.app.get('/api/prueba',async(req,res)=>{
            const result = await connection.query('SELECT * FROM empleados')
            res.json(result[0])
        });
        */
        //this.app.use('/api',routerCars);
        //this.app.use('/api',routerEmployee);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'), () => {
                console.log(`Server corriendo por el puerto ${this.app.get('port')}`);
            });
        });
    }
}
const server = new Server();
server.start();
