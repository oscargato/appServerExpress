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
//import helmet from 'helmet';
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const product_Model_1 = require("./models/product.Model");
const user_Model_1 = require("./models/user.Model");
const product_Routes_1 = require("./routes/product.Routes");
const user_Routes_1 = require("./routes/user.Routes");
class Server {
    connectionDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield product_Model_1.Product.sync();
                yield user_Model_1.User.sync();
            }
            catch (error) {
                console.log('Error en base de datos');
            }
        });
    }
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.middlewares();
        this.routes();
    }
    config() {
        this.connectionDB();
        this.app.set('port', process.env.PORT || 3000);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        //this.app.use(helmet());		
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use('/api/products', product_Routes_1.routesProduct);
        this.app.use('/api/users', user_Routes_1.routesUser);
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
