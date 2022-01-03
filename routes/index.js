import express from "express";
import { getNotifs, getNotifID, saveNotif, updateNotif,deleteNotif }   from "../controllers/notificationController.js";
const router = express.Router();
//get all data
router.get('/', getNotifs);
//create data
router.post('/', saveNotif);
//get data by ID
router.get('/:id',getNotifID);
//update data
router.patch('/:id', updateNotif);
//delete data
router.delete('/:id', deleteNotif);

export default router;