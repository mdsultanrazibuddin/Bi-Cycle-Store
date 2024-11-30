import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
const app: Application = express();
// const port = 3000
// parser



app.use(express.json());
app.use('/api/products', ProductRoutes)
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
