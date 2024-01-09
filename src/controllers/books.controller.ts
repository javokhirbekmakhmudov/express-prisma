import type {NextFunction, Request, Response} from "express";

import {db} from "../utils/db.server";
import {Books} from "@prisma/client";

export const find = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const books: Books[] = await db.books.findMany({include: {author: true}});

    res.json({data: books});
  } catch (error: any) {
    next(error);
  }
};

export const findOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {id} = req.params;
    const book: Books = await db.books.findFirst({
      where: {id: +id},
      include: {author: true},
    });

    res.json({data: book, message: "Success!"});
  } catch (error: any) {
    next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {name, year, authorId} = req.body;

    const data: Books = await db.books.create({data: {name, year, authorId}});

    res.status(201).json({data, message: "Successfully Created!"});
  } catch (error: any) {
    next(error);
  }
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {name, year, authorId} = req.body;
    const {id} = req.params;

    const data = await db.books.update({
      data: {name, year, authorId},
      where: {id: +id},
    });

    res.status(200).json({data, message: "Successfully UPDATED!"});
  } catch (error: any) {
    next(error);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {id} = req.params;

    const data = await db.books.delete({
      where: {id: +id},
    });

    res.status(200).json({data, message: "Successfully DELETED!"});
  } catch (error: any) {
    next(error);
  }
};
