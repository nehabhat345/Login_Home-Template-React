import React from 'react';
import { render,screen } from '@testing-library/react';
import withMarkup from './withMarkup';
 
import App from './App';
import Home from './components/Home.jsx'
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
	screen.debug();
  });
});

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />);
	
	 expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
	 expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
	//screen.debug();
  });
});

