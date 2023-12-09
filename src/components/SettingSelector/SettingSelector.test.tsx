import SettingSelector from './SettingSelector';
import { render, screen } from '@testing-library/react';

describe('SettingSelector', () => {
  test('should render setting selector correctly', () => {
    render(<SettingSelector />);

    expect(screen.getByText('CLÁSICO')).toBeDefined();
  });
});
