
  let pronoun = ["the","our", "sir", "insta", "this"];
  let adj = ["great","small", "fluffy", "boring", "crazy"];
  let noun = ["king","kitty", "bear", "person", "neighbor"];
  let ext = ["com","net", "ve", "ea"];

 for(let first of pronoun){
    for(let second of adj){
      for(let third of noun){
        for(let domain of ext){
          console.log(`${first} ${second} ${third}.${domain}`)
        }
      }
    }
  }
