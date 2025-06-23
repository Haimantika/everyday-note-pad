
import React from 'react';

const Health = () => {
  const healthData = {
    status: 'healthy',
    service: 'notes-app',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  };

  return (
    <div style={{ fontFamily: 'monospace', padding: '20px' }}>
      <pre>{JSON.stringify(healthData, null, 2)}</pre>
    </div>
  );
};

export default Health;
