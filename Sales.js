const ctx1 = document.getElementById('monthlySalesChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Sales',
            data: [1000, 1200, 1500, 1800, 2000, 2400, 2200, 2500, 2300, 2400, 2600, 2700],
            borderColor: '#3f51b5',
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const ctx2 = document.getElementById('categoryChart').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Milk', 'Cheese', 'Butter', 'Yogurt', 'Cream', 'Paneer'],
        datasets: [{
            data: [25, 20, 15, 10, 20, 10],
            backgroundColor: ['#3f51b5', '#03a9f4', '#ff9800', '#9c27b0', '#4caf50', '#ff5722']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});