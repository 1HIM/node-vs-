const express = require ('express')

const contactSchema = require('../model/contact')




exports.getAll=async(req,res)=>{
    const contacts= await contactSchema.find()
    
    
    res.status(200).json({msg:'voici la liste des users',contacts})


    try {
        
    } catch (err) {
        console.log(err)
    }
}
exports.ajout=async(req,res)=>{
    try {
        const newcontact = new contactSchema(req.body)
        await newcontact.save()
        res.status(200).json({msg:'contact dans votre db',newcontact})
    } catch (err) {
        console.log(err)
    }
}
exports.remove=async(req,res)=>{
    try {
        const{id}=req.parmas
        const removecontact= await contactSchema.findByIdAndDelete(id)
        res.status(200).json({msg:'removed user'})
    } catch (err) {
        console.log1
    }
}
exports.update=async(req,res)=>{
    try {
        const{id}=req.parmas
        const updatedContact=await contactSchema.findByIdAndDelete(id,{$set:{...req.body}})
        res.status(200).json({msg:'shi got updated'})
    } catch (err) {
        console.log(err)
    }
}