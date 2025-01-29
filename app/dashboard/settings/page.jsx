'use client'
import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <form onSubmit={handleSaveChanges} className="space-y-8">
        
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </section>

    
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Change Password</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter new password"
              />
            </div>
          </div>
        </section>

        
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notification Settings</h2>
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Enable Notifications</label>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
              className="h-5 w-5 border-gray-300 rounded-md focus:ring-2 focus:bg-bgSoft"
            />
          </div>
        </section>

       
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-bgSoft text-white py-2 px-6 rounded-lg shadow-md "
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
