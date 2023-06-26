import express, { Express, Request, Response } from 'express';
import { ErrorCodes } from './errorCodes';
import { Product } from './product';
import { arrayBuffer } from 'stream/consumers';
import { json } from 'body-parser';
import { cors } from 'cors';


const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(cors())


const products: Product[] = [
  { id: 1, name: "Producto 1", price: 100, stock: 3, images: ['img1.png', 'img2.png', 'img3.png']},
  { id: 2, name: "Producto 2", price: 70, stock: 1, images: ['img1.png', 'img2.png', 'img3.png']},
  { id: 3, name: "Producto 3", price: 25, stock: 1, images: ['img1.png', 'img2.png', 'img3.png']},
];

/**
 * Get all products
 */
app.get('/product', (req: Request, res: Response) => {
  res.send(products);
});

/**
 * Get all the tasks for a given user.
 */
app.get('/product/:id', (req: Request, res: Response) => {
  const productId = Number(req.params.id);

  const product = products.filter(x => x.id === productId);

  if (product.length > 0) {

  } else {
  }
});

app.listen(port, () => {
  // tslint:disable-next-line
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
