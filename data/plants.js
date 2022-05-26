const plants = [
  {
    id: 1,
    name: "Brugmansia suaveolens Tricolor",
    url: "https://m.media-amazon.com/images/I/91W+tKyZggS._AC_SL1500_.jpg",
    adress: "45 rue du code",
    city: "Anglet",
    place: "Jardiland",

    price: 4,

    color: "Tricolor",
    plantCare: "Extérieur",
    withdrawalLimit: "24/O5/2022",
  },

  {
    id: 2,
    name: "Jasmin du Chili Mandevilla sanderi",
    url: "https://img.over-blog-kiwi.com/2/69/50/37/20200629/ob_0da34c_83302670-2619044238362782-656336395152.jpg",
    adress: "45 rue du wild",
    city: "Biarritz",
    place: "Bricomarché",

    price: 2,

    color: "Tricolor",
    plantCare: "Extérieur",
    withdrawalLimit: "18/05/2022",
  },

  {
    id: 3,
    name: "Jasmin du Chili Mandevilla piramide",
    url: "https://www.monjardin.fr/sites/default/files/styles/inline_scaled_s/public/dipladenia-rouge-3096114-dam-msg-martin-staffler.jpg?itok=b-7v4d6r",
    adress: "12 rue school",
    city: "Bayonne",
    place: "La Fleur pour tous",

    price: 6,

    color: "Rouge",
    plantCare: "Extérieur",
    withdrawalLimit: "18/05/2022",
  },

  {
    id: 4,
    name: "Suzanne aux yeux noirs Thunbergia alata",
    url: "https://www.visoflora.com/images/original/suzanne-aux-yeux-noirs-visoflora-95460.jpg",
    adress: "26 rue de la royauté",
    city: "Urt",
    place: "Plante des Fleurs",

    price: 5,

    color: "Tricolor",
    plantCare: "Extérieur",
    withdrawalLimit: "16/05/2022",
  },

  {
    id: 5,
    name: "Doubles fleurs Fuchsia 'Voodoo'",
    url: "https://www.dimavasteplanten.nl/wp-content/uploads/2017/03/Campanula-portenschlagiana.jpg",
    adress: "6 rue de la code school",
    city: "Anglet",
    place: "L'idée plante",

    price: 5,

    color: "Rose-Violet",
    plantCare: "Extérieur",
    withdrawalLimit: "30/05/2022",
  },

  {
    id: 6,
    name: "Langue de feu Anthurium 'Joli Pink'",
    url: "https://www.jardiner-malin.fr/wp-content/uploads/2018/03/anthurium.jpg",
    adress: "45 rue du code",
    city: "Anglet",
    place: "Jardiland",

    price: 7,

    color: "Rose",
    plantCare: "intérieur",
    withdrawalLimit: "24/O5/2022",
  },

  {
    id: 7,
    name: "Orchidée papillon Phalaenopsis",
    url: "https://images.truffaut.com/media/catalog/productcdn:///Articles/jpg/0909000/909329_002.jpg?width=700&height=700&store=fr&image-type=image",
    adress: "45 rue du wild",
    city: "Biarritz",
    place: "Bricomarché",

    price: 2,

    color: "Rose",
    plantCare: "intérieur",
    withdrawalLimit: "17/05/2022",
  },

  {
    id: 8,
    name: "Frangipanier des îles Plumeria 'Hawaiian'",
    url: "https://www.shedeals.be/media/catalog/product/cache/9ef7833ce969b735754d6842de3b2d93/6/9/69_1_7.png",
    adress: "12 rue school",
    city: "Bayonne",
    place: "La fleurs pour tous",

    price: 9,

    color: "Rose",
    plantCare: "intérieur",
    withdrawalLimit: "23/05/2022",
  },

  {
    id: 9,
    name: "Spathiphyllum wallisii 'Pearl Cupido'",
    url: "https://m.media-amazon.com/images/I/71FfQOy6L0S._AC_SX425_.jpg",
    adress: "26 rue de la royauté",
    city: "Urt",
    place: "Plante des Fleurs",

    price: 1,

    color: "Blanc",
    plantCare: "intérieur",
    withdrawalLimit: "26/05/2022",
  },

  {
    id: 10,
    name: "Zantedeschia 'Summer Sun'",
    url: "https://cdn3.volusion.com/lhqsg.yeuga/v/vspfiles/photos/CallaSunClub-2.jpg?v-cache=1586162020",
    adress: "6 rue de la code school",
    city: "Anglet",
    place: "L'idée plante",

    price: 3,

    color: "Jaune",
    plantCare: "intérieur",
    withdrawalLimit: "29/05/2022",
  },

  {
    id: 11,
    name: "Nymphoides peltata",
    url: "https://www.florealpes.com/photos/nymphoidespeltata_11.jpg?27082019145956&PHPSESSID=91b0939367ab588ef8b0289448d8044e",
    adress: "33 rue du Roi",
    city: "Bidart",
    place: "Jardiland",

    price: 0.5,

    color: "Jaune",
    plantCare: "Bassin",
    withdrawalLimit: "12/O6/2022",
  },

  {
    id: 12,
    name: "Iris kaempferi",
    url: "https://www.fleurproshop.com/media/img/pics/original/fleur/product/IRISVAR01_G998_01.JPG?type=resize&w=610",
    adress: "1 rue de Javascript",
    city: "Hendaye",
    place: "Planta la plante",

    price: 0.2,

    color: "Violet",
    plantCare: "Bassin",
    withdrawalLimit: "17/06/2022",
  },

  {
    id: 13,
    name: "Iris versicolor",
    url: "https://www.jardin2m.com/Content/Images/Vegetaux/29IRVERS.jpg",
    adress: "1 rue de Javascript",
    city: "Hendaye",
    place: "Planta la plante",

    price: 0.1,

    color: "Bleu-Violet",
    plantCare: "Bassin",
    withdrawalLimit: "23/06/2022",
  },

  {
    id: 14,
    name: "Typha minima",
    url: "https://laforetcomestible.org/wp-content/uploads/2020/04/1200px-Typha_angustifolia2.jpg",
    adress: "26 rue de la royauté",
    city: "Urt",
    place: "Plante des Fleurs",

    price: 1,

    color: "Marron",
    plantCare: "Bassin",
    withdrawalLimit: "20/05/2022",
  },

  {
    id: 16,
    name: "Dypsis lutescens",
    url: "https://static.turbosquid.com/Preview/2020/05/08__21_03_48/1.jpg8206B8DD-09E2-4A96-B211-B1F783455564Large.jpg",
    city: "Tarnos",
    place: "Aux Plantes",

    price: 12,

    color: "Vert",
    plantCare: "Intérieur",
    withdrawalLimit: "04/O6/2022",
  },

  {
    id: 17,
    name: "Alocasia macrorrhizos",
    url: "https://www.terrelointaine.fr/597-large_default/alocasia-macrorrhiza.jpg",
    adress: "45 rue du wild",
    city: "Biarritz",
    place: "Bricomarché",

    price: 5,

    color: "Vert",
    plantCare: "Intérieur",
    withdrawalLimit: "25/05/2022",
  },

  {
    id: 18,
    name: "Strelitzia nicolai",
    url: "https://bergamotte.imgix.net/q3ao9sttneub0qe3ykqdxfkclyom?ixlib=rails-4.2.0&auto=format%2Ccompress&fit=crop&q=65&ar=1%3A1",
    adress: "98 rue Playa",
    city: "Boucau",
    place: "Belles Plantes",

    price: 14,

    color: "Vert",
    plantCare: "Intérieur",
    withdrawalLimit: "13/05/2022",
  },

  {
    id: 19,
    name: "Schefflera luseana",
    url: "https://thenunheadgardener.com/wp-content/uploads/images/2020/06/11000000000000352-1.jpg",
    adress: "26 rue de la royauté",
    city: "Urt",
    place: "Plante des Fleurs",

    price: 8,

    color: "Vert",
    plantCare: "Intérieur",
    withdrawalLimit: "16/06/2022",
  },

  {
    id: 20,
    name: "Ficus benghalensis 'Audrey'",
    url: "https://m.media-amazon.com/images/I/81872BbyD2L._AC_SY679_.jpg",
    adress: "6 rue de la code school",
    city: "Anglet",
    place: "L'idée plante",

    price: 18,

    color: "Vert",
    plantCare: "Intérieur",
    withdrawalLimit: "30/06/2022",
  },

  {
    id: 21,
    name: "Tillandsia ionantha",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Tillandsia_ionantha_2.jpg",
    adress: "6 rue du petit bayonne",
    city: "Tarnos",
    place: "Aux Plantes",

    price: 1,

    color: "Rouge",
    plantCare: "Intérieur",
    withdrawalLimit: "04/O6/2022",
  },

  {
    id: 22,
    name: "Érable rouge",
    url: "https://www.artplants.fr/media/catalog/product/cache/b940d19a38559eb8d9b0e195e9107a20/2/3/23202-nr-1.webp",
    adress: "45 rue du wild",
    city: "Biarritz",
    place: "Bricomarché",

    price: 22,

    color: "Rouge",
    plantCare: "Intérieur",
    withdrawalLimit: "25/06/2022",
  },

  {
    id: 23,
    name: "Peperomia santorini",
    url: "https://cdn.shopify.com/s/files/1/0045/4613/4065/products/DSC08348-Edit_900x.jpg?v=1633070600",
    adress: "98 rue Playa",
    city: "Boucau",
    place: "Belles Plantes",

    price: 1.5,

    color: "Gris",
    plantCare: "Intérieur",
    withdrawalLimit: "03/06/2022",
  },

  {
    id: 24,
    name: "Tillandsia xeragraphica",
    url: "https://live.staticflickr.com/65535/50675676992_354a08399e_b.jpg",
    adress: "26 rue de la reinerie",
    city: "Urcuit",
    place: "La main verte",

    price: 6,

    color: "Gris",
    plantCare: "Intérieur",
    withdrawalLimit: "25/06/2022",
  },

  {
    id: 25,
    name: "Gymnocalycium mihanovichii",
    url: "https://cdn.webshopapp.com/shops/107930/files/333380323/gymnocalycium-mihanovichii-cv-rubrum-gepfr.jpg",
    adress: "17 rue de Tailwind",
    city: "Ondres",
    place: "Une Fleur",

    price: 2.5,

    color: "Tricolor",
    plantCare: "Intérieur",
    withdrawalLimit: "21/06/2022",
  },
];

export default plants;
