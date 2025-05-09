import { useState } from 'react';
import { CheckCircle, PlusCircle, Search, User, BarChart2, Users, Lock, CreditCard, Trash2 } from 'lucide-react';

export default function SubscriptionPage() {
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });
  
  const [showCardModal, setShowCardModal] = useState(false);
  const [newCardInfo, setNewCardInfo] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });
  
  const [savedCards, setSavedCards] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setNewCardInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const openCardModal = () => {
    setShowCardModal(true);
  };
  
  const closeCardModal = () => {
    setShowCardModal(false);
    setNewCardInfo({
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: ''
    });
  };
  
  const addNewCard = () => {
    // Format card number to show only last 4 digits
    const formattedCardNumber = newCardInfo.cardNumber.trim().replace(/\s/g, '');
    const lastFourDigits = formattedCardNumber.slice(-4);
    const maskedNumber = `•••• •••• •••• ${lastFourDigits}`;
    
    const newCard = {
      ...newCardInfo,
      maskedNumber,
      id: Date.now() // Simple unique ID
    };
    
    const updatedCards = [...savedCards, newCard];
    setSavedCards(updatedCards);
    
    // Set as active card if it's the first one
    if (updatedCards.length === 1) {
      setActiveCardIndex(0);
    }
    
    closeCardModal();
  };
  
  const removeCard = (index) => {
    const updatedCards = savedCards.filter((_, i) => i !== index);
    setSavedCards(updatedCards);
    
    // Update active card if needed
    if (activeCardIndex === index) {
      setActiveCardIndex(updatedCards.length > 0 ? 0 : -1);
    } else if (activeCardIndex > index) {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };
  
  const setActiveCard = (index) => {
    setActiveCardIndex(index);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 p-6">
        <div className="mb-8">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
              <div className="h-4 w-4 bg-white rounded-full"></div>
            </div>
            <span className="ml-2 text-teal-500 font-medium">clear minds</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-xs text-gray-500 font-semibold mb-4">DASHBOARD</div>
          <div className="flex items-center text-gray-600 mb-3 py-2 px-3 rounded hover:bg-gray-100">
            <BarChart2 size={18} />
            <span className="ml-3">Analytics</span>
          </div>
          <div className="flex items-center text-gray-600 py-2 px-3 rounded hover:bg-gray-100">
            <Users size={18} />
            <span className="ml-3">Users</span>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-gray-200 rounded-full relative">
              <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded px-1">Free</div>
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium text-center">Osama Rashid</div>
              <div className="text-xs text-gray-500">osama.rashid@algoace.com</div>
            </div>
          </div>
          <button className="mt-4 bg-gray-900 text-white text-sm py-2 px-4 rounded-md ml-16">
            Upgrade to Pro
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="md:hidden flex items-center">
            <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
              <div className="h-4 w-4 bg-white rounded-full"></div>
            </div>
            <span className="ml-2 text-teal-500 font-medium">clear minds</span>
          </div>
          <div className="hidden md:block"></div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500">
              <Search size={20} />
            </button>
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Let's finish powering you up!</h1>
              <p className="text-gray-500">Professional plan is right for you.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Form Section */}
              <div className="flex-1 bg-gray-50 rounded-lg p-6">
                <h2 className="font-medium text-lg mb-4">Billing Address</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Person name"
                    value={billingInfo.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={billingInfo.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={billingInfo.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={billingInfo.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <h2 className="font-medium text-lg mt-8 mb-4">Payment Method</h2>
                
                {/* Display saved cards */}
                {savedCards.length > 0 && (
                  <div className="space-y-3 mb-4">
                    {savedCards.map((card, index) => (
                      <div 
                        key={card.id} 
                        className={`border rounded p-4 flex items-center justify-between cursor-pointer ${
                          activeCardIndex === index ? 'border-teal-500 bg-teal-50' : 'border-gray-300'
                        }`}
                        onClick={() => setActiveCard(index)}
                      >
                        <div className="flex items-center">
                          {activeCardIndex === index && (
                            <CheckCircle size={20} className="text-green-500 mr-2" />
                          )}
                          <CreditCard size={20} className="text-gray-500 mr-2" />
                          <div>
                            <div className="text-sm font-medium">{card.maskedNumber}</div>
                            <div className="text-xs text-gray-500">Expires: {card.expiryDate}</div>
                          </div>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            removeCard(index);
                          }}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                <button 
                  onClick={openCardModal}
                  className="mt-2 border border-gray-300 rounded p-4 w-full flex items-center justify-center text-teal-500">
                  <PlusCircle size={20} className="mr-2" />
                  Add New Card
                </button>
              </div>

              {/* Summary Section */}
              <div className="md:w-80">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="font-medium text-lg mb-4">Summary</h2>
                  
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subscription</span>
                    <span className="bg-red-100 text-red-500 text-xs font-medium px-2 py-1 rounded">PREMIUM</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-600">Billed Monthly</span>
                    <div className="w-10 h-6 bg-green-500 rounded-full flex items-center justify-end p-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-baseline mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">$9.99</span>
                      <span className="text-gray-500 text-sm ml-1">/mo</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mb-1">
                    <div className="flex justify-between">
                      <span className="font-medium">Total Billed</span>
                      <span className="font-medium">$9.99*</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-6">* Plus applicable taxes</div>
                  
                  <button 
                    className={`w-full py-3 rounded-lg mb-4 ${
                      savedCards.length > 0 ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={savedCards.length === 0}
                  >
                    Upgrade My Plan
                  </button>
                  
                  <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    Secure credit card payment
                  </div>
                  
                  <div className="text-xs text-gray-500 text-center">
                    This is a secure 128-bit SSL encrypted payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Card Modal */}
      {showCardModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">New Card</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="XXXX XXXX XXXX XXXX"
                  value={newCardInfo.cardNumber}
                  onChange={handleCardInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Card Holder</label>
                <input
                  type="text"
                  name="cardHolder"
                  placeholder="JOHN DOE"
                  value={newCardInfo.cardHolder}
                  onChange={handleCardInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-1">Expiration Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={newCardInfo.expiryDate}
                    onChange={handleCardInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-1">CVV/CVC</label>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="***"
                    value={newCardInfo.cvv}
                    onChange={handleCardInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mt-2 mb-4">
                <Lock size={16} className="mr-2" />
                <span>Your transaction is secured with SSL encryption</span>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={closeCardModal}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={addNewCard}
                className="px-4 py-2 bg-gray-900 text-white rounded"
                disabled={!newCardInfo.cardNumber || !newCardInfo.cardHolder || !newCardInfo.expiryDate || !newCardInfo.cvv}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}