import { render } from '@testing-library/react';
import { expect } from 'vitest';
import App from './App';

describe('App', () => {
  test('should render app without crashing', () => {
    const { getByText } = render(<App />);

    expect(getByText('makahco')).not.toBeNull();
  });
});
