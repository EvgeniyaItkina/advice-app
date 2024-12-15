"use client";

import { useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [currentAdvice, setCurrentAdvice] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getRandomAdvice = (advices: string[]): string => {
    const randomIndex = Math.floor(Math.random() * advices.length);
    return advices[randomIndex];
  };

  const handleHealthAdvice = async () => {
    try {
      const response = await axios.get<string[]>('/api/health-advices');
      const advice = getRandomAdvice(response.data);
      setCurrentAdvice(advice);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error from healthAdvice', error);
    }
  };

  const handleJuniorAdvice = async () => {
    try {
      const response = await axios.get<string[]>('/api/junior-advices');
      const advice = getRandomAdvice(response.data);
      setCurrentAdvice(advice);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error from juniorAdvice', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="container">
      <div>
      </div>
      <button className='button' onClick={handleHealthAdvice}>
        Get health advice
      </button>
      <button className='button' onClick={handleJuniorAdvice}>
        Get junior advice
      </button>

      {isModalOpen && (
        <div className="modalOverlay">
          <div className="modalContent">
            <p>{currentAdvice}</p>
            <button className="modalButton" onClick={closeModal}>Yes, boss</button>
          </div>
        </div>
      )}
    </div>
  );
}