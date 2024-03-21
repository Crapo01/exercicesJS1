function main() {

  

  async function getDatas(url) {
    let data, response;
    try {

      response = await fetch(url);
      console.log(" try " + url);
      console.log(response);
      data = await response.json();
      if (!response.ok){
      throw new Error("response not OK")
      } else return(data);

       
    }

    catch (error) {
      console.warn(error);
      // throw:retourne la valeur error et passe la promise en rejected
      throw error
    }

  }


  datasPromise = getDatas(urlUsers)
  commentsPromise = getDatas(urlComments)
  photosPromise = getDatas(urlPhotos)
  todosPromise = getDatas(urlTodos)
  failPromise = getDatas(url51)


  async function displayResult() {
    let promise_array = [datasPromise, commentsPromise, photosPromise, todosPromise, failPromise];
    let results = await Promise.allSettled(promise_array);
    console.log(results);
    results.forEach((result, index) => {
      if (result.status !== "fulfilled") {
        console.log(result + "fallback")
        promise_array[index] = fetch(urlFbck).then(resp => resp.json());

      } else {
        console.log("fullfilled")
      }
    })
    results = await Promise.allSettled(promise_array);
    console.log("final:", results);
  }
  displayResult();
  console.log("End of script ex3 is here");
}
main();