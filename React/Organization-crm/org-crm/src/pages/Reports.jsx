import React from 'react';
import '../styles/Reports.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dummyReports = [
  { id: 1, title: 'Monthly Sales', date: '2025-06-30', summary: 'Sales increased by 12% compared to last month.' },
  { id: 2, title: 'Inventory Status', date: '2025-06-28', summary: 'Inventory levels are optimal. No shortages detected.' },
  { id: 3, title: 'Customer Feedback', date: '2025-06-25', summary: 'Customer satisfaction remains high at 92% positive.' },
];

const salesData = [
  { month: 'Jan', sales: 12000, returns: 300, profit: 3500 },
  { month: 'Feb', sales: 13500, returns: 250, profit: 4100 },
  { month: 'Mar', sales: 14200, returns: 400, profit: 4300 },
  { month: 'Apr', sales: 15800, returns: 320, profit: 4800 },
  { month: 'May', sales: 17000, returns: 280, profit: 5200 },
  { month: 'Jun', sales: 19200, returns: 350, profit: 6000 },
];

const Reports = () => (
  <div className="page-container">
    <div className="page-header"><h2>Reports</h2></div>
    <div className="reports-summary">
      <table className="table">
        <thead>
          <tr>
            <th className="th">Report Title</th>
            <th className="th">Date</th>
            <th className="th">Summary</th>
          </tr>
        </thead>
        <tbody>
          {dummyReports.map(report => (
            <tr key={report.id}>
              <td className="td">{report.title}</td>
              <td className="td">{report.date}</td>
              <td className="td">{report.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="reports-graph-container">
      <div className="reports-graph-title">Monthly Sales, Returns & Profit</div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={salesData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#4f8cff" name="Sales" />
          <Bar dataKey="returns" fill="#e57373" name="Returns" />
          <Bar dataKey="profit" fill="#4caf50" name="Profit" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default Reports;
