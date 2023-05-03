import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Select } from '../components/Select';

describe('<Select />', () => {
    it('renders with correct props without errors', () => {
        const props = {
            value: 'Option 1',
            items: ['Option 1', 'Option 2', 'Option 3'],
            onChange: jest.fn(),
        };
        render(<Select props={props}/>);
    });

    it('calls the onChange function when a new option is selected', () => {
        const onChange = jest.fn();

        const props = {
            value: 'Option 1',
            items: ['Option 1', 'Option 2', 'Option 3'],
            onChange: jest.fn(),
        };
        const items = ['Option 1', 'Option 2', 'Option 3'];
        const { getByRole } = render(<Select value={items[0]} items={items} onChange={onChange} />);
        const select = getByRole('combobox');
        const option = select.querySelector(`option[value="${items[2]}"]`);
        fireEvent.change(select, { target: { value: items[2] } });
        expect(onChange).toHaveBeenCalledWith(items[2]);
    });
});