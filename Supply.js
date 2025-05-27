function openTab(index) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        contents[i].classList.toggle('active', i === index);
    });
}

// Overall Supply Distribution Chart (Pie)
new Chart(document.getElementById('overallSupplyChart'), {
    type: 'pie',
    data: {
        labels: ['Fertilizers', 'Seeds', 'Pesticides', 'Equipment'],
        datasets: [{
            data: [1200, 900, 450, 700],
            backgroundColor: ['#2ecc71', '#3498db', '#e74c3c', '#9b59b6']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Seed Supply Status Chart (Doughnut)
new Chart(document.getElementById('seedSupplyChart'), {
    type: 'doughnut',
    data: {
        labels: ['Corn', 'Wheat', 'Soybean', 'Rice'],
        datasets: [{
            data: [300, 250, 200, 150],
            backgroundColor: ['#1abc9c', '#f39c12', '#2980b9', '#c0392b']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});