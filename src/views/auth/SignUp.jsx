import React, { useState } from 'react';
import { Button, Input, Card } from '@horizon-ui/react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" color="primary" className="w-full">
            Sign Up
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default RegistrationForm;