/**
 * 
 * 
 * 
 * 
 */ 
// * 1 recupere URL avec id produit lien clické
let params = new URLSearchParams(document.location.search);
const test5 = console.log(params);
let id = params.get('orderId');
const test = console.log(id);
const idUrl = document.getElementById('orderId');
idUrl.innerHTML = id;
