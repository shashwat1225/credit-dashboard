import React from 'react';

function Credit() {
  return (
    <div className="container">
      <div className="header">
        <div><strong>Available credit:</strong> <span>$1000</span></div>
        <div><strong>Payable balance:</strong> <span>$0</span></div>
      </div>
      <div className="transactions">
        <strong>Pending transactions:</strong>
        {/* TODO: Insert pending transactions here */}
      </div>
      <div className="transactions">
        <strong>Settled transactions:</strong>
        {/* TODO: Insert settled transactions here */}
      </div>
    </div>
  );
}

export default Credit;
