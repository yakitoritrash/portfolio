import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Netproject.css';

const Aiproject = () => {
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const cards = [{
    title: 'AI Agent Framework',
    description: 'A lightweight, extensible framework for composing AI agents, model providers, tools, and simple workflows.',
    path: '/ai-agent',
  }];

  useEffect(() => window.scrollTo(0, 0), []);

  return <>
    <div className="network"><h1 className="network-title">AI PROJECTS.</h1></div>
    <div className="tiles">
      {cards.map((card, index) => <div className="card" key={card.title} ref={(el) => { cardRefs.current[index] = el; }} onClick={() => navigate(`/blog${card.path}`)}>
        <div className="card-title">{card.title}</div>
        <div className="card-description">{card.description}</div>
      </div>)}
    </div>
  </>;
};

export default Aiproject;
