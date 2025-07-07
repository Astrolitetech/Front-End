import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import '../styles/Inventory.css';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const inventoryData = [
    {
        id: 'P001',
        name: 'Wireless Mouse',
        category: 'Electronics',
        supplier: 'TechWorld Inc',
        quantity: 150,
        reorderLevel: 50,
        unitPrice: 19.99,
        lastRestocked: '2025-06-15',
        location: 'Warehouse A',
    },
    {
        id: 'P002',
        name: 'USB-C Cable',
        category: 'Accessories',
        supplier: 'CablePro',
        quantity: 300,
        reorderLevel: 100,
        unitPrice: 4.99,
        lastRestocked: '2025-07-01',
        location: 'Warehouse B',
    },
    {
        id: 'P003',
        name: 'Office Chair',
        category: 'Furniture',
        supplier: 'ErgoSupplies',
        quantity: 45,
        reorderLevel: 20,
        unitPrice: 129.0,
        lastRestocked: '2025-06-10',
        location: 'Warehouse A',
    },
];

const Inventory = () => {
    const [activeTab, setActiveTab] = useState('Tab1');

    // Bar chart data: product quantities
    const barData = inventoryData.map(item => ({ name: item.name, Quantity: item.quantity }));

    // Pie chart data: category distribution
    const categoryMap = {};
    inventoryData.forEach(item => {
        if (!categoryMap[item.category]) {
            categoryMap[item.category] = 0;
        }
        categoryMap[item.category] += item.quantity;
    });
    const pieData = Object.entries(categoryMap).map(([category, value]) => ({ name: category, value }));
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28BFE'];

    const renderTable = () => (
        <table className="inventory-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Supplier</th>
                    <th>Quantity</th>
                    <th>Reorder Level</th>
                    <th>Unit Price</th>
                    <th>Last Restocked</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {inventoryData.map((item) => (
                    <tr key={item.id} className={item.quantity <= item.reorderLevel ? 'low-stock' : ''}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.supplier}</td>
                        <td>{item.quantity}</td>
                        <td>{item.reorderLevel}</td>
                        <td>${item.unitPrice.toFixed(2)}</td>
                        <td>{item.lastRestocked}</td>
                        <td>{item.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderGraphs = () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '30px' }}>
            <div style={{ flex: 1, minWidth: 320, height: 300 }}>
                <h4>Product Quantities</h4>
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart data={barData}>
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} angle={-20} textAnchor="end" height={60} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Quantity" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div style={{ flex: 1, minWidth: 320, height: 300 }}>
                <h4>Inventory by Category</h4>
                <ResponsiveContainer width="100%" height="90%">
                    <PieChart>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );

    // Dummy data and graphs for Report tab
    const reportData = [
        { month: 'Jan', orders: 120, revenue: 2400 },
        { month: 'Feb', orders: 98, revenue: 2210 },
        { month: 'Mar', orders: 86, revenue: 2290 },
        { month: 'Apr', orders: 99, revenue: 2000 },
        { month: 'May', orders: 110, revenue: 2780 },
        { month: 'Jun', orders: 130, revenue: 3200 },
    ];

    const renderReportTable = () => (
        <table className="report-table" style={{ marginBottom: '30px', width: '100%' }}>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Orders</th>
                    <th>Revenue ($)</th>
                </tr>
            </thead>
            <tbody>
                {reportData.map((row, idx) => (
                    <tr key={idx}>
                        <td>{row.month}</td>
                        <td>{row.orders}</td>
                        <td>{row.revenue}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderReportGraphs = () => (
        <div style={{ width: '100%', minHeight: 320 }}>
            <h4>Monthly Orders & Revenue</h4>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={reportData}>
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="orders" fill="#8884d8" name="Orders" />
                    <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

    // Dummy data and graphs for Settings tab
    const [settingsData, setSettingsData] = useState([
        { setting: 'Email Alerts', enabled: 1 },
        { setting: 'Auto Reorder', enabled: 0 },
        { setting: 'Low Stock Notification', enabled: 1 },
        { setting: 'SMS Notifications', enabled: 0 },
    ]);

    const handleToggleSetting = idx => {
        setSettingsData(prev => prev.map((row, i) => i === idx ? { ...row, enabled: row.enabled ? 0 : 1 } : row));
    };

    const renderSettingsTable = () => (
        <table className="settings-table" style={{ marginBottom: '30px', width: '100%' }}>
            <thead>
                <tr>
                    <th>Setting</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {settingsData.map((row, idx) => (
                    <tr key={idx}>
                        <td>{row.setting}</td>
                        <td>
                            <button
                                onClick={() => handleToggleSetting(idx)}
                                className={`toggle-btn${row.enabled ? ' on' : ''}`}
                            >
                                {row.enabled
                                    ? <>
                                        {'On'}
                                        <span style={{background: 'white', borderRadius: '50%', padding: 2, marginLeft: 4, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            <Check size={16} style={{color: '#4caf50', verticalAlign:'middle'}} />
                                        </span>
                                    </>
                                    : <>
                                        <span style={{background: 'white', borderRadius: '50%', padding: 2, marginRight: 4, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                            <X size={16} style={{color: '#e57373', verticalAlign:'middle'}} />
                                        </span>
                                        {'Off'}
                                    </>
                                }
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    // Stacked bar chart for settings (enabled/disabled)
    const settingsStackedData = settingsData.map(s => ({
        name: s.setting,
        Enabled: s.enabled ? 1 : 0,
        Disabled: s.enabled ? 0 : 1
    }));

    const renderSettingsGraphs = () => (
        <div style={{ width: '100%', minHeight: 320 }}>
            <h4>Settings Status (Stacked Bar)</h4>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={settingsStackedData} layout="vertical">
                    <XAxis type="number" domain={[0, 1]} ticks={[0, 1]} tickFormatter={v => (v ? 'Enabled' : 'Disabled')} />
                    <YAxis dataKey="name" type="category" width={180} />
                    <Tooltip formatter={v => (v ? 'Enabled' : 'Disabled')} />
                    <Legend />
                    <Bar dataKey="Enabled" stackId="a" fill="#4caf50" name="Enabled" />
                    <Bar dataKey="Disabled" stackId="a" fill="#e57373" name="Disabled" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'Tab1':
                return (
                    <div>
                        <h3>Inventory Dashboard</h3>
                        {renderTable()}
                        {renderGraphs()}
                    </div>
                );
            case 'Tab2':
                return (
                    <div>
                        <h3>Monthly Report</h3>
                        {renderReportTable()}
                        {renderReportGraphs()}
                    </div>
                );
            case 'Tab3':
                return (
                    <div>
                        <h3>Settings</h3>
                        {renderSettingsTable()}
                        {renderSettingsGraphs()}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='inventory-container'>
            <div className='page-header'><h2>Inventory</h2></div>
            <div className='headings'>
                <button className={`heading ${activeTab === 'Tab1' ? 'active' : ''}`} onClick={() => setActiveTab('Tab1')}>Dashboard</button>
                <button className={`heading ${activeTab === 'Tab2' ? 'active' : ''}`} onClick={() => setActiveTab('Tab2')}>Report</button>
                <button className={`heading ${activeTab === 'Tab3' ? 'active' : ''}`} onClick={() => setActiveTab('Tab3')}>Settings</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                {renderContent()}
            </div>
        </div>
    );
};

export default Inventory;
