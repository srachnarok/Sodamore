window.puntiVendita = window.puntiVendita || [];
const catenaAutogrill = "Autogrill";
const inizioAutogrill = window.puntiVendita.length;

window.puntiVendita.push(
  { nome: "Autogrill Po Brennero Est", lat: 45.066176, lng: 10.8444124, indirizzo: "Autostrada del Brennero 22, San Benedetto Po (MA), Italia" },
    { nome: "Autogrill Badia al Pino Ovest", lat: 43.4162449, lng: 11.7228314, indirizzo: "A1 km 362, Civitella in Val Chiana (AR), Italia" },
      { nome: "Autogrill Montepulciano Est", lat: 43.0984902, lng: 11.7873736, indirizzo: "A1 Montepulciano Est (SI), Italia" },

);
window.puntiVendita.slice(inizioAutogrill).forEach((punto) => {
  punto.catena = punto.catena || catenaAutogrill;
});
