const ctxTrend = document.getElementById('productionTrendChart').getContext('2d');
new Chart(ctxTrend, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Units Produced',
            data: [4000, 4200, 4500, 4700, 4800, 5200, 5300, 5100, 5400, 5600, 5800, 6000],
            borderColor: '#3f51b5',
            fill: false,
            tension: 0.2,
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: { color: '#333' }
            }
        },
        scales: {
            y: { beginAtZero: true, ticks: { color: '#333' } },
            x: { ticks: { color: '#333' } }
        }
    }
});

const ctxCategory = document.getElementById('productionCategoryChart').getContext('2d');
new Chart(ctxCategory, {
    type: 'doughnut',
    data: {
        labels: ['Milk', 'Cheese', 'Butter', 'Yogurt', 'Cream', 'Paneer'],
        datasets: [{
            data: [25, 20, 18, 12, 15, 10],
            backgroundColor: ['#3f51b5', '#03a9f4', '#ff9800', '#9c27b0', '#4caf50', '#ff5722']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
            legend: {
                labels: { color: '#333' }
            }
        }
    }
});