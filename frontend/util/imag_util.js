export const fetchImage = (id) => {
  fetch(`http://localhost:3000/api/images/${id}`)
  .then(r => r.json())
  .then(r => console.log(r));
};
