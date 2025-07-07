import React, { useState, useEffect } from "react";
import "../styles/MilkProduction.css";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";
import { Pencil, Trash } from "lucide-react";

const milkData = [
    { date: "2025-06-20", farm: "Farm A", amount: 150 },
    { date: "2025-06-21", farm: "Farm B", amount: 200 },
    { date: "2025-06-22", farm: "Farm A", amount: 180 },
    { date: "2025-06-23", farm: "Farm C", amount: 220 },
    { date: "2025-06-24", farm: "Farm B", amount: 190 },
    { date: "2025-06-25", farm: "Farm A", amount: 210 },
    { date: "2025-06-26", farm: "Farm C", amount: 230 },
    { date: "2025-06-27", farm: "Farm B", amount: 205 },
    { date: "2025-06-28", farm: "Farm A", amount: 170 },
    { date: "2025-06-29", farm: "Farm C", amount: 225 },
];

const factoryData = [
    { factory: "Factory X", location: "Townsville", dailyCapacity: 1500, currentOutput: 1200 },
    { factory: "Factory Y", location: "Greenfield", dailyCapacity: 1000, currentOutput: 800 },
    { factory: "Factory Z", location: "Lakeside", dailyCapacity: 1200, currentOutput: 950 },
];

const aggregateByFarm = () => {
    const result = {};
    milkData.forEach(({ farm, amount }) => {
        result[farm] = (result[farm] || 0) + amount;
    });
    return Object.entries(result).map(([farm, total]) => ({ farm, total }));
};

const aggregateByDate = () => {
    const result = {};
    milkData.forEach(({ date, amount }) => {
        result[date] = (result[date] || 0) + amount;
    });
    return Object.entries(result)
        .map(([date, total]) => ({ date, total }))
        .sort((a, b) => new Date(a.date) - new Date(b.date));
};

export default function MilkProduction() {
    const [formData, setFormData] = useState({
        farmer: '',
        date: '',
        totalLetters: '',
        shift: ''
    });
    const [errors, setErrors] = useState({});
    const [totalMilk, setTotalMilk] = useState(0);

    const farmTotals = aggregateByFarm();
    const dailyTotals = aggregateByDate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.farmer.trim()) newErrors.farmer = 'Farmer name is required';
        else if (!/^[A-Za-z\s]+$/.test(formData.farmer)) newErrors.farmer = 'Farmer name must contain only letters';

        if (!formData.date.trim()) newErrors.date = 'Date is required';
        else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.date)) newErrors.date = 'Date must be in YYYY-MM-DD format';

        if (!formData.totalLetters.trim()) newErrors.totalLetters = 'Total liters is required';
        else if (!/^\d+(\.\d+)?$/.test(formData.totalLetters) || Number(formData.totalLetters) <= 0) {
            newErrors.totalLetters = 'Enter a valid number greater than 0';
        }

        if (!formData.shift.trim()) newErrors.shift = 'Shift is required';
        else if (!['morning', 'evening'].includes(formData.shift.toLowerCase())) {
            newErrors.shift = 'Shift must be either "morning" or "evening"';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("✅ Milk entry data:", formData);
            setFormData({ farmer: '', date: '', totalLetters: '', shift: '' });
        }
    };

    useEffect(() => {
        const sum = milkData.reduce((acc, entry) => acc + entry.amount, 0);
        setTotalMilk(sum);
    }, []);

    return (
        <div className="page-container">
            <div className="page-header">
                <h2>Dairy Collection Monitor</h2>
            </div>

            <div className="cards">
                <div className="card red">
                    <h4>Total Entries</h4>
                    <h1>5</h1>
                </div>
                <div className="card blue">
                    <h4>Total Milk Collected</h4>
                    <h1>{totalMilk}</h1>
                </div>
                <div className="card green">
                    <h4>Average Milk Per Entry</h4>
                    <h1>{(totalMilk / milkData.length).toFixed(2)}</h1>
                </div>
            </div>

            <div className="card">
                <h2 className="subheader">Add Milk Entry</h2>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <label>
                        Farmer Name:
                        <input
                            name="farmer"
                            type="text"
                            value={formData.farmer}
                            onChange={handleChange}
                            placeholder="Farmer's name"
                            className={errors.farmer ? 'input-error' : ''}
                        />
                        {errors.farmer && <span className="error-text">{errors.farmer}</span>}
                    </label>

                    <label>
                        Date:
                        <input
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            className={errors.date ? 'input-error' : ''}
                        />
                        {errors.date && <span className="error-text">{errors.date}</span>}
                    </label>

                    <label>
                        Total Liters:
                        <input
                            name="totalLetters"
                            type="number"
                            value={formData.totalLetters}
                            onChange={handleChange}
                            placeholder="Liters of milk"
                            className={errors.totalLetters ? 'input-error' : ''}
                        />
                        {errors.totalLetters && <span className="error-text">{errors.totalLetters}</span>}
                    </label>

                    <label>
                        Shift (Morning/Evening):
                        <select
                            name="shift"
                            value={formData.shift}
                            onChange={handleChange}
                            className={errors.shift ? 'input-error' : ''}
                        >
                            <option value="" className="option-value">Select shift</option>
                            <option value="morning" className="option-value">Morning</option>
                            <option value="evening" className="option-value">Evening</option>
                        </select>
                        {errors.shift && <span className="error-text">{errors.shift}</span>}
                    </label>

                    <div className="modal-actions">
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>

            <div className="card">
                <h2 className="subheader">Recently Added Milk Entries</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="th">Farmer</th>
                            <th className="th">Date</th>
                            <th className="th">Total Liters</th>
                            <th className="th">Shift</th>
                            <th className="th">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { farmer: "Ramesh", date: "2025-06-25", total: 42, shift: "morning" },
                            { farmer: "Suresh", date: "2025-06-25", total: 38, shift: "evening" },
                            { farmer: "Geeta", date: "2025-06-26", total: 45, shift: "morning" },
                            { farmer: "Latha", date: "2025-06-26", total: 40, shift: "evening" }
                        ].map((entry, index) => (
                            <tr key={index} className="tr-hover striped">
                                <td className="td">{entry.farmer}</td>
                                <td className="td">{entry.date}</td>
                                <td className="td">{entry.total}</td>
                                <td className="td">{entry.shift}</td>
                                <td>
                                    <button className="action-btn"><Pencil className="icon" /></button>
                                    <button className="action-btn"><Trash className="icon" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Factory Table */}
            <div className="card">
                <h2 className="subheader">Milk Factory Summary</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="th">Factory</th>
                            <th className="th">Location</th>
                            <th className="th">Daily Capacity</th>
                            <th className="th">Current Output</th>
                        </tr>
                    </thead>
                    <tbody>
                        {factoryData.map((item, idx) => (
                            <tr key={idx}>
                                <td className="td">{item.factory}</td>
                                <td className="td">{item.location}</td>
                                <td className="td">{item.dailyCapacity}</td>
                                <td className="td">{item.currentOutput}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Charts */}
            <div className="card chart-container">
                <div className="chart-box">
                    <h3>Total Milk Produced by Farm</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={farmTotals}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="farm" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" fill="#3498db" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="chart-box">
                    <h3>Daily Milk Production</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={dailyTotals}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="total" stroke="#27ae60" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
