import React, { useState } from "react";
import { FaUserFriends, FaTractor, FaRupeeSign, FaTasks, FaUserTie, FaClipboardList, FaUsers } from "react-icons/fa";
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
    <div className="page-container crm-hero">
      <div className="crm-header">
        <div className="crm-header-title">
          <h2>Customer Relationship Management</h2>
        </div>
      </div>
      <div className="crm-toolbar">
        <p className="crm-toolbar-desc">Complete customer & farmer relationship management system</p>
        <div className="crm-toolbar-actions">
          <button className="btn blue" onClick={() => setShowCustomerModal(true)}>Add Customer</button>
          <button className="btn green">Create Order</button>
          <button className="btn purple">Employees</button>
        </div>
      </div>
      <div className="tabs" style={{ width: '100%', maxWidth: 1200, margin: '0 auto', marginBottom: 24 }}>
        <span className="tab active">Customers & Farmers</span>
        <span className="tab">Tasks & Follow-ups</span>
        <span className="tab">Milk Collections</span>
        <span className="tab">Analytics</span>
      </div>
      <div className="crm-grid">
        <div className="crm-card">
          <h4><FaUserFriends style={{ marginRight: 8 }} /> Customers</h4>
          <ul>
            <li><b>Active:</b> 3</li>
            <li><b>Pending:</b> 2</li>
            <li><b>Total:</b> 5</li>
          </ul>
        </div>
        <div className="crm-card">
          <h4><FaTractor style={{ marginRight: 8 }} /> Farmers</h4>
          <ul>
            <li><b>Registered:</b> 2</li>
            <li><b>Milk Collected:</b> 3,700L</li>
            <li><b>Avg Quality:</b> 88.5%</li>
          </ul>
        </div>
        <div className="crm-card">
          <h4><FaRupeeSign style={{ marginRight: 8 }} /> Revenue</h4>
          <ul>
            <li><b>This Month:</b> ₹2,400</li>
            <li><b>Growth:</b> +22%</li>
            <li><b>Pending Orders:</b> 2</li>
          </ul>
        </div>
        <div className="crm-card">
          <h4><FaTasks style={{ marginRight: 8 }} /> Tasks</h4>
          <ul>
            <li><b>Open:</b> 2</li>
            <li><b>Completed:</b> 8</li>
            <li><b>Follow-ups:</b> 3</li>
          </ul>
        </div>
      </div>

      {/* Employees Table */}
      <div className="crm-card" style={{ marginTop: 32 }}>
        <h4><FaUserTie style={{ marginRight: 8 }} /> Employees</h4>
        <table className="crm-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Ravi Kumar</td><td>Manager</td><td>Active</td></tr>
            <tr><td>Priya Singh</td><td>Sales</td><td>Active</td></tr>
            <tr><td>Ajay Patel</td><td>Support</td><td>On Leave</td></tr>
          </tbody>
        </table>
      </div>

      {/* Orders Table */}
      <div className="crm-card" style={{ marginTop: 32 }}>
        <h4><FaClipboardList style={{ marginRight: 8 }} /> Recent Orders</h4>
        <table className="crm-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>#1001</td><td>Sunil Sharma</td><td>₹800</td><td>Completed</td></tr>
            <tr><td>#1002</td><td>Meena Joshi</td><td>₹1200</td><td>Pending</td></tr>
            <tr><td>#1003</td><td>Ravi Kumar</td><td>₹400</td><td>Completed</td></tr>
          </tbody>
        </table>
      </div>

      {/* Customers Table */}
      <div className="crm-card" style={{ marginTop: 32, marginBottom: 32 }}>
        <h4><FaUsers style={{ marginRight: 8 }} /> Customers</h4>
        <table className="crm-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Sunil Sharma</td><td>sunil@gmail.com</td><td>9876543210</td><td>Active</td></tr>
            <tr><td>Meena Joshi</td><td>meena@gmail.com</td><td>9123456780</td><td>Active</td></tr>
            <tr><td>Ravi Kumar</td><td>ravi@gmail.com</td><td>9988776655</td><td>Inactive</td></tr>
          </tbody>
        </table>
      </div>

      <AddCustomerModal isOpen={showCustomerModal} onClose={() => setShowCustomerModal(false)} />
    </div>
  );
};

export default CRMContent;
