class Cart {
    constructor() {
        this.items = new Set();
    }

    addItem(item) {
        if(item in this.items) {
            this.incrementQuantity(item);
        }
        else {
            this.items.add(item);
        }
    }

    removeItem(item) {
        if(item in this.items) {
            this.decrementQuantity(item);
        }
        else {
            
        }
    }

    incrementQuantity(id) {
        let item = this.getItem(id);
        this.removeItem(item);
        item.quantity++;
        this.addItem(item);
        
    }

    decrementQuantity(id) {
        let item = this.getItem(id);
        this.removeItem(item);
        item.quantity--;
        if(item.quantity > 0) {
            this.addItem(item);
        }
        else {
            this.items.delete(item);
        }
        
    }

    getItem(id) {
        for (let item of this.items) {
            if (item.id === id) {
                return item;
            }
        }
    }



}

class CartItem {
    constructor(id, productName, price, quantity, imgUrl) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.imgUrl = imgUrl;
    }
}