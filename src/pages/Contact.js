import React, { useState } from 'react';

const Contact = () => {
const [formData, setFormData] = useState({
name: '',
email: '',
message: ''
});

const handleChange = (e) => {
const { name, value } = e.target;
setFormData({
...formData,
[name]: value
});
};

const handleSubmit = (e) => {
e.preventDefault();
// Aquí puedes manejar el envío del formulario, como hacer una petición HTTP
console.log('Form submitted:', formData);
};

return (
<div className='container'>
  <div class="pt-5">
    <h2 className="text-center bb2">Contact Us</h2>
  </div>
  <div className="contact-form container col-12 col-md-6 col-lg-4 p-5">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange}
          required />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" id="email" name="email" className="form-control" placeholder='@gmail.com'
          value={formData.email} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message:</label>
        <textarea id="message" name="message" className="form-control" value={formData.message} onChange={handleChange}
          required></textarea>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary">Send Message</button>
      </div>
    </form>
  </div>
</div>
);
};

export default Contact;