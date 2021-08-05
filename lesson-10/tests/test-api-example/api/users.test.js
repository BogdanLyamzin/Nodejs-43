const express = require("express");
const request = require("supertest");

const usersRouter = require("./users");

const app = express();

app.use("/api/v1/users", usersRouter);

describe("test users routes", ()=> {
    beforeAll(()=> app.listen(3000));

    it("test /api/v1/users - GET all users", async()=>{
        const {body, statusCode} = await request(app).get("/api/v1/users");
        expect(statusCode).toBe(200);
        const {status, code, data: {result}} = body;
        expect(status).toBe("success");
        expect(code).toBe(200);
        expect(Array.isArray(result)).toBe(true);
        const {_id, name} = result[0];
        expect(typeof _id).toBe("string");
        expect(typeof name).toBe("string");
    })

    afterAll(()=> app.close());
});