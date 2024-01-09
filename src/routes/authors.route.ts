import {Router} from "express";

import {
  create,
  find,
  findOne,
  remove,
  update,
} from "../controllers/authors.controller";

const router = Router();

router.get("/authors", find);
router.get("/author/:id", findOne);
router.post("/author", create);
router.put("/author/:id", update);
router.delete("/author/:id", remove);

export default router;
