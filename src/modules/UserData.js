export const users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(err => console.log("error"));