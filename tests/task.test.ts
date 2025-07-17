import request from "supertest";
import app from "../src/index";

describe("Task API", () => {
  it("should create a new task (POST /tasks)", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "test", description: "details" });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.title).toBe("test");
  });

  it("should get a task by id (GET /tasks/:id)", async () => {
    const createRes = await request(app)
      .post("/tasks")
      .send({ title: "test", description: "desc" });
    const id = createRes.body._id;

    const res = await request(app).get(`/tasks/${id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body._id).toBe(id);
  });

  it("should delete a task (DELETE /tasks/:id)", async () => {
    const createRes = await request(app)
      .post("/tasks")
      .send({ title: "test", description: "desc" });
    const id = createRes.body._id;

    const res = await request(app).delete(`/tasks/${id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe("Task deleted successfully");
  });
});
