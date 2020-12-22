import { Product } from './product';

export class CartItem {
id: number;
productId: number;
productName: string;
qty: number;
price: number;

constructor(id: number, product: Product, qty = 1){
this.id = id;
this.productId = product.id;
this.productName = product.name;
this.price = product.price;
this.qty = qty;
}
    // { id: 1, productId: 1, productName: 'Test 1', qty: 4, price: 100 },
    // { id: 2, productId: 3, productName: 'Test 3', qty: 5, price: 50 },
    // { id: 3, productId: 2, productName: 'Test 2', qty: 3, price: 150 },
    // { id: 4, productId: 4, productName: 'Test 4', qty: 2, price: 200 },
}
