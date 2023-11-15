import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS =[
    {
        id: 'p1',
        price: 6,
        title: 'My First Book',
        description: 'The First book I ever wrore',
    },
    {
        id: 'p2',
        price: 5,
        title: 'My Second Book',
        description: 'The Second book I ever wrore',
    },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {DUMMY_PRODUCTS.map(
                  item=> (
                  <ProductItem
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      description={item.description}
                  />
                )
              )
          }

      </ul>
    </section>
  );
};

export default Products;
