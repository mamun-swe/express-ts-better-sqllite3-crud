import express from "express";
import * as todoController from "../../controllers/todo.controller";
import { todoValidators } from "../../validators/todo.validator";

export const todoRouters = express.Router();

todoRouters.get("/", todoController.index);
todoRouters.post("/", todoValidators.create, todoController.store);
todoRouters.get("/:id", todoController.show);
