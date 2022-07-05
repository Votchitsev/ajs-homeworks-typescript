import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalPrice(): number {
        const list = this._items as Array<any>
        return list.reduce((previous, current) => {
            return previous.price + current.price;
        });
    }
}
