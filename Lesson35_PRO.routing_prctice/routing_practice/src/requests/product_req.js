export const getProduct = (id, callback) => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(res => res.json())
      .then(json => callback(json))
}