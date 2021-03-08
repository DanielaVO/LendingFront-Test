const getRemaining = () => {
  const productsURL = "http://demo0107930.mockable.io/remainigAmount";
  return fetch(productsURL)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
};

export default getRemaining;
