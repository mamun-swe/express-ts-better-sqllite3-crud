import { NextFunction, Request, Response } from "express";
import { HttpCode, HttpSuccessResponse } from "../helpers";
import { todoService } from "../services/todo.service";

/** list of resources */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await todoService.getAllTodo();

    res.status(HttpCode.OK).json(
      await HttpSuccessResponse({
        status: true,
        message: "List of resources.",
        data: results,
      })
    );
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

/** store new resource */
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description } = req.body;
    const results = await todoService.createTodo({ name, description });

    res.status(HttpCode.CREATED).json(
      await HttpSuccessResponse({
        status: true,
        message: "Todo created.",
        data: results,
      })
    );
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

/** show specific resource */
export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await todoService.getTodoById(Number(id));

    res.status(HttpCode.OK).json(
      await HttpSuccessResponse({
        status: true,
        message: "Todo information.",
        data: result,
      })
    );
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};
