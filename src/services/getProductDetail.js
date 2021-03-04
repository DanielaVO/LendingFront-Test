const getProductDetail = (id) => {
    const productsURL = `http://demo0107930.mockable.io/product/${id}`;
    return fetch(productsURL)
      .then((res) => res.json())
      .then((response) => {
        return response;
      });
  };
  
  export default getProductDetail;
  