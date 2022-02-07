import React from 'react';
import './Main.css';

const Main = ({title, children}) => {
  return (
    <div className="container2">
      {title && (
        <>
          <h1>{title}</h1>
          <hr />
        </>
      )}
      {children}
    </div>
  );
};

export default Main;
