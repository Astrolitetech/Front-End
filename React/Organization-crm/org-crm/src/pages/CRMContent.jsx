import React, { useState } from "react";
import "../styles/CRMContent.css";

const metrics = [
  { title: "Total Farmers", value: "2", change: "+12%", color: "green" },
  { title: "Active Customers", value: "3", change: "+8%", color: "blue" },
  { title: "Milk Collected", value: "3,700L", change: "+18%", color: "purple" },
  { title: "Avg Quality", value: "88.5%", change: "+5%", color: "orange" },
  { title: "Pending Tasks", value: "2", change: "-2", color: "blue" },
  { title: "Total Revenue", value: "₹2,400", change: "+22%", color: "green" }
];


const AddCustomerModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (!/^[A-Za-z\s]+$/.test(formData.name)) newErrors.name = 'Name must contain only letters';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit number';
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("✅ Customer data:", formData);
      // TODO: handle form submission here
      onClose();
      setFormData({ name: '', email: '', phone: '', address: '' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Customer</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Customer name"
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </label>

          <label>
            Email:
            <input
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </label>

          <label>
            Phone:
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </label>

          <label>
            Address:
            <input
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className={errors.address ? 'input-error' : ''}
            />
            {errors.address && <span className="error-text">{errors.address}</span>}
          </label>

          <div className="modal-actions">
            <button type="submit">Add</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CRMContent = () => {
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  return (
    <div className="crm-content">
      <div className="page-header">
        <h2>Customer Relationship Management</h2>
      </div>
      <div className="head-line">
        <div className="left-side">
          <p>Complete customer & farmer relationship management system</p>
        </div>
        <div className="right-side">
          <button className="btn blue" onClick={() => setShowCustomerModal(true)}>Add Customer</button>
          <button className="btn green">Create Order</button>
          <button className="btn purple">Employees</button>
        </div>
      </div>
      <div className="tabs">
        <span className="tab active">Customers & Farmers</span>
        <span className="tab">Tasks & Follow-ups</span>
        <span className="tab">Milk Collections</span>
        <span className="tab">Analytics</span>
      </div>
      <div className="metrics">
        {metrics.map((m, i) => (
          <div key={i} className={`card border-${m.color}`}>
            <div className="card-title">{m.title}</div>
            <div className="card-value">{m.value}</div>
            <div className={`card-change text-${m.color}`}>
              {m.change} <span className="small">vs last month</span>
            </div>
          </div>
        ))}
      </div>
      <AddCustomerModal isOpen={showCustomerModal} onClose={() => setShowCustomerModal(false)} />
    </div>
  );
};

export default CRMContent;
