import React from 'react';
import background from '../assets/ganesh.jpeg';
import laxmi from '../assets/laxmi.jpeg';
import groom from '../assets/groom.jpg';
import bride from '../assets/img1.jpg';
import { FaHeart } from 'react-icons/fa';

const InvitationCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" >
      <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 w-11/12 max-w-3xl">
      <div className='bg-white flex justify-around items-center mt-2 mb-2 ml-2 mr-2'>
        <img src={background} alt="" className='h-32 pt-3 pb-3 '/>
        <img src={laxmi} alt="" className='h-32 pt-3 pb-3  '/>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-gray-200 text-center py-12 px-6 relative">
        

        <h1 className="text-5xl font-bold mb-4 font-great-vibes pb-4">Wedding Invitation</h1>
          <div className="flex justify-center mb-4">
            <img src={groom} alt="Groom" className="w-36 h-36 rounded-full shadow-lg" />
            <div className="flex items-center justify-center mx-4">
            <FaHeart className="heart-3d blink" size={64} />
            </div>
            <img src={bride} alt="Bride" className="w-36 h-36 rounded-full shadow-lg" />
          </div>
          <p className="text-3xl mb-1 mt-2">Abhisek & Chinu</p>
          <p className="text-lg mt-2">December 12, 2024</p>
        </div>
        <div className="px-10 py-8 bg-white bg-opacity-80">
          <p className="text-gray-800 text-lg mb-6 font-serif text-center">
            We are delighted to invite you to our wedding celebration. Join us for a night of love, laughter, and joy.
          </p>
          <div className="text-center mb-6">
            <div className="inline-block border-2 border-dashed border-gray-400 rounded-lg py-3 px-6 mb-4 bg-gray-100">
              <p className="text-gray-800 font-bold text-xl">Venue</p>
              <p className="text-gray-700 text-lg">Sunset Beach Resort</p>
              <p className="text-gray-700 text-lg">123 Paradise Road, Miami, FL</p>
            </div>
            <div className="inline-block border-2 border-dashed border-gray-400 rounded-lg py-3 px-6 bg-gray-100">
              <p className="text-gray-800 font-bold text-xl">Time</p>
              <p className="text-gray-700 text-lg">Ceremony: 4:00 PM</p>
              <p className="text-gray-700 text-lg">Reception: 6:00 PM</p>
            </div>
          </div>
          <div className="text-center mt-8">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
