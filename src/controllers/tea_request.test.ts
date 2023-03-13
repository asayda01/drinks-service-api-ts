import request from "supertest";
import { app } from "../app";

describe("Test home API endpoint request", () => {

  test("GET should return correct message", async () => {

    const res = await request(app).get("/tealover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I like tea!");

  });

  test("GET /tea without a parameter should return correct object", async () => {

    const res = await request(app).get("/tea");
    expect(res.statusCode).toEqual(200);

    expect(res.body).toEqual({

      drinkType: "Tea",
      name: "Green Tea",

    });

  });

  test('GET /tea with different param should return correct object', async () => {
    
    const res = await request(app).get('/tea').query({ teaName: 'Black Tea' });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({

      drinkType: 'Tea',
      name: 'Black Tea',

    });

});

test('GET /tea with different param should return correct object', async () => {
    
  const res = await request(app).get('/tea').query({ teaName: 'Earl Grey Tea' });
  
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({

    drinkType: 'Tea',
    name: 'Earl Grey Tea',

  });

});

});