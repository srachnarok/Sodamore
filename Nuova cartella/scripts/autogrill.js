window.puntiVendita = window.puntiVendita || [];
const catenaAutogrill = "Autogrill";
const inizioAutogrill = window.puntiVendita.length;

window.puntiVendita.push(
  // Inserisci qui i punti vendita Autogrill.
  // Esempio:
  // { nome: "Autogrill - Area di Servizio", lat: 45.0000, lng: 9.0000, indirizzo: "Autostrada A1, Italia" },
);
window.puntiVendita.slice(inizioAutogrill).forEach((punto) => {
  punto.catena = punto.catena || catenaAutogrill;
});
