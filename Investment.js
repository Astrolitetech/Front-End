const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        tabContents.forEach(tc => {
            tc.id === target ? tc.classList.add('active') : tc.classList.remove('active');
        });
    });
});

// Charts initialization

// Overview - Portfolio Growth Line Chart
const ctxGrowth = document.getElementById('portfolioGrowthChart').getContext('2d');
new Chart(ctxGrowth, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Portfolio Value ($)',
            data: [1000000, 1020000, 1050000, 1080000, 1100000, 1150000, 1175000, 1200000, 1230000, 1250000, 1270000, 1300000],
            borderColor: '#3f51b5',
            fill: false,
            tension: 0.3,
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true },
        },
        scales: {
            y: { beginAtZero: false },
        }
    }
});

// Overview - Asset Allocation Pie Chart
const ctxAllocation = document.getElementById('assetAllocationChart').getContext('2d');
new Chart(ctxAllocation, {
    type: 'doughnut',
    data: {
        labels: ['Tech', 'Real Estate', 'Bonds', 'Energy', 'Healthcare', 'Cash'],
        datasets: [{
            data: [32, 24, 18, 10, 12, 4],
            backgroundColor: ['#3f51b5', '#03a9f4', '#4caf50', '#ff9800', '#9c27b0', '#757575'],
            hoverOffset: 30
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
        }
    }
});

// Portfolio Tab - Portfolio Allocation Bar Chart
const ctxPortfolioAllocation = document.getElementById('portfolioAllocationBarChart').getContext('2d');
new Chart(ctxPortfolioAllocation, {
    type: 'bar',
    data: {
        labels: ['Tech Fund', 'Real Estate', 'Bond Fund', 'Energy Fund', 'Healthcare Fund'],
        datasets: [{
            label: 'Value ($)',
            data: [400000, 300000, 250000, 150000, 150000],
            backgroundColor: '#3f51b5'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: { callback: (val) => `$${val / 1000}k` }
            }
        }
    }
});

// Portfolio Tab - Risk vs Return Scatter Chart
const ctxRiskReturn = document.getElementById('riskReturnChart').getContext('2d');
new Chart(ctxRiskReturn, {
    type: 'scatter',
    data: {
        datasets: [
            {
                label: 'Portfolios',
                data: [
                    { x: 15.2, y: 8.5 },
                    { x: 8.5, y: 4.2 },
                    { x: 6.2, y: 2.5 },
                    { x: 9.1, y: 7.8 },
                    { x: 12.0, y: 6.0 }
                ],
                backgroundColor: '#ff9800'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Return %'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Risk Level (scale 1-10)'
                },
                min: 0,
                max: 10
            }
        }
    }
});

// Market Trends Tab - Market Indices Line Chart
const ctxMarketIndices = document.getElementById('marketIndicesChart').getContext('2d');
new Chart(ctxMarketIndices, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'S&P 500',
                data: [4450, 4475, 4485, 4490, 4500],
                borderColor: '#3f51b5',
                fill: false,
                tension: 0.3
            },
            {
                label: 'NASDAQ',
                data: [13050, 12980, 12940, 12850, 13000],
                borderColor: '#03a9f4',
                fill: false,
                tension: 0.3
            },
            {
                label: 'Dow Jones',
                data: [34900, 34950, 35000, 34980, 35000],
                borderColor: '#ff9800',
                fill: false,
                tension: 0.3
            },
            {
                label: 'Russell 2000',
                data: [2280, 2290, 2300, 2310, 2300],
                borderColor: '#4caf50',
                fill: false,
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        },
        scales: {
            y: { beginAtZero: false }
        }
    }
});