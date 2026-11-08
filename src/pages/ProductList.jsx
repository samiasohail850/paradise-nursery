import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Navbar from "../components/Navbar";

const categories = [
  {
    name: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, image: "photo-1501004318641-b39e6451bec6" },
      { id: 2, name: "Peace Lily", price: 18, image: "photo-1497250681960-ef046c08a56e" },
      { id: 3, name: "Spider Plant", price: 12, image: "photo-1485955900006-10f4d324d411" },
      { id: 4, name: "Areca Palm", price: 22, image: "photo-1509423350716-97f9360b4e09" },
      { id: 5, name: "Boston Fern", price: 16, image: "photo-1459156212016-c812468e2115" },
      { id: 6, name: "Rubber Plant", price: 20, image: "photo-1508013861978-4f4a8d6e5b0e" },
    ],
  },
  {
    name: "Low Maintenance Plants",
    plants: [
      { id: 7, name: "ZZ Plant", price: 17, image: "photo-1501004318641-b39e6451bec6" },
      { id: 8, name: "Aloe Vera", price: 10, image: "photo-1509423350716-97f9360b4e09" },
      { id: 9, name: "Jade Plant", price: 14, image: "photo-1485955900006-10f4d324d411" },
      { id: 10, name: "Pothos", price: 13, image: "photo-1497250681960-ef046c08a56e" },
      { id: 11, name: "Cactus", price: 9, image: "photo-1459156212016-c812468e2115" },
      { id: 12, name: "Succulent", price: 11, image: "photo-1508013861978-4f4a8d6e5b0e" },
    ],
  },
  {
    name: "Decorative Plants",
    plants: [
      { id: 13, name: "Monstera", price: 25, image: "photo-1501004318641-b39e6451bec6" },
      { id: 14, name: "Calathea", price: 21, image: "photo-1497250681960-ef046c08a56e" },
      { id: 15, name: "Fiddle Leaf Fig", price: 30, image: "photo-1485955900006-10f4d324d411" },
      { id: 16, name: "Anthurium", price: 24, image: "photo-1509423350716-97f9360b4e09" },
      { id: 17, name: "Bird of Paradise", price: 35, image: "photo-1459156212016-c812468e2115" },
      { id: 18, name: "Philodendron", price: 19, image: "photo-1508013861978-4f4a8d6e5b0e" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Navbar />

      <div className="product-page">
        <h1>Our Beautiful Plants</h1>
        <p>Bring freshness and beauty into your home.</p>

        {categories.map((category) => (
          <section className="category-section" key={category.name}>
            <h2>{category.name}</h2>

            <div className="product-grid">
              {category.plants.map((plant) => {
                const added = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div className="product-card" key={plant.id}>
                    <img
                      src={`https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=400&q=80`}
                      alt={plant.name}
                    />

                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>

                    <button
                      disabled={added}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {added ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default ProductList;