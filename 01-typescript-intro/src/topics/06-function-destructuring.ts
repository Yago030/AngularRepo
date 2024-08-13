
interface Product {
    description: string;
    price: number;
}


const phone :Product = {
    description: 'Nokia A1',
    price: 150,
}



const tablet :Product = {
    description: 'iPad Air',
    price: 250,
}

interface TaxCalculationsOptions{
    tax: number;
    products: Product[];
}

function taxCalculation (options: TaxCalculationsOptions) : number[]{

    let total = 0;
    options.products.forEach(product => {
        total += product.price ;
    });

    return [total, total * options.tax]
}


const shoppinggCart = [tablet, phone];
const tax = 0.15;

const result = taxCalculation({
    tax,
    products: shoppinggCart
})



console.log('total: ', result.forEach)
export {}