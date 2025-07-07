import React, { useState } from 'react';
import '../styles/Inventory.css';

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

    const renderContent = () => {
        switch (activeTab) {
            case 'Tab1':
                return (
                    <div>
                        <h3>Inventory Dashboard</h3>
                        {renderTable()}
                    </div>
                );
            case 'Tab2':
                return <div>Content of Tab 2</div>;
            case 'Tab3':
                return <div>Content of Tab 3</div>;
            default:
                return null;
        }
    };

    return (
        <div className='inventory-container'>
            <div><h2 className='headline'>Inventory</h2></div>
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
