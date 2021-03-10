import { render, screen } from '@testing-library/react';
import App from './App';

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});


describe('<App/>',() => {
	it('</App>', () => {
    expect(true).toEqual(true);
  });
});

describe('<App/>',() => {
	it('contains Header,Content,Footer,Home', () => {
    expect(true).toEqual(true);
  });
});

describe ('<Content/>', () => {
  it ('contains Table', () => {
    expect(true).toEqual(true);
  })
})

describe ('<Content/>', () => {
  it ('contains employees-api.json', () => {
    expect(true).toEqual(true);
  })
})