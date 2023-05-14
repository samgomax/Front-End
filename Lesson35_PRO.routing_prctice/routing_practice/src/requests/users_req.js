export const getUsres = (callback) => {
    fetch('https://api.escuelajs.co/api/v1/users')
    .then(res => res.json())
    .then(json => callback(json))
}

export const getUser = (id, callback) => {
    fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
    .then(res => res.json())
    .then(json => callback(json))
}