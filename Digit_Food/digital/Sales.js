// import React from "react";
// import { CategoryScale } from "chart.js";
// import { Line } from "react-chartjs-2";
// import Chart  from "chart.js/auto";
// import Sidebar from "./Sidebar";
// import '../styles/Sales.css';
// import Searchbar from "./Searchbar";

// function Sales() {

//     var info = {
//         labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
//         datasets: [
//             {
//                 label: "Nombre de clients par jour",
//                 data: [0, 25, 50, 75, 100, 150, 200, 500, 1000, 2500, 5000, 10000],
//                 pointRadius: 4, borderWidth: 1
//             }
//         ]
//     };

//     var food = {
//         labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
//         datasets: [
//             {
//                 label: 'Nombre de commandes par jour',
//                 data: [250, 50, 75, 100, 150, 200, 500, 1500, 400, 1000, 1500],
//                 borderColor: 'green', backgroundColor: 'maroon'
//             }
//         ]
//     };

//     Chart.register(CategoryScale);
    
//     return (
//         <div className="Sales">
//             <Sidebar/>
//             <Searchbar/> 
//             <div className="clients">
//                 <Line data={info} />
//             </div>
//             <div className="Command">
//                 <Line data={food}/>
//             </div>
//         </div>
//     );
// }

// export default Sales;

// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import '../styles/Sales.css';
// import Sidebar from './Sidebar.js';
// import Searchbar from './Searchbar.jsx';

// const Sales = () => {
//   const [dateRange, setDateRange] = useState("7 Days");

//   // Données de test pour les graphiques
//   const data = {
//     // Données pour le graphique clients par jour
//     clientsData: {
//       labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
//       datasets: [
//         {
//           label: "Nombre de clients par jour",
//           data: [0, 25, 50, 75, 100, 150, 200],
//         },
//       ],
//     },
//     // Données pour le graphique commandes par jour
//     ordersData: {
//       labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
//       datasets: [
//         {
//           label: 'Nombre de commandes par jour',
//           data: [250, 50, 75, 100, 150, 200, 500],
//         },
//       ],
//     },
//   };

//   // Logique pour changer la plage de dates
//   const handleDateRangeChange = (range) => {
//     setDateRange(range);
//     // Mettez à jour les données des graphiques en fonction de la plage de dates sélectionnée
//     // Vous pouvez faire appel à une API ici pour obtenir les données actualisées
//   };

//   return (
//     <div className="Sales">
//         <Sidebar/>
//         <Searchbar/>
//       {/* Composant de filtres interactifs */}
//       <div className="Filters">
//         <button onClick={() => handleDateRangeChange("7 Days")}>7 Days</button>
//         {/* <button onClick={() => handleDateRangeChange("30 Days")}>30 Days</button> */}
//         {/* Ajoutez d'autres options de plage de dates selon vos besoins */}
//       </div>
//       {/* Graphique clients par jour */}
//       <div className="ClientsChart">
//         <h2>Nombre de clients par jour - {dateRange}</h2>
//         <Line data={data.clientsData} />
//       </div>
//       {/* Graphique commandes par jour */}
//       <div className="OrdersChart">
//         <h2>Nombre de commandes par jour - {dateRange}</h2>
//         <Line data={data.ordersData} />
//       </div>
//     </div>
//   );
// };

// export default Sales;

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import '../styles/Sales.css';
import Sidebar from "./Sidebar.js";
import Searchbar from "./Searchbar.jsx";

const Sales = () => {
  const [activeTab, setActiveTab] = useState("clients");

  // Données de test pour les graphiques
  const data = {
    clients: {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      datasets: [
        {
          label: "Nombre de clients par jour",
          data: [0, 25, 50, 75, 100, 150, 200],
        },
      ],
    },
    orders: {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      datasets: [
        {
          label: 'Nombre de commandes par jour',
          data: [250, 50, 75, 100, 150, 200, 500],
        },
      ],
    },
  };

  return (
    <div className="Sales">
        <Sidebar/>
        <Searchbar/>
      {/* Onglets pour basculer entre les graphiques */}
      <div className="Tabs">
        <button onClick={() => setActiveTab("clients")}>Clients</button>
        <button onClick={() => setActiveTab("orders")}>Commandes</button>
      </div>
      {/* Affichage du graphique en fonction de l'onglet actif */}
      <div className="Chart">
        {activeTab === "clients" && <Line data={data.clients} />}
        {activeTab === "orders" && <Line data={data.orders} />}
      </div>
    </div>
  );
};

export default Sales;
