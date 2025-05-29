import React from 'react';
import './App.css';

const data = [
  {
    category: 'Work',
    links: [
      { name: 'Shopify Admin', url: 'https://admin.shopify.com/' },
      { name: 'Gmail', url: 'https://mail.google.com/' },
    ],
  },
  {
    category: 'Personal',
    links: [
      { name: 'YouTube', url: 'https://youtube.com/' },
      { name: 'Reddit', url: 'https://reddit.com/' },
    ],
  },
];

function App() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">My Dashboard</h1>
      <div className="categories">
        {data.map((cat) => (
          <div className="category" key={cat.category}>
            <h2>{cat.category}</h2>
            <ul>
              {cat.links.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
        </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
