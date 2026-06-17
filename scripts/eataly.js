window.puntiVendita = window.puntiVendita || [];
const catenaEataly = "Eataly";
const inizioEataly = window.puntiVendita.length;

window.puntiVendita.push(
  { nome: "Eataly - Milano", lat: 45.4805661, lng: 9.1881047, indirizzo: "Piazza XXV Aprile, 10, Milano", telefono: "", orario: "" },
  { nome: "Eataly - Torino", lat: 45.0348154, lng: 7.6678056, indirizzo: "Via Ermanno Fenoglietti, 14, Torino", telefono: "", orario: "" },
  { nome: "Eataly - Torino", lat: 45.0672963, lng: 7.6840031, indirizzo: "Via Lagrange, 3, Torino", telefono: "", orario: "" },
  { nome: "Eataly - Monticello d'Alba", lat: 44.7011106, lng: 7.9707263, indirizzo: "Strada Statale 231 Alba-Bra, Monticello d'Alba", telefono: "", orario: "" },
  { nome: "Eataly - Roma", lat: 41.8704736, lng: 12.4867062, indirizzo: "Piazzale XII Ottobre, 1492, Roma", telefono: "", orario: "" },
  { nome: "Eataly - Genova", lat: 44.408411, lng: 8.9273403, indirizzo: "Edificio Millo Porto Antico, Calata Cattaneo, 15, Genova", telefono: "", orario: "" },
  { nome: "Eataly - Trieste", lat: 45.6470925, lng: 13.7612196, indirizzo: "Riva Tommaso Gulli, 1, Trieste", telefono: "", orario: "" },
  { nome: "Eataly - Piacenza", lat: 45.0460844, lng: 9.6940465, indirizzo: "Stradone Farnese, 39, Piacenza", telefono: "", orario: "" },
  { nome: "Eataly - Firenze", lat: 43.7740719, lng: 11.2558878, indirizzo: "Via de’ Martelli, 22R, Firenze", telefono: "", orario: "" },
  { nome: "Eataly - Bologna", lat: 44.4937552, lng: 11.3449608, indirizzo: "Via degli Orefici, 19, Bologna", telefono: "", orario: "" },
  { nome: "Eataly - Pinerolo", lat: 44.8790201, lng: 7.3592956, indirizzo: "Via Poirino, 104, Pinerolo", telefono: "", orario: "" }
);
window.puntiVendita.slice(inizioEataly).forEach((punto) => {
  punto.catena = punto.catena || catenaEataly;
});
