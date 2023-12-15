const fetchApiData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      return data.body;
      console.log("data2", data);
    } catch (error) {
      console.log("error fetching data", error);
      
    }
    
}
    
    export { fetchApiData };
//    const  data= {
//         name: "arun",
//         age: 22,
//         email: "arun@gmail.com",
//   };
//   return data