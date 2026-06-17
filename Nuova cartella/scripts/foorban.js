window.puntiVendita = window.puntiVendita || [];
const catenaEniliveCafe = "Enilive Café";
const inizioEniliveCafe = window.puntiVendita.length;

window.puntiVendita.push(
  // Inserisci qui i punti vendita Enilive Cafe.
  // Esempio:
  // { nome: "Enilive Cafe - Roma", lat: 41.9028, lng: 12.4964, indirizzo: "Via Roma 1, Roma" },
);
window.puntiVendita.slice(inizioEniliveCafe).forEach((punto) => {
  punto.catena = punto.catena || catenaEniliveCafe;
});
