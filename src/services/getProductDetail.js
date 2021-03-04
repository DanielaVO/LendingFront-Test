const getProductDetail = () => {
    const productsURL = 'http://demo0107930.mockable.io/product/uniqueProduct';
    return fetch(productsURL)
      .then((res) => res.json())
      .then((response) => {
        return response;
      });
  };
  
  export default getProductDetail;
  