const plants = [
  {
    id: 1,
    name: "Brugmansia suaveolens Tricolor",
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/85096-00-BAKI_c40ba6be-2326-45f6-a9f0-11d1537adc34_823x.jpg?v=1652229436",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/95627-00-BAKI_c8dbf3ec-30ef-4ad9-98a9-18f890f6fd36_823x.jpg?v=1652229240",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/47238-00-BAKIE_6457ecb4-ba12-40bf-95df-941c40e8f726_823x.jpg?v=1652230199",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/94686-00-BAKI_bebf6716-9c07-4450-a7d3-1c87a1d8bab8_823x.jpg?v=1652229178",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/12876-01-BAKI_084ae87d-1887-4d92-bfc9-d333d45975cf_823x.jpg?v=1652229221",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/71872-00-BAKIE_89d965c2-3ee5-46d9-93a7-568d56e76f68_823x.jpg?v=1652229829",
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
    name: "Orchidée papillon Phalaenopsis 'Vienna'",
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/58054-00-BAKIE_ada2ee84-6791-4008-950e-b8d6aab12d6f_823x.jpg?v=1652231660",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/45224-04-BAKIE_e07b0c7c-afff-4d06-bbec-55e2f944bd90_823x.jpg?v=1652229406",
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
    name: "Spathiphyllum wallisii 'Pearl Cupido",
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/41992-05-BAKIE_4f4e2c3c-3d9c-4d01-8956-a29e53b46e67_823x.jpg?v=1652232007",
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
    name: "Zantedeschia 'Summer Sun",
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/59294-00-BAKIE_16835071-0692-4698-b1c1-0f9ee01ef8b7_823x.jpg?v=1652230730",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/89517-01-BAKIE_97efc3c9-b16d-4af4-a70a-cef7ffa66b91_823x.jpg?v=1652229253",
    adress: "33 rue du Roi",
    city: "Bidart",
    place: "Jardiland",

    price: 0.50,

    color: "Jaune",
    plantCare: "Bassin",
    withdrawalLimit: "12/O6/2022",
  },

  {
    id: 12,
    name: "Iris kaempferi",
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/44024-01-BAKIE_d620744e-48b2-46ba-a879-7fcfb26f62f2_823x.jpg?v=1652231111",
    adress: "1 rue de Javascript",
    city: "Hendaye",
    place: "Planta la plante",

    price: 0.20,

    color: "Violet",
    plantCare: "Bassin",
    withdrawalLimit: "17/06/2022",
  },

  {
    id: 13,
    name: "Iris versicolor",
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/92812-06-BAKIE_823x.jpg?v=1641879879",
    adress: "1 rue de Javascript",
    city: "Hendaye",
    place: "Planta la plante",

    price: 0.10,

    color: "Bleu-Violet",
    plantCare: "Bassin",
    withdrawalLimit: "23/06/2022",
  },

  {
    id: 14,
    name: "Typha minima",
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/89513-06-BAKIE_6b450995-2d06-41f0-84a0-de9c2d6d3336_823x.jpg?v=1652230230",
    adress: "26 rue de la royauté",
    city: "Urt",
    place: "Plante des Fleurs",

    price: 1,

    color: "Marron",
    plantCare: "Bassin",
    withdrawalLimit: "20/05/2022",
  },

  {
    id: 15,
    name: "Zantedeschia 'Summer Sun",
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/59294-00-BAKIE_16835071-0692-4698-b1c1-0f9ee01ef8b7_823x.jpg?v=1652230730",
    adress: "6 rue de la code school",
    city: "Anglet",
    place: "L'idée plante",

    price: 3,

    color: "Jaune",
    plantCare: "intérieur",
    withdrawalLimit: "29/05/2022",
  },

  {
    id: 16,
    name: "Dypsis lutescens",
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/55287-06-BAKIE_32db5818-e7b8-4ebe-8e6c-3105f765f86b_823x.jpg?v=1652231184",
    adress: "6 rue du petit bayonne",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/44699-06-BAKIE_905f290f-337e-44e2-84a9-448eee77cda0_823x.jpg?v=1652231810",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/64038-09-BAKIE_adccb0a3-b823-49cf-8117-7fcd91d77992_823x.jpg?v=1652231934",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/66195-02-BAKIE_e643eeb2-75f6-47d7-81a3-618ce9305866_823x.jpg?v=1652232206",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/66193-02-BAKIE_7beca4a0-3fc4-4715-9d93-2dea1c563e15_823x.jpg?v=1652232206",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/40681-00-BAKIE_196160ba-1b63-41a0-87f6-46a45e75eafd_823x.jpg?v=1652229811",
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
    name: "Érable artificiel rouge",
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/46492-02-BAKIE_b2bfcfaf-3ed7-4806-9a36-d086b3ad6a18.jpg?v=1652229984",
    adress: "45 rue du wild",
    city: "Biarritz",
    place: "Bricomarché",

    price: 30,

    color: "Rouge",
    plantCare: "Intérieur",
    withdrawalLimit: "25/06/2022",
  },

  {
    id: 23,
    name: "Peperomia santorini",
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/55130-00-BAKIE_ee0482ff-95a6-47bc-9b80-337dce542b76_823x.jpg?v=1652231190",
    adress: "98 rue Playa",
    city: "Boucau",
    place: "Belles Plantes",

    price: 1.50,

    color: "Gris",
    plantCare: "Intérieur",
    withdrawalLimit: "03/06/2022",
  },

  {
    id: 24,
    name: "Tillandsia xeragraphica",
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/65324-01-BAKIE_7d80c56a-86f5-4c20-b275-b11ce7b111bf_823x.jpg?v=1652232146",
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
    url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/55821-00-BAKIE_610a45ed-28f1-453e-b4c2-1b4a73e710c3_823x.jpg?v=1652231213",
    adress: "17 rue de Tailwind",
    city: "Ondres",
    place: "Une Fleur",

    price: 2.50,

    color: "Tricolor",
    plantCare: "Intérieur",
    withdrawalLimit: "21/06/2022",
  },
];

export default plants;
