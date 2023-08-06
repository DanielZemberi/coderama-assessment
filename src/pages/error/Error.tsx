import React from 'react';

interface ErrorProps {
  status: '404' | '500';
  errorText?: string;
}

const Error: React.FC<ErrorProps> = ({ status, errorText }) => {
  return (
    <div>
      <h1>{status}</h1>
      {errorText ? <p>{errorText}</p> : null}
    </div>
  );
};

export default Error;
