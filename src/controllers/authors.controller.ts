import type {NextFunction, Request, Response} from "express";

import {db} from "../utils/db.server";
import {Users} from "@prisma/client";

export const find = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users: Users[] = await db.users.findMany();

    res.json({data: users, message: "Success!"});
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
    const user: Users = await db.users.findFirst({
      where: {id: +id},
      include: {books: true},
    });

    res.json({data: user, message: "Success!"});
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
    const {name, year, username} = req.body;

    const data = await db.users.create({data: {name, year, username}});

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
    const {name, year, username} = req.body;
    const {id} = req.params;

    const data = await db.users.update({
      data: {name, year, username},
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

    const data = await db.users.delete({
      where: {id: +id},
    });

    res.status(200).json({data, message: "Successfully DELETED!"});
  } catch (error: any) {
    next(error);
  }
};
