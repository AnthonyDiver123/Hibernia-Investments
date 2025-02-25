import { useState } from "react";

export default function InvestmentDemo() {
  const [investment, setInvestment] = useState(1);
  const [holdings, setHoldings] = useState(0);
  const [projection, setProjection] = useState(0);

  const handleInvest = () => {
    const newHoldings = holdings + investment;
    setHoldings(newHoldings);
    setProjection(newHoldings * 365); // Yearly projection
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Hibernia Investment Demo</h1>
      <div>
        <h2>Current Holdings: {holdings.toFixed(2)} Tokens</h2>
        <h2>Projected Holdings (1 Year): {projection.toFixed(2)} Tokens</h2>
        <progress value={holdings} max={projection || 1} style={{ width: '100%' }}></progress>
      </div>
      <div style={{ marginTop: '20px' }}>
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(Number(e.target.value))}
          min="1"
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
        <button
          onClick={handleInvest}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '10px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Invest {investment} Tokens
        </button>
      </div>
    </div>
  );
}