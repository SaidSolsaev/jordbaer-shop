import jb from "../Images/jb.jpg";

const ProductsData =  [
    {
        id: "1",
        title: "Jordbær Saga", 
        price: 89.00, 
        pic: jb,
    },
    {
        id: "2",
        title: "Jordbær Korona", 
        price: 99.00, 
        pic: jb,
    },
    {
        id: "3",
        title: "Jordbær Saga", 
        price: 89.00, 
        pic: jb,
    },
    {
        id: "4",
        title: "Svenske Jordbær", 
        price: 69.00, 
        pic: jb,
    },
    {
        id: "5",
        title: "Norske Bringebær", 
        price: 199.00, 
        pic: jb,
    },
    {
        id: "6",
        title: "Tyrkiske Moreller", 
        price: 99.00, 
        pic: jb,
    },
    {
        id: "7",
        title: "Tyrkiske Moreller", 
        price: 129.00, 
        pic: jb,
    },
    {
        id: "8",
        title: "Bringebær", 
        price: 49.00, 
        pic: jb,
    },
    {
        id: "9",
        title: "Belgiske Jordbær", 
        price: 49.00, 
        pic: jb,
    },
    
];

function getProductData(id){
    let productData = ProductsData.find(product => 
        product.id === id
    );

    if (productData === undefined){
        console.log("Produkt finnes ikke med ID: " + id);
    }

    return productData;
}

function addProduct(title, price, pic){
    let id = 0
    for (let i = 0; i < ProductsData.length + 1; i++){
        id += 1
    }
    console.log(id)

    ProductsData.push({
        id: id,
        title: title,
        price: price,
        
    });
};


export {getProductData, ProductsData, addProduct}