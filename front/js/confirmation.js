/**
* 1 Récupére URL avec id produit lien clické et l'affiche sur la page 
*  Cherche l'URL de la page  
*  Cherche la valeur id-order dans la URL
*  Affiche dans la page 
*/ 

const url = new URL(window.location.href);
const idOrder = url.searchParams.get("id-order");
const idUrl = document.getElementById('orderId');
idUrl.innerHTML = idOrder;
