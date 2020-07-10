import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Home } from './Components/Home';
import renderer from 'react-test-renderer'
import Form from './Components/Form';
import Counter from './Components/Counter';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Home', () => {
  const component = renderer.create(
    <Home />,
    <Form />,
    <Counter/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

 
});
