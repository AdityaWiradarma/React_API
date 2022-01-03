import Notification from "../models/Notification.js";

//fungsi get notif bertipe asingkron(variable)
export const getNotifs = async(req, res)=>{
    try{
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

export const getNotifID = async(req, res)=>{
    try{
        const notifications = await Notification.findById(req.params.id);
        res.status(200).json(notifications);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

export const saveNotif = async(req, res)=>{
    const notification = Notification(req.body);
    try{
        const ressave = await notification.save();
        res.status(201).json(ressave);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

export const updateNotif = async(req, res)=>{
    var notifID = await Notification.findById(req.params.id);
    if(!notifID) return res.status(404).json({status:false, message:" Data not found"})
   
    try{
        const ressave = await Notification.updateOne({_id:req.params.id},{$set:req.body});
        res.status(200).json(ressave);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

export const deleteNotif = async(req, res)=>{
    var notifID = await Notification.findById(req.params.id);
    if(!notifID) return res.status(404).json({status:false, message:" Data not found"})
   
    try{
        const resdel = await Notification.deleteOne({_id:req.params.id});
        res.status(200).json(resdel);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}