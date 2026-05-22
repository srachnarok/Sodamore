window.puntiVendita = window.puntiVendita || [];
const catenaEataly = "Eataly";
const inizioEataly = window.puntiVendita.length;

window.puntiVendita.push(
  // Inserisci qui i punti vendita Eataly.
  // Esempio:
  // { nome: "Eataly - Roma", lat: 41.8719, lng: 12.5674, indirizzo: "Piazzale 12 Ottobre 1492, Roma" },
);
window.puntiVendita.slice(inizioEataly).forEach((punto) => {
  punto.catena = punto.catena || catenaEataly;
});
