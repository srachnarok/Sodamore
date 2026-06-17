window.puntiVendita = window.puntiVendita || [];
const catenaSignorvino = "Signorvino";
const inizioSignorvino = window.puntiVendita.length;

window.puntiVendita.push(
  { nome: "Signorvino - Merlata Bloom", lat: 45.5032549, lng: 9.0792348, indirizzo: "Via Daimler, 61, 20151 Milano MI, Italia", telefono: "+39 02 5962 1341" },
  { nome: "Signorvino Milano", lat: 45.4646052, lng: 9.1929673, indirizzo: "Via Pattari, 2, 20122 Milano MI, Italia", orari: { lunedi: '10:00 - 00:00', martedi: '10:00 - 00:00', mercoledi: '10:00 - 00:00', giovedi: '10:00 - 00:00', venerdi: '10:00 - 00:00', sabato: '10:00 - 00:00', domenica: '10:00 - 00:00' }, telefono: "+39 02 8909 2539" },
  { nome: "Signorvino Milano", lat: 45.4670952, lng: 9.1835969, indirizzo: "Via Dante, 13/15, 20123 Milano MI, Italia", orari: { lunedi: '10:00 - 00:00', martedi: '10:00 - 00:00', mercoledi: '10:00 - 00:00', giovedi: '10:00 - 00:00', venerdi: '10:00 - 00:00', sabato: '10:00 - 00:00', domenica: '10:00 - 00:00' }, telefono: "+39 02 8909 5369" },
  { nome: "Signorvino Milano Navigli", lat: 45.4526058, lng: 9.1762111, indirizzo: "Viale Gorizia, 30, 20144 Milano MI, Italia" },
  { nome: "Signorvino Milano", lat: 45.4813034, lng: 9.1860465, indirizzo: "Viale Pasubio, 2, 20154 Milano MI, Italia", orari: { lunedi: '10:00 - 23:00', martedi: '10:00 - 23:00', mercoledi: '10:00 - 23:00', giovedi: '10:00 - 23:00', venerdi: '10:00 - 23:00', sabato: '10:00 - 23:00', domenica: '10:00 - 23:00' }, telefono: "+39 02 2906 1583" },
  { nome: "Signorvino Arese", lat: 45.5539345, lng: 9.0433256, indirizzo: "Via Giuseppe Eugenio Luraghi, 11, 20020 Arese MI, Italia", orari: { lunedi: '10:00 - 23:00', martedi: '10:00 - 23:00', mercoledi: '10:00 - 23:00', giovedi: '10:00 - 23:00', venerdi: '10:00 - 23:00', sabato: '10:00 - 23:00', domenica: '10:00 - 23:00' }, telefono: "+39 02 9387 6081" },
  { nome: "Signorvino Rozzano", lat: 45.3919593, lng: 9.1760697, indirizzo: "Fiordaliso, Rozzano" },
  { nome: "Signorvino Bergamo", lat: 45.6925422, lng: 9.6641009, indirizzo: "Via Zambonate, 62, 24122 Bergamo BG, Italia", orari: { lunedi: '10:00 - 00:00', martedi: '10:00 - 00:00', mercoledi: '10:00 - 00:00', giovedi: '10:00 - 00:00', venerdi: '10:00 - 00:00', sabato: '10:00 - 00:00', domenica: '10:00 - 00:00' }, telefono: "+39 035 051 6002" },
  { nome: "Signorvino Curno", lat: 45.6911225, lng: 9.6103929, indirizzo: "Ccle Curno, Curno" },
  { nome: "Signorvino Brescia", lat: 45.5401146, lng: 10.2185265, indirizzo: "Piazza della Vittoria, 7, 25122 Brescia BS, Italia", orari: { lunedi: '10:00 - 00:00', martedi: '10:00 - 00:00', mercoledi: '10:00 - 00:00', giovedi: '10:00 - 00:00', venerdi: '10:00 - 00:00', sabato: '10:00 - 00:00', domenica: '10:00 - 00:00' }, telefono: "+39 030 205 3816" },
  { nome: "Signorvino Desenzano del Garda", lat: 45.4644342, lng: 10.5271561, indirizzo: "Ccle Le Vele, Desenzano del Garda" },
  { nome: "Signorvino Manerba del Garda", lat: 45.5561877, lng: 10.5350746, indirizzo: "Via Diaz, Manerba del Garda" },
  { nome: "Signorvino Torino To Dream", lat: 45.1189386, lng: 7.7152731, indirizzo: "Ccle To Dream, Torino" },
  { nome: "Signorvino Torino", lat: 45.06615, lng: 7.6939557, indirizzo: "Piazza Vittorio Veneto 1 e 3, Torino" },
  { nome: "Signorvino Torino", lat: 45.0682121, lng: 7.6835154, indirizzo: "Via Lagrange, 13, 10123 Torino TO, Italia", orari: { lunedi: '10:00 - 23:30', martedi: '10:00 - 23:30', mercoledi: '10:00 - 23:30', giovedi: '10:00 - 23:30', venerdi: '10:00 - 23:30', sabato: '10:00 - 23:30', domenica: '10:00 - 23:30' }, telefono: "+39 011 506 9180" },
  { nome: "Signorvino Torino Le Gru", lat: 45.0617659, lng: 7.5996944, indirizzo: "Via Crea, 10, 10095 Grugliasco TO, Italia", orari: { lunedi: '10:00 - 23:00', martedi: '10:00 - 23:00', mercoledi: '10:00 - 23:00', giovedi: '10:00 - 23:00', venerdi: '10:00 - 00:00', sabato: '10:00 - 00:00', domenica: '10:00 - 23:00' }, telefono: "+39 011 1903 0951" },
  { nome: "Signorvino Vicolungo", lat: 45.4745814, lng: 8.4616223, indirizzo: "The Style Outlets, Piazza Santa Caterina, 1, 28060 Vicolungo NO, Italia", orari: { lunedi: '10:00 - 20:00', martedi: '10:00 - 20:00', mercoledi: '10:00 - 20:00', giovedi: '10:00 - 20:00', venerdi: '10:00 - 20:00', sabato: '10:00 - 20:00', domenica: '10:00 - 20:00' }, telefono: "+39 0321 835269" },
  { nome: "Signorvino Bologna", lat: 44.4939103, lng: 11.3431674, indirizzo: "Piazza Maggiore, 1, 40124 Bologna BO, Italia", orari: { lunedi: '10:00 - 00:00', martedi: '10:00 - 00:00', mercoledi: '10:00 - 00:00', giovedi: '10:00 - 00:00', venerdi: '10:00 - 01:00', sabato: '10:00 - 01:00', domenica: '10:00 - 00:00' }, telefono: "+39 051 268060" },
  { nome: "Signorvino Casalecchio di Reno", lat: 44.4883316, lng: 11.2490242, indirizzo: "Cadriano Corner Signorvino, Casalecchio di Reno" },
  { nome: "Signorvino Granarolo dell'Emilia", lat: 44.5529936, lng: 11.4477407, indirizzo: "Ccle Shopville Granreno, Granarolo dell'Emilia" },
  { nome: "Signorvino Rimini", lat: 44.0398453, lng: 12.5866762, indirizzo: "Ccle Le Befane, Rimini" },
  { nome: "Signorvino Fidenza Village", lat: 44.8778438, lng: 10.0934007, indirizzo: "Fidenza Village, Via S. Michele Campagna, 43036 Fidenza PR, Italia", orari: { lunedi: '10:00 - 22:00', martedi: '10:00 - 22:00', mercoledi: '10:00 - 22:00', giovedi: '10:00 - 22:00', venerdi: '10:00 - 22:00', sabato: '10:00 - 22:00', domenica: '10:00 - 22:00' }, telefono: "+39 0524 533420" },
  { nome: "Signorvino Firenze", lat: 43.7734894, lng: 11.249783, indirizzo: "Piazza S. Maria Novella, Firenze" },
  { nome: "Signorvino Firenze", lat: 43.7679361, lng: 11.2530188, indirizzo: "Via de' Bardi, 46/R, 50125 Firenze FI, Italia", orari: { lunedi: '10:00 - 00:00', martedi: '10:00 - 00:00', mercoledi: '10:00 - 00:00', giovedi: '10:00 - 00:00', venerdi: '10:00 - 00:00', sabato: '10:00 - 00:00', domenica: '10:00 - 00:00' }, telefono: "+39 055 286258" },
  { nome: "Signorvino Foiano della Chiana", lat: 43.2279217, lng: 11.7996983, indirizzo: "Via delle Farniole, Foiano della Chiana" },
  { nome: "Signorvino Affi", lat: 45.5509666, lng: 10.790181, indirizzo: "Via San Pieretto 15, Affi" },
  { nome: "Signorvino Dossobuono", lat: 45.3963851, lng: 10.8989614, indirizzo: "Hotel Veronesi La Torre, Dossobuono" },
  { nome: "Signorvino Oppeano Vallese", lat: 45.3280562, lng: 11.0817438, indirizzo: "Oppeano Corner Wine, Oppeano Vallese" },
  { nome: "Signorvino Verona", lat: 45.4192663, lng: 10.992683, indirizzo: "Corso Porta Nuova, 2, 37122 Verona VR, Italia", orari: { lunedi: '10:00 - 00:00', martedi: '10:00 - 00:00', mercoledi: '10:00 - 00:00', giovedi: '10:00 - 00:00', venerdi: '10:00 - 00:00', sabato: '10:00 - 00:00', domenica: '10:00 - 00:00' }, telefono: "+39 045 800 9031" },
  { nome: "Signorvino Verona", lat: 45.4426488, lng: 10.9970221, indirizzo: "Piazza Erbe 17b, Verona" },
  { nome: "Signorvino Verona", lat: 45.4664316, lng: 10.9610266, indirizzo: "Via Preare 15, Verona" },
  { nome: "Signorvino Vicenza", lat: 45.5482293, lng: 11.5492669, indirizzo: "Piazza Matteotti 33, Vicenza" },
  { nome: "Signorvino Castel Romano", lat: 41.719602, lng: 12.4501257, indirizzo: "Via Ponte di Piscina Cupa, 64, 00128 Castel Romano RM, Italia", orari: { lunedi: '10:00 - 20:00', martedi: '10:00 - 20:00', mercoledi: '10:00 - 20:00', giovedi: '10:00 - 20:00', venerdi: '10:00 - 21:00', sabato: '10:00 - 21:00', domenica: '10:00 - 21:00' }, telefono: "+39 06 505 0288" },
  { nome: "Signorvino Maximo", lat: 41.8155992, lng: 12.4839846, indirizzo: "Maximo Shopping Center, Via Laurentina, 865, 00143 Roma RM, Italia", orari: { lunedi: '10:00 - 22:00', martedi: '10:00 - 22:00', mercoledi: '10:00 - 22:00', giovedi: '10:00 - 22:00', venerdi: '10:00 - 23:00', sabato: '10:00 - 23:00', domenica: '10:00 - 22:00' }, telefono: "+39 06 501 0262" },
  { nome: "Signorvino Roma", lat: 41.9056637, lng: 12.4939766, indirizzo: "Piazza Barberini, 12, 00187 Roma RM, Italia", orari: { lunedi: '10:00 - 00:00', martedi: '10:00 - 00:00', mercoledi: '10:00 - 00:00', giovedi: '10:00 - 00:00', venerdi: '10:00 - 00:00', sabato: '10:00 - 00:00', domenica: '10:00 - 00:00' }, telefono: "+39 06 4201 1332" },
  { nome: "Signorvino Valmontone", lat: 41.7610196, lng: 12.9377484, indirizzo: "Valmontone Outlet, Via della Pace, 00038 Valmontone RM, Italia", orari: { lunedi: '10:00 - 21:00', martedi: '10:00 - 21:00', mercoledi: '10:00 - 21:00', giovedi: '10:00 - 21:00', venerdi: '10:00 - 22:00', sabato: '10:00 - 22:00', domenica: '10:00 - 21:00' }, telefono: "+39 06 941 7349" },
  { nome: "Signorvino Bolzano", lat: 46.4983332, lng: 11.3551512, indirizzo: "Piazza Walther , Bolzano" },
  { nome: "Signorvino Merano", lat: 46.6713735, lng: 11.1610996, indirizzo: "Portici, 104, 39012 Merano BZ, Italia", orari: { lunedi: '10:00 - 00:00', martedi: '10:00 - 00:00', mercoledi: '10:00 - 00:00', giovedi: '10:00 - 00:00', venerdi: '10:00 - 00:00', sabato: '10:00 - 00:00', domenica: '10:00 - 00:00' }, telefono: "+39 0473 692754" },
  { nome: "Signorvino Torre Annunziata", lat: 40.748627, lng: 14.4705334, indirizzo: "Ccle Maximall Pompei, Torre Annunziata" }
);

window.puntiVendita.slice(inizioSignorvino).forEach((punto) => {
  punto.catena = punto.catena || catenaSignorvino;
});