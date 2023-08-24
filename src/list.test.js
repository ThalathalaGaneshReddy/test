import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event'
import List from './list';

const mockdata = [ {
    name:"navya",
    email:"navy@gmail.com",
    phone:"654389",
    age:"22"
  }]
 

test("Email link click handler called", async () => {
    const mockHandleClick = jest.fn();
    render(<List data={mockdata}
                handleClick = {mockHandleClick}
          />)
    await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i));
    expect(mockHandleClick).toHaveBeenCalled();
})
