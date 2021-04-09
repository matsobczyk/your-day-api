const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Invitation = require('../models/Invitation')



exports.createInvitation = (async (req, res) => {
    var salt = await bcrypt.genSalt(10);
    const invitation = new Invitation ({
                name: req.body.name,
                inv: salt
            });
            try {
                const savedInvitation = await invitation.save();
                res.send(savedInvitation);
            }catch(err){
                res.status(400).send(err);
            }
});
exports.getInvitation = (async(req,res) => {
    const invitation = await Invitation.findById(req.body.inv);
    res.json(invitation);
});
exports.updateInvitation = (async(req, res) => {
    try{
        const updatedInvitation = await Invitation.updateOne(
            {id: req.params.invitationId}, 
            {$set: {name: req.body.name, inv: req.body.inv}}
            );
        res.json(updatedInvitation);
    }catch(err){
        res.json(err);
    }
});
exports.deleteInvitation = (async(req, res) => {
    try{
        const removedInvitation = await Invitation.deleteOne({_id: req.params.invitationId});
        res.json(removedInvitation);
    }catch(err){
        res.json(err);
    }
});


exports.getInvitations = (async(req,res) => {
    const invitations = await Invitation.find();
    res.json(invitations);
})
