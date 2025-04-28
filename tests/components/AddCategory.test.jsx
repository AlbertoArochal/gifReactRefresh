import {fireEvent, render} from "@testing-library/react";
import {AddCategory} from "../../src/components";
import {screen} from "@testing-library/dom";

describe('Test over Addcategory component', () => {

    test('test over Addcategory component', () => {
        render(<AddCategory onNewValue={jest.fn()} />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Laga Dyga'}})
        expect(input.value).toBe('Laga Dyga')

    })
    test("debe llamar onNewValue", () => {
        const inputValue = 'Laga Dyga';
        const onNewValue = jest.fn();
        render(<AddCategory onNewValue={onNewValue} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewValue).toHaveBeenCalledWith(inputValue);

    })
    test('No debe llamar si el input esta vacio', () => {
        const onNewValue = jest.fn();
        render(<AddCategory onNewValue={onNewValue} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewValue).not.toHaveBeenCalled();
    })

});