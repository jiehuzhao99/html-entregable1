import { createUser } from "../components/CreateUser";

test('createUser returns an object with the correct properties', () => {
    const result = createUser('John', 30);
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('age');
});