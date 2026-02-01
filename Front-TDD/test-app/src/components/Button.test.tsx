import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button 동작', () => {
  it('children을 렌더링 해야 한다', () => {
    render(<Button>클릭하세요</Button>);
    expect(screen.getByText('클릭하세요')).toBeInTheDocument();
  });
  it('클릭하면 onClick 핸들러가 호출되어야 한다', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>클릭</Button>);
    const button = screen.getByRole('button', { name: '클릭' });
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
