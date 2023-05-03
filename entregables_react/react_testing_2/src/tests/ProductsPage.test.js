import { changeOrderByPrice } from "../ProductsPage/Functions";
import { getPriceColor } from "../ProductsPage/Functions";

describe("changeOrderbyPrice"),
  () => {
    it("should order all products by price in descending order"),
      () => {
        const products = [
          {
            id: 1,
            name: "Chachopo",
            price: 30,
          },
          {
            id: 3,
            name: "Navajas",
            price: 25,
          },
          {
            id: 2,
            name: "Chorizo a la sidra",
            price: 15,
          },
        ];
        const expectedProducts = [
          {
            id: 1,
            name: "Chachopo",
            price: 30,
          },
          {
            id: 3,
            name: "Navajas",
            price: 25,
          },
          {
            id: 2,
            name: "Chorizo a la sidra",
            price: 15,
          },
        ];
        const result = changeOrderByPrice(products);
        expect(result).toEqual(expectedProducts);
      };
  };

describe("getPriceColor", () => {
  it("should return red if price > 25", () => {
    const price = 30;
    const expectedColor = "red";
    const result = getPriceColor(price);
    expect(result).toBe(expectedColor);
  });

  it("should return orange if price > 15 and price <= 25", () => {
    const price = 20;
    const expectedColor = "orange";
    const result = getPriceColor(price);
    expect(result).toEqual(expectedColor);
  });

  it("should return green if prices <= 15", () => {
    const price = 10;
    const expectedColor = "green";
    const result = getPriceColor(price);
    expect(result).toEqual(expectedColor);
  });
});
