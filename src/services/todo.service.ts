import { db } from "../config/db.config";
import { ITodo } from "../models/todo.model";

/** Get list of resources */
const getAllTodo = async (): Promise<ITodo[] | unknown> => {
  return db.prepare("SELECT * FROM todos").all();
};

const getTodoById = async (id: number): Promise<ITodo | unknown> => {
  return db.prepare("SELECT * FROM todos WHERE id = ?").get(id);
};

const createTodo = async (data: ITodo): Promise<ITodo> => {
  const { lastInsertRowid } = db
    .prepare("INSERT INTO todos (name, description) VALUES (?, ?)")
    .run(data.name, data.description);

  return { id: lastInsertRowid, ...data };
};

export const todoService = {
  getAllTodo,
  getTodoById,
  createTodo,
};
