import {render, fireEvent} from '@testing-library/react';
import { BrowserRouter  } from 'react-router-dom';

import Navbar from './Navbar';

test('navigates to correct page on link click', () => {
    const { getByText } = render(<BrowserRouter><Navbar /></BrowserRouter>);
    const homeLink = getByText(/главная/i);
    const worksLink = getByText(/работы/i);
    const contactsLink = getByText(/контакты/i);
    const formsLink = getByText(/расчитать макет/i);
  
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
  
    fireEvent.click(worksLink);
    expect(window.location.pathname).toBe('/Works');
  
    fireEvent.click(contactsLink);
    expect(window.location.pathname).toBe('/Contacts');
  
    fireEvent.click(formsLink);
    expect(window.location.pathname).toBe('/Forms');
  });