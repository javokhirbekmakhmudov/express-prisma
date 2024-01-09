import {Router} from "express";

import {
  create,
  find,
  findOne,
  remove,
  update,
} from "../controllers/books.controller";

const router = Router();

router.get("/books", find);
router.get("/book/:id", findOne);
router.post("/book", create);
router.put("/book/:id", update);
router.delete("/book/:id", remove);

export default router;
