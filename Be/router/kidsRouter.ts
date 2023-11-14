import { Router } from "express";
import {
  createData,
  deleteData,
  viewData,
  viewSortedData,
} from "../controller/kidsController";

const router: Router = Router();

router.route("/createData").post(createData);
router.route("/viewData").get(viewData);
router.route("/viewSortedData").get(viewSortedData);
router.route("/deleteData").delete(deleteData);

export default router;
