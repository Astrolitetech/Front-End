const ctx1 = document.getElementById('sentimentChart').getContext('2d');
new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [{
      data: [65, 25, 10],
      backgroundColor: ['#4caf50', '#f44336', '#ff9800'],
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

const ctx = document.getElementById('radarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Cases Handled', 'CSAT', 'Resolution Rate', 'Avg. Time'],
    datasets: [
      {
        label: 'CSAT',
        data: [10, 10, 0, 0],
        backgroundColor: 'rgba(0, 195, 255, 0.5)',
        borderWidth: 0,
        tension: 1,
        pointStyle: 'circle'
      },
      {
        label: 'Resolution Rate',
        data: [0, 90, 90, 0],
        backgroundColor: 'rgba(88, 94, 255, 0.5)',
        borderWidth: 0,
        tension: 1,
        pointStyle: 'circle'
      },
      {
        label: 'Avg. Time',
        data: [0, 0, 0, 0],
        backgroundColor: 'rgba(255, 170, 68, 0.5)',
        borderWidth: 0,
        tension: 0.4,
        pointStyle: 'circle'
      },
      {
        label: 'Cases Handled',
        data: [40, 0, 0, 40],
        backgroundColor: 'rgba(148, 74, 255, 0.5)',
        borderWidth: 1,
        tension: 1,
        pointStyle: 'circle'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 100,
        grid: {
          circular: true
        },
        pointLabels: {
          font: {
            size: 12
          }
        },
        ticks: {
          stepSize: 20
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});

const donutCtx = document.getElementById('donutChart').getContext('2d');

new Chart(donutCtx, {
  type: 'doughnut',
  data: {
    labels: ['Resolved', 'In Progress', 'Pending', 'Escalated'],
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: [
        '#00c9a7',
        '#f5a623',
        '#b36bff',
        '#f94a4a'
      ],
      borderWidth: 2,
      hoverOffset: 10
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 16,
        }
      }
    }
  }
});


function showTab(tabId, button) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));

  // Remove active class from all buttons
  document.querySelectorAll('.tab-button').forEach(el => el.classList.remove('active'));

  // Show selected tab
  document.getElementById(tabId).classList.add('active');

  // Add active class to the clicked button
  button.classList.add('active');
}


const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Positive Feedback',
      data: [12, 19, 15, 23, 28, 35],
      borderColor: 'skyblue',
      backgroundColor: 'rgba(135, 206, 235, 0.2)',
      fill: true,
      tension: 0.3
    }, {
      label: 'Negative Feedback',
      data: [4, 6, 5, 7, 4, 3],
      borderColor: 'tomato',
      backgroundColor: 'rgba(255, 99, 71, 0.2)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  }
});

// Bar Chart - Complaints by Category
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Product', 'Service', 'Delivery', 'Billing', 'Support'],
    datasets: [{
      label: 'Number of Complaints',
      data: [10, 7, 12, 5, 8],
      backgroundColor: [
        'skyblue',
        'orange',
        'purple',
        'green',
        'red'
      ]
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const customerFeedbackopenBtn = document.getElementById("openCustomerFeedbackPopupBtn");
const teamopenBtn = document.getElementById("openTeamPopupBtn");
const customerFeedbackcloseBtn = document.getElementById("closeCustomerFeedbackPopupBtn");
const teamcloseBtn = document.getElementById("closeTeamPopupBtn");
const customerFeedbackpopup = document.getElementById("customerFeedbackpopupForm");
const teampopup = document.getElementById("teampopupForm");
const overlay = document.getElementById("overlay");

customerFeedbackopenBtn.onclick = function () {
  customerFeedbackpopup.style.display = "block";
  overlay.style.display = "block";
}

teamopenBtn.onclick = function () {
  teampopup.style.display = "block";
  overlay.style.display = "block";
}

customerFeedbackcloseBtn.onclick = function () {
  customerFeedbackpopup.style.display = "none";
  overlay.style.display = "none";
}

teamcloseBtn.onclick = function () {
  teampopup.style.display = "none";
  overlay.style.display = "none";
}

overlay.onclick = function () {
  customerFeedbackpopup.style.display = "none";
  teampopup.style.display = "none";
  overlay.style.display = "none";
}