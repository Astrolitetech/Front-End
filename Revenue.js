// Revenue Chart (Bar)
const revenueChart = new Chart(document.getElementById('revenueChart'), {
    type: 'bar',
    data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
            {
                label: 'Net Profit',
                data: [40, 45, 50, 60, 55, 53, 57, 59, 58],
                backgroundColor: '#007bff'
            },
            {
                label: 'Revenue',
                data: [80, 95, 100, 105, 110, 100, 108, 115, 102],
                backgroundColor: '#28a745'
            },
            {
                label: 'Free Cash Flow',
                data: [30, 25, 28, 34, 40, 37, 42, 45, 38],
                backgroundColor: '#ffc107'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: '$ (Thousands)'
                }
            }
        }
    }
});

// Sales and Orders Chart (Line)
const salesChart = new Chart(document.getElementById('salesChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Order Sales',
                data: [40, 55, 45, 50, 44, 48, 42, 40, 50, 48, 52, 47],
                borderColor: '#007bff',
                backgroundColor: 'rgba(0,123,255,0.2)',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Purchase Orders',
                data: [42, 44, 43, 41, 39, 40, 38, 37, 41, 40, 42, 41],
                borderColor: '#28a745',
                backgroundColor: 'rgba(40,167,69,0.2)',
                fill: true,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Sales Orders'
                }
            }
        }
    }
});