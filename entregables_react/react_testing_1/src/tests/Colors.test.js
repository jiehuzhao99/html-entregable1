import { getColors } from "../components/GetColors";
import RemoveBlue from "../components/RemoveBlue";

test('getColors contains blue', () => {
    const colors = getColors();
    expect(colors).toContain('blue');
});

test('RemoveBlue has 2 elements', () => {
    const result = RemoveBlue();
    expect(result).toHaveLength(2);
});

test('RemoveBlue does not contain blue', () => {
    const result = RemoveBlue();
    expect(result).not.toContain('blue');
});

