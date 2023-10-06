import express from 'express';
import morgan from 'morgan';
//import helmet from 'helmet';
import cors from 'cors';
import "dotenv/config";
import { Product } from './models/product.Model';
import { User } from './models/user.Model';
import { routesProduct } from "./routes/product.Routes";
import { routesUser } from "./routes/user.Routes";


class Server{

	private app: express.Application;

	async connectionDB(){
		try
		{	await Product.sync()
			await User.sync();			
		}
		catch(error)
		{ console.log('Error en base de datos') }
	} 

	
	constructor(){
		this.app = express();
		this.config();
		this.middlewares();
		this.routes();		
	}


	config(){	
		this.connectionDB();		
		this.app.set('port', process.env.PORT || 3000);
	}


	middlewares(){
		this.app.use(morgan('dev'));
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended: true}));
		//this.app.use(helmet());		
		this.app.use(cors());
	}


	routes(){					
		this.app.use('/api/products',routesProduct);
		this.app.use('/api/users',routesUser);
	}


	async start(){
		await this.app.listen(this.app.get('port'),() => {
			console.log(`Server corriendo por el puerto ${this.app.get('port')}`);
		});
	}
}


const server = new Server();
server.start();
