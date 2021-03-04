const getProducts = () => {
  const productsURL = "http://demo0107930.mockable.io/products";
  return fetch(productsURL)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};

export default getProducts;
