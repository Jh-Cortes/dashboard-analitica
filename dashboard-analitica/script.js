window.onload = function () {
  // Mostrar datos generales
  document.getElementById('visitasHoy').textContent = datosDashboard.visitasHoy;
  document.getElementById('usuariosActivos').textContent = datosDashboard.usuariosActivos;

  // Configurar gráficos con Chart.js

  // Visitas por Día - gráfico de línea
  const ctxVisitas = document.getElementById('visitasChart').getContext('2d');
  new Chart(ctxVisitas, {
    type: 'line',
    data: {
      labels: datosDashboard.visitasPorDia.dias,
      datasets: [{
        label: 'Visitas',
        data: datosDashboard.visitasPorDia.visitas,
        backgroundColor: 'rgba(3, 169, 244, 0.2)',
        borderColor: 'rgba(3, 169, 244, 1)',
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgba(3, 169, 244, 1)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Navegadores - gráfico de barras
  const ctxNavegadores = document.getElementById('navegadoresChart').getContext('2d');
  new Chart(ctxNavegadores, {
    type: 'bar',
    data: {
      labels: datosDashboard.navegadores.nombres,
      datasets: [{
        label: 'Usuarios',
        data: datosDashboard.navegadores.visitas,
        backgroundColor: 'rgba(3, 169, 244, 0.8)',
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Ubicación por País - gráfico de pastel
  const ctxPaises = document.getElementById('paisesChart').getContext('2d');
  new Chart(ctxPaises, {
    type: 'pie',
    data: {
      labels: datosDashboard.ubicacionPaises.paises,
      datasets: [{
        label: 'Visitas',
        data: datosDashboard.ubicacionPaises.visitas,
        backgroundColor: [
          '#03a9f4',
          '#0288d1',
          '#81d4fa',
          '#01579b',
          '#4fc3f7'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
};
