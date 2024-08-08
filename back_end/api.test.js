// api.test.js
const request = require("supertest");
const express = require("express");
const router = require("./router");
const prisma = require("./prismaClient");

const app = express();
app.use(express.json());
app.use(router);

jest.mock("./prismaClient");

describe("GET /getdifficulties", () => {
  it("deve retornar uma lista de dificuldades", async () => {
    const mockDifficulties = [
      { id: 1, level: "Fácil" },
      { id: 2, level: "Médio" },
      { id: 3, level: "Difícil" },
    ];
    prisma.difficulty.findMany.mockResolvedValue(mockDifficulties);

    const response = await request(app).get("api/getdifficulties");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockDifficulties);
    expect(prisma.difficulty.findMany).toHaveBeenCalled();
  });

  it("deve lidar com erros", async () => {
    prisma.difficulty.findMany.mockRejectedValue(
      new Error("Erro no banco de dados")
    );

    const response = await request(app).get("/getdifficulties");

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty(
      "error",
      "Erro ao buscar dificuldades"
    );
  });
});
