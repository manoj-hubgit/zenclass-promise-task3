//api fetch have been done.
//using promise and getting the data
const response = fetch("https://wizard-world-api.herokuapp.com/Spells");
response
  .then((data) => data.json())
  .then((result) => {
//getting all data in loop.
    for (let i = 0; i < result.length; i++) {
      //adding all data inside table row
      let inputbody = document.getElementsByTagName("tbody")[0];
      inputbody.innerHTML += ` <tr>
    <th scope="row">${i + 1}</th>
    <td>${result[i].name}</td>
    <td>${result[i].incantation}</td>
    <td>${result[i].effect}</td>
  </tr>
 `;
    }
  })
  .catch((error) => error.alert("No Magics here please refer api"));
