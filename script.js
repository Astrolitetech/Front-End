const procurementData = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  datasets: [{
    label: 'Milk Procurement',
    data: [200, 220, 210, 230, 240, 250, 240, 260, 270, 250, 245, 235, 225, 250, 260, 275, 280, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420],
    borderColor: '#4CAF50',
    fill: false,
    tension: 0.1
  }]
};

const procurementConfig = {
  type: 'line',
  data: procurementData,
  options: {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  }
};

const procurementChart = new Chart(document.getElementById('procurementChart'), procurementConfig);

const salesRevenueData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [{
    label: 'Sales Revenue (INR)',
    data: [120000, 140000, 130000, 160000, 150000, 170000, 120000, 140000, 130000, 160000, 150000, 170000],
    backgroundColor: '#2196F3',
    borderColor: '#1976D2',
    borderWidth: 1
  }]
};

const salesRevenueConfig = {
  type: 'bar',
  data: salesRevenueData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const salesRevenueChart = new Chart(document.getElementById('salesRevenueChart'), salesRevenueConfig);

const customerGrowthData = {
  labels: ['Returning', 'New'],
  datasets: [{
    label: 'Customer Growth',
    data: [75, 25],
    backgroundColor: ['#4CAF50', '#FF9800'],
    borderColor: ['#388E3C', '#F57C00'],
    borderWidth: 1
  }]
};

const customerGrowthConfig = {
  type: 'pie',
  data: customerGrowthData,
  options: {
    responsive: true
  }
};

const customerGrowthChart = new Chart(document.getElementById('customerGrowthChart'), customerGrowthConfig);

const processingData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    label: 'Milk Procurement',
    data: [2000, 2200, 2100, 2400, 2500, 2300],
    borderColor: '#4CAF50',
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    borderWidth: 1
  },
  {
    label: 'Milk Processing',
    data: [1800, 2000, 1900, 2100, 2200, 2150],
    borderColor: '#FF5722',
    backgroundColor: 'rgba(255, 87, 34, 0.2)',
    borderWidth: 1
  }]
};

const processingConfig = {
  type: 'radar',
  data: processingData,
  options: {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0
      }
    }
  }
};

const processingChart = new Chart(document.getElementById('processingChart'), processingConfig);


function createProgressCircle(elementId, value) {
  const circle = new Chartist.Pie(`#${elementId}`, {
    series: [value, 100 - value],
    labels: []
  }, {
    donut: true,
    showLabel: false,
    donutWidth: 20,
    startAngle: 270,
    total: 100
  });
}


createProgressCircle('quality-metrics-circle', 90);
createProgressCircle('environment-impact-circle', 80);

const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});