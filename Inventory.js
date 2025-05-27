function openTab(index) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        contents[i].classList.toggle('active', i === index);
    });
}

// Overall Inventory Distribution Chart (Pie)
new Chart(document.getElementById('overallInventoryChart'), {
    type: 'pie',
    data: {
        labels: ['Fertilizers', 'Seeds', 'Equipment', 'Pesticides'],
        datasets: [{
            data: [150, 200, 80, 75],
            backgroundColor: ['#2ecc71', '#3498db', '#9b59b6', '#e67e22']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Monthly Inventory Overview Chart (Doughnut)
new Chart(document.getElementById('monthlyInventoryChart'), {
    type: 'doughnut',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
            data: [120, 150, 180, 140],
            backgroundColor: ['#1abc9c', '#3498db', '#f1c40f', '#e67e22']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});