/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here


  console.log("Hello Rigo from the console!");
};


let generate =() => {
  let pronoun = ['the','our', 'sir', 'insta', 'this'];
  let adj = ['great','small', 'fluffy', 'boring', 'crazy'];
  let noun = ['king','kitty', 'bear', 'person', 'neighbor'];
  let ext = ['com','net', 've', 'ea'];

  let thePronoun = Math.floor(Math.random()*pronoun.length);
  let theAdj = Math.floor(Math.random()*adj.length);
  let theNoun = Math.floor(Math.random()*noun.length);
  let theExt = Math.floor(Math.random()*ext.length);

  return 'www.'+pronoun[thePronoun]+' '+adj[theAdj]+' ' +noun[theNoun]+'.'+ext[theExt];

}