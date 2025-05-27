const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const target = tab.dataset.tab;
        contents.forEach(content => {
            if (content.id === target) {
                content.hidden = false;
                content.classList.add('active');
            } else {
                content.hidden = true;
                content.classList.remove('active');
            }
        });
    });
});

// Charts setup - same data as before (reuse your chart code)
// Inspections Per Month (line)
const ctxInspectionsLine = document.getElementById('inspectionsLineChart').getContext('2d');
new Chart(ctxInspectionsLine, {
    type: 'line',
    data: {
        labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Inspections',
            data: [200, 210, 230, 250, 260, 300],
            borderColor: '#2b6cb0',
            backgroundColor: 'rgba(43, 108, 176, 0.15)',
            fill: true,
            tension: 0.3,
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, stepSize: 50 }
        }
    }
});

// Pass vs Fail doughnut
const ctxPassFail = document.getElementById('passFailDoughnutChart').getContext('2d');
new Chart(ctxPassFail, {
    type: 'doughnut',
    data: {
        labels: ['Passed', 'Failed', 'Under Review'],
        datasets: [{
            data: [925, 38, 37],
            backgroundColor: ['#38a169', '#e53e3e', '#dd6b20'],
            hoverOffset: 30
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});

// Inspection Types pie chart
const ctxInspectionTypes = document.getElementById('inspectionTypesPieChart').getContext('2d');
new Chart(ctxInspectionTypes, {
    type: 'pie',
    data: {
        labels: ['Visual', 'Functional', 'Dimensional', 'Other'],
        datasets: [{
            data: [600, 350, 300, 100],
            backgroundColor: ['#2b6cb0', '#dd6b20', '#38a169', '#805ad5'],
            hoverOffset: 25
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'right' } }
    }
});

// Inspection Duration bar chart
const ctxInspectionDuration = document.getElementById('inspectionDurationBarChart').getContext('2d');
new Chart(ctxInspectionDuration, {
    type: 'bar',
    data: {
        labels: ['Visual', 'Functional', 'Dimensional', 'Other'],
        datasets: [{
            label: 'Avg Duration (mins)',
            data: [25, 50, 60, 40],
            backgroundColor: '#2b6cb0'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10
                }
            }
        }
    }
});

// Defects by Type bar chart
const ctxDefectsType = document.getElementById('defectsByTypeBarChart').getContext('2d');
new Chart(ctxDefectsType, {
    type: 'bar',
    data: {
        labels: ['Surface', 'Functional', 'Dimensional', 'Other'],
        datasets: [{
            label: 'Number of Defects',
            data: [18, 15, 10, 5],
            backgroundColor: '#e53e3e'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true, stepSize: 5 }
        }
    }
});

// Defect Severity pie chart
const ctxDefectSeverity = document.getElementById('defectSeverityPieChart').getContext('2d');
new Chart(ctxDefectSeverity, {
    type: 'pie',
    data: {
        labels: ['High', 'Medium', 'Low'],
        datasets: [{
            data: [20, 18, 10],
            backgroundColor: ['#e53e3e', '#dd6b20', '#38a169'],
            hoverOffset: 25
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
    }
});

// Defect Trend line chart
const ctxDefectTrend = document.getElementById('defectTrendLineChart').getContext('2d');
new Chart(ctxDefectTrend, {
    type: 'line',
    data: {
        labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Defects',
            data: [40, 45, 42, 48, 50, 48],
            borderColor: '#e53e3e',
            backgroundColor: 'rgba(229, 62, 62, 0.15)',
            fill: true,
            tension: 0.3,
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, stepSize: 10 }
        }
    }
});

// Pass Rate Trend line chart
const ctxPassRateTrend = document.getElementById('passRateTrendLineChart').getContext('2d');
new Chart(ctxPassRateTrend, {
    type: 'line',
    data: {
        labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Pass Rate %',
            data: [90, 91, 92, 92.5, 93, 92.5],
            borderColor: '#38a169',
            backgroundColor: 'rgba(56, 161, 105, 0.15)',
            fill: true,
            tension: 0.3,
            pointRadius: 4
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { min: 80, max: 100, ticks: { stepSize: 2 } }
        }
    }
});