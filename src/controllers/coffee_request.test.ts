import request from "supertest";
import { app } from "../app";

describe("Test home API endpoint request", () => {

  test("GET should return correct message", async () => {

    const res = await request(app).get("/coffeelover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like coffee!");

  });

  test("GET /coffee without a parameter should return correct object", async () => {

    const res = await request(app).get("/coffee");
    expect(res.statusCode).toEqual(200);

    expect(res.body).toEqual({

      drinkType: "Coffee",
      name: "Latte",

    });

  });

  test('GET /coffee with different param should return correct object', async () => {
    
    const res = await request(app).get('/coffee').query({ coffeeName: 'Macchiato' });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({

      drinkType: 'Coffee',
      name: 'Macchiato',

    });

});

test('GET /coffee with different param should return correct object', async () => {
    
  const res = await request(app).get('/coffee').query({ coffeeName: 'Frappuccino' });
  
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({

    drinkType: 'Coffee',
    name: 'Frappuccino',

  });

});

});