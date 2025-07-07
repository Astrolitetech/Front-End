import React from 'react';
import '../styles/Dashboard.css';
import { Line, Bar } from 'react-chartjs-2';
import { BadgeCheck, ChartLine, TriangleAlert, Utensils, Wheat, Search, PawPrint, Calendar, Tractor, Hospital, ClipboardList, FileChartColumn } from 'lucide-react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const milkData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Milk Production (Liters)',
                data: [120, 130, 125, 140, 135, 150, 145],
                borderColor: '#4caf50',
                backgroundColor: '#c8e6c9',
                fill: true,
                tension: 0.3,
            },
        ],
    };

    const feedStockData = {
        labels: ['Hay', 'Corn', 'Silage', 'Supplements'],
        datasets: [
            {
                label: 'Feed Stock (kg)',
                data: [200, 150, 100, 50],
                backgroundColor: ['#ffc107', '#03a9f4', '#9e9e9e', '#e91e63'],
            },
        ],
    };

    const cattleTable = [
        { id: 1, name: 'Bessie', age: 4, status: 'Healthy', lastMilked: 'Today' },
        { id: 2, name: 'MooMoo', age: 3, status: 'Observation', lastMilked: 'Yesterday' },
        { id: 3, name: 'Daisy', age: 5, status: 'Sick', lastMilked: '2 Days Ago' },
    ];

    const feedLog = [
        { date: '2025-06-22', hay: 50, corn: 30, supplements: 10 },
        { date: '2025-06-23', hay: 55, corn: 32, supplements: 12 },
        { date: '2025-06-24', hay: 52, corn: 31, supplements: 11 },
    ];

    return (
        <div className="page-container">
            <div className="page-header">
                <h2>Dairy Farm Dashboard <Wheat className='icon' /></h2>
            </div>
            <div className="dashboard-grid">
                <div className="card small-card">
                    <h4><PawPrint className='icon' /> Cow Health</h4>
                    <ul>
                        <li><BadgeCheck className='icon' /> Healthy: 45</li>
                        <li><TriangleAlert className='icon' /> Sick: 3</li>
                        <li><Search className='icon' /> Observation: 2</li>
                    </ul>
                </div>

                <div className="card small-card">
                    <h4><Calendar className='icon' /> Today's Activities</h4>
                    <ul>
                        <li><Tractor className='icon' /> Feeding: Done</li>
                        <li><PawPrint className='icon' /> Milking: Done</li>
                        <li><Hospital className='icon' /> Vet Check: Pending</li>
                    </ul>
                </div>

                <div className="card">
                    <h4><ClipboardList className='icon' /> Cattle Details</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Status</th>
                                <th>Last Milked</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cattleTable.map((cow) => (
                                <tr key={cow.id}>
                                    <td>{cow.name}</td>
                                    <td>{cow.age}</td>
                                    <td>{cow.status}</td>
                                    <td>{cow.lastMilked}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="card">
                    <h4><FileChartColumn className='icon' /> Feed Consumption Log</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Hay (kg)</th>
                                <th>Corn (kg)</th>
                                <th>Supplements (kg)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedLog.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.date}</td>
                                    <td>{entry.hay}</td>
                                    <td>{entry.corn}</td>
                                    <td>{entry.supplements}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="card">
                    <h4><ChartLine className='icon' /> Milk Production</h4>
                    <Line data={milkData} />
                </div>

                <div className="card">
                    <h4><Utensils className='icon' /> Feed Stock</h4>
                    <Bar data={feedStockData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
