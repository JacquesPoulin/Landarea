const plants2 = [
    {
      id: 1,
      name: "Cannabis (Cannabis sativa)",
      url: "https://j8z7y3e9.rocketcdn.me/wp-content/uploads/2020/07/lexique-cannabis.jpg",
      adress: "45 rue du code",
      city: "Anglet",
      place: "Jahland",
  
      price: 4,
  
      color: "Vert",
      plantCare: "Extérieur",
      withdrawalLimit: "24/O5/2022",
    },
  
    {
      id: 2,
      name: "Cocaine de Colombie",
      url: "https://i.insider.com/5f98592c861cb70019936b75?width=750&format=jpeg&auto=webp",
      adress: "45 rue du wild",
      city: "Biarritz",
      place: "Cocamarché",
  
      price: 2,
  
      color: "Vert",
      plantCare: "Extérieur",
      withdrawalLimit: "18/05/2022",
    },
  
    {
      id: 3,
      name: "Salvia (Salvia divinorum)",
      url: "https://media.istockphoto.com/photos/salvia-divinorum-picture-id541970422",
      adress: "12 rue school",
      city: "Bayonne",
      place: "La Sauge pour tous",
  
      price: 6,
  
      color: "Vert",
      plantCare: "Extérieur",
      withdrawalLimit: "18/05/2022",
    },
  
    {
      id: 4,
      name: "Peyolt (Lophophora williamsii)",
      url: "https://jardinage.lemonde.fr/images/dossiers/2018-09/lophophora-174334.jpg",
      adress: "26 rue de la royauté",
      city: "Urt",
      place: "Peyolt des potes",
  
      price: 5,
  
      color: "Tricolor",
      plantCare: "Extérieur",
      withdrawalLimit: "16/05/2022",
    },
  
    {
      id: 5,
      name: "Opium poppy (Papaver somniferum)",
      url: "https://media.istockphoto.com/photos/bloomed-and-unopened-poppy-flowers-picture-id108150679?k=20&m=108150679&s=612x612&w=0&h=_e_YW3-F-cJRBBs2UdYBa_QjVtGghpbiXRqPvOjSG_s=",
      adress: "6 rue de la code school",
      city: "Anglet",
      place: "L'idée planante",
  
      price: 5,
  
      color: "Rose-Violet",
      plantCare: "Extérieur",
      withdrawalLimit: "30/05/2022",
    },
  
    {
      id: 6,
      name: "Datura Stramonium",
      url: "https://www.pays-de-la-loire.ars.sante.fr/system/files/2017-08/datura-ars_0.jpg",
      adress: "45 rue du code",
      city: "Anglet",
      place: "Daturland",
  
      price: 7,
  
      color: "Vert",
      plantCare: "extérieur",
      withdrawalLimit: "24/O5/2022",
    },
  
    {
      id: 7,
      name: "Champignons mexicains",
      url: "https://www.zamnesia.fr/3724-11125-large2x/fresh-mushrooms-mexican.jpg",
      adress: "45 rue du wild",
      city: "Biarritz",
      place: "Champimarché",
  
      price: 2,
  
      color: "Blanc",
      plantCare: "intérieur",
      withdrawalLimit: "17/05/2022",
    },
  
    {
      id: 8,
      name: "Ayahuasca (Banisteriopsis caapi)",
      url: "https://c8.alamy.com/compfr/fdycy9/la-vigne-ayahuasca-banisteriopsis-caapi-est-une-medecine-traditionnelle-qui-pousse-dans-la-jungle-amazonienne-du-perou-et-de-spirales-comme-l-adn-fdycy9.jpg",
      adress: "12 rue school",
      city: "Bayonne",
      place: "Le rêve pour tous",
  
      price: 9,
  
      color: "Marron",
      plantCare: "extérieur",
      withdrawalLimit: "23/05/2022",
    },
  
    {
      id: 9,
      name: "Betel nut (Areca catechu)",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Beetle_palm_with_nut_bunch.jpg",
      adress: "26 rue de la royauté",
      city: "Urt",
      place: "Palmier des Fleurs",
  
      price: 1,
  
      color: "Vert",
      plantCare: "extérieur",
      withdrawalLimit: "26/05/2022",
    },
  
    {
      id: 10,
      name: "Tobacco (Nicotiana tabacum)",
      url: "https://candide.com/img/290be8fd-881b-4ae7-9e1e-0532e5172b76/cropped/600x480",
      adress: "6 rue de la code school",
      city: "Anglet",
      place: "L'idée clope",
  
      price: 3,
  
      color: "Vert",
      plantCare: "extérieur",
      withdrawalLimit: "29/05/2022",
    },
  
    {
      id: 11,
      name: "Nymphoides peltata",
      url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/89517-01-BAKIE_97efc3c9-b16d-4af4-a70a-cef7ffa66b91_823x.jpg?v=1652229253",
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
      url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/44024-01-BAKIE_d620744e-48b2-46ba-a879-7fcfb26f62f2_823x.jpg?v=1652231111",
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
      url: "https://cdn.shopify.com/s/files/1/0109/7079/1998/products/92812-06-BAKIE_823x.jpg?v=1641879879",
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
  
      price: 1.5,
  
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
  
      price: 2.5,
  
      color: "Tricolor",
      plantCare: "Intérieur",
      withdrawalLimit: "21/06/2022",
    },
  ];
  
  export default plants;
  