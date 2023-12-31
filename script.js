let api_url = `https://jsonplaceholder.typicode.com/comments?_limit=15`;
let responsedata;

async function getData() {
  try {
    let response = await fetch(api_url).then((res) => res.json());
    console.log("response", response);
    let tab = `<tr>
      <th>Id</th>
      <th>Email</th>
      <th>Name</th>
      <th>Body</th>
     </tr>`;
    console.log(tab);
    let tabledata =
      response &&
      response.map(
        (post) =>
          `   <tr>
          <th>${post.id}</th>
          <th>${post.email}</th>
          <th>${post.name}</th>
          <th>${post.body}</th>
        </tr>`
      );

    console.log("tabledata", tabledata);
    console.log("tabledata.includes", tabledata.includes("\n"));

    document.getElementById("post-table").innerHTML = tab + tabledata.join(" ");
    let property_value = document.getElementById("name");
    console.log("property_value", property_value);
  } catch (error) {
    console.log("error", error);
  }
}
getData();
