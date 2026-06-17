window.puntiVendita = window.puntiVendita || [];
const catenaPokeHouse = "Poke House";
const inizioPokeHouse = window.puntiVendita.length;

window.puntiVendita.push(
  // old
  { nome: "Poke House - Isola", lat: 45.4856502, lng: 9.1921357, indirizzo: "Via Gaetano de Castillia, 24, 20124 Milano", orari: { lunedi: '11:30 - 22:30', martedi: '11:30 - 22:30', mercoledi: '11:30 - 22:30', giovedi: '11:30 - 22:30', venerdi: '11:30 - 22:30', sabato: '11:30 - 22:30', domenica: '11:30 - 22:30' }, telefono: "+39 02 8278 8640" },
  { nome: "Poke House - CityLife", lat: 45.477814, lng: 9.1565914, indirizzo: "Piazza Tre Torri, 1, 20145 Milano", orari: { lunedi: '11:30 - 22:00', martedi: '11:30 - 22:00', mercoledi: '11:30 - 22:00', giovedi: '11:30 - 22:00', venerdi: '11:30 - 22:00', sabato: '11:30 - 22:00', domenica: '11:30 - 22:00' }, telefono: "+39 375 659 4015" },
  { nome: "Poke House - Porta Venezia", lat: 45.4761288, lng: 9.2074685, indirizzo: "Via Lazzaro Spallanzani, 16, 20129 Milano", orari: { lunedi: '11:30 - 22:00', martedi: '11:30 - 22:00', mercoledi: '11:30 - 22:00', giovedi: '11:30 - 22:00', venerdi: '11:30 - 22:00', sabato: '11:30 - 22:00', domenica: '11:30 - 22:00' }, telefono: "+39 02 4544 0498" },
  { nome: "Poke House - Brera", lat: 45.4683095, lng: 9.1854041, indirizzo: "Via Broletto, 41, 20121 Milano", orari: { lunedi: '11:30 - 22:00', martedi: '11:30 - 22:00', mercoledi: '11:30 - 22:00', giovedi: '11:30 - 22:00', venerdi: '11:30 - 22:00', sabato: '11:30 - 22:00', domenica: '11:30 - 22:00' }, telefono: "+39 02 8278 2060" },
  { nome: "Poke House - Meravigli", lat: 45.4660126, lng: 9.1845763, indirizzo: "Via Meravigli, 2, 20121 Milano", orari: { lunedi: '11:30 - 22:00', martedi: '11:30 - 22:00', mercoledi: '11:30 - 22:00', giovedi: '11:30 - 22:00', venerdi: '11:30 - 22:00', sabato: '11:30 - 22:00', domenica: '11:30 - 22:00' }, telefono: "+39 02 4770 4114" },
  { nome: "Poke House - Turati", lat: 45.4736549, lng: 9.1946901, indirizzo: "Via Filippo Turati, 3, 20121 Milano", orari: { lunedi: '11:30 - 22:30', martedi: '11:30 - 22:30', mercoledi: '11:30 - 22:30', giovedi: '11:30 - 22:30', venerdi: '11:30 - 22:30', sabato: '11:30 - 22:30', domenica: '11:30 - 22:30' }, telefono: "" },
  { nome: "Poke House - OrioCenter", lat: 45.6648721, lng: 9.6911372, indirizzo: "Via Portico, 71, 24050 Orio al Serio", orari: { lunedi: '11:30 - 21:30', martedi: '11:30 - 21:30', mercoledi: '11:30 - 21:30', giovedi: '11:30 - 21:30', venerdi: '11:30 - 21:30', sabato: '11:30 - 21:30', domenica: '11:30 - 21:30' }, telefono: "+39 035 034 7794" },
  { nome: "Poke House - Brescia Zanardelli", lat: 45.5366431, lng: 10.2204682, indirizzo: "Corso Giuseppe Zanardelli, 26, 25121 Brescia", orari: { lunedi: '11:30 - 21:00', martedi: '11:30 - 21:00', mercoledi: '11:30 - 21:00', giovedi: '11:30 - 21:00', venerdi: '11:30 - 22:00', sabato: '11:30 - 22:00', domenica: '11:30 - 21:00' }, telefono: "+39 030 503 1475" },
  { nome: "Poke House - Elnos", lat: 45.5326642, lng: 10.166012, indirizzo: "Via Luigi Einaudi, 25030 Roncadelle", orari: { lunedi: '11:30 - 21:00', martedi: '11:30 - 21:00', mercoledi: '11:30 - 21:00', giovedi: '11:30 - 21:00', venerdi: '11:30 - 21:00', sabato: '11:30 - 21:00', domenica: '11:30 - 21:00' }, telefono: "+39 030 503 4001" },
  { nome: "Poke House - Franciacorta Outlet", lat: 45.5774768, lng: 10.1181417, indirizzo: "Piazza Cascina Moie, 1/2, 25050 Rodengo Saiano", orari: { lunedi: '11:30 - 20:00', martedi: '11:30 - 20:00', mercoledi: '11:30 - 20:00', giovedi: '11:30 - 20:00', venerdi: '11:30 - 20:00', sabato: '11:30 - 20:00', domenica: '11:30 - 20:00' }, telefono: "+39 030 503 1476" },

  // new
  { nome: "Poke House - Viale Eugenio Beauharnais", lat: 45.4735505, lng: 9.1794224, indirizzo: "Viale Eugenio Beauharnais, 20121 Milano"},
  { nome: "Poke House - Via Pasquale Paoli", lat: 45.4506033, lng: 9.1719127, indirizzo: "Via Pasquale Paoli, 3, 20143 Milano"},
  { nome: "Poke House - Via Orobia", lat: 45.4428532, lng: 9.2054072, indirizzo: "Via Orobia, 16, 20139 Milano"},
  { nome: "Poke House - Via Galvano Fiamma", lat: 45.4641006, lng: 9.2111027, indirizzo: "Via Galvano Fiamma, 5, 20129 Milano"},
  { nome: "Poke House - Monza Carlo Alberto", lat: 45.5853218, lng: 9.2756242, indirizzo: "Via Carlo Alberto, 14, 20900 Monza"},
  { nome: "Poke House - Bergamo Tiraboschi", lat: 45.6932706, lng: 9.6687375, indirizzo: "Via G. Tiraboschi, 65, 24122 Bergamo"},
  { nome: "Poke House - Lonato del Garda", lat: 45.4302329, lng: 10.51392, indirizzo: "Via Mantova, 36, 25017 Lonato del Garda"},
  { nome: "Poke House - Grandate", lat: 45.7693209, lng: 9.0613672, indirizzo: "Via Strada Statale dei Giovi, 35/n, 22070 Grandate"},
  { nome: "Poke House - Roma Gambero", lat: 41.9036143, lng: 12.4801717, indirizzo: "Via del Gambero, 36, 00187 Roma"},
  { nome: "Poke House - Roma Beethoven", lat: 41.8311691, lng: 12.4655866, indirizzo: "Viale Beethoven, 80/82, 00144 Roma"},
  { nome: "Poke House - Roma Valle Aurelia", lat: 41.9020474, lng: 12.4382373, indirizzo: "Viale di Valle Aurelia, 30, 00167 Roma"},
  { nome: "Poke House - Roma Marcantonio Colonna", lat: 41.9093423, lng: 12.4672307, indirizzo: "Via Marcantonio Colonna, 22, 00192 Roma"},
  { nome: "Poke House - Roma Oceano Pacifico", lat: 41.8167273, lng: 12.4591958, indirizzo: "Viale dell'Oceano Pacifico, 83, 00144 Roma"},
  { nome: "Poke House - Roma Alberto Lionello", lat: 41.9750079, lng: 12.5387984, indirizzo: "Via Alberto Lionello, 201, 00139 Roma"},
  { nome: "Poke House - Roma Po", lat: 41.917649, lng: 12.499743, indirizzo: "Via Po, 160, 00198 Roma"},
  { nome: "Poke House - Roma Ponte di Piscina Cupa", lat: 41.7163254, lng: 12.4425604, indirizzo: "Via del Ponte di Piscina Cupa, 64, 00128 Roma"},
  { nome: "Poke House - Roma Laurentina", lat: 41.8138977, lng: 12.485088, indirizzo: "Via Laurentina, 00143 Roma"},
  { nome: "Poke House - Fiumicino", lat: 41.7984241, lng: 12.2978175, indirizzo: "Viale Donato Bramante, 31/65, 00054 Fiumicino"},
  { nome: "Poke House - Torino Santa Croce", lat: 45.0659041, lng: 7.6876587, indirizzo: "Via Santa Croce, 2, 10123 Torino"},
  { nome: "Poke House - Torino Nizza", lat: 45.0348863, lng: 7.6667465, indirizzo: "Via Nizza, 230, 10126 Torino"},
  { nome: "Poke House - Grugliasco", lat: 45.0563524, lng: 7.6124666, indirizzo: "Via Crea, 10, 10095 Grugliasco"},
  { nome: "Poke House - Moncalieri", lat: 44.9975158, lng: 7.6946275, indirizzo: "Via Vittime di Bologna, 20/22, 10024 Moncalieri"},
  { nome: "Poke House - Novara Mazzini", lat: 45.4450317, lng: 8.6222443, indirizzo: "Corso Giuseppe Mazzini, 11b, 28100 Novara"},
  { nome: "Poke House - Vicolungo", lat: 45.4689508, lng: 8.4639718, indirizzo: "Piazza Santa Caterina, 18, 28060 Vicolungo"},
  { nome: "Poke House - Genova Dante", lat: 44.4051353, lng: 8.935093, indirizzo: "Piazza Dante, 10/12r, 16121 Genova"},
  { nome: "Poke House - Genova S. Vincenzo", lat: 44.4069969, lng: 8.9413338, indirizzo: "Via S. Vincenzo, 141r/143r, 16121 Genova"},
  { nome: "Poke House - Firenze Ottaviani", lat: 43.7725465, lng: 11.2493141, indirizzo: "Piazza degli Ottaviani, 11, 50123 Firenze"},
  { nome: "Poke House - Verona", lat: 45.4416204, lng: 10.9933262, indirizzo: "Largo Guido Gonella, 1, 37121 Verona"},
  { nome: "Poke House - Venezia", lat: 45.4586271, lng: 12.2129784, indirizzo: "Via Pietro Arduino, 20, 30175 Venezia"},
  { nome: "Poke House - Parma", lat: 44.799531, lng: 10.3417274, indirizzo: "Via Emilia Est, 7B, 43121 Parma"},
  { nome: "Poke House - Casalecchio di Reno", lat: 44.4889623, lng: 11.24845, indirizzo: "Via Marilyn Monroe, 2, 40033 Casalecchio di Reno"},
  { nome: "Poke House - Cagliari", lat: 39.2170607, lng: 9.1192616, indirizzo: "Via Giuseppe Garibaldi, 150, 09125 Cagliari"},
  { nome: "Poke House - Quartucciu", lat: 39.2477248, lng: 9.1671169, indirizzo: "Via delle Serre, 09044 Quartucciu"},
  { nome: "Poke House - Napoli", lat: 40.8359924, lng: 14.245075, indirizzo: "Via Chiaia, 186/187, 80132 Napoli"},
  { nome: "Poke House - Palermo Gallo", lat: 38.1262093, lng: 13.356247, indirizzo: "Via Nicolò Gallo, 1, 90139 Palermo"},
  { nome: "Poke House - Palermo Pecoraino", lat: 38.0953325, lng: 13.3983044, indirizzo: "Via Filippo Pecoraino, 90124 Palermo"},
  { nome: "Poke House - Catania", lat: 37.5143595, lng: 15.0936781, indirizzo: "Piazza Giovanni Verga, 21, 95129 Catania"},
  { nome: "Poke House - Misterbianco", lat: 37.4856945, lng: 15.0092972, indirizzo: "SP54, 95045 Misterbianco"}
);

window.puntiVendita.slice(inizioPokeHouse).forEach((punto) => {
  punto.catena = punto.catena || catenaPokeHouse;
});