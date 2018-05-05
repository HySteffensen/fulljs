import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ message }) => {
  return (
    <h2 className="text-center">
      {message}
    </h2>
  );
};

const App = () => {
  return (
    <div>
      <Header message="Naming Contests"/>
      <div>
        ...
      </div>
    </div>
  );
};

Header.propTypes = {
  message: React.PropTypes.string
};

ReactDOM.render(
  <App headerMessage='Hello props!' />,
  document.getElementById('root')
);
