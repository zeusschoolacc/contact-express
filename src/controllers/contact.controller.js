const Contact = require("../models/contact.model");

exports.findAll = (req, res) => {
    Contact.getAllContacts((err, contacts) => {
        if(err) {
            return res.status(500).send({message: "Error"});
        }
        
        res.status(200).send(contacts);
    });
};

exports.findById = (req, res) => {
    const { id } = req.params;

    if(!id) return console.error("ID NOT FOUND");

    Contact.getContactById(id, (err, contact) => {
        if(err) {
            return res.status(404).send("Error not found");
        }
        
        res.status(200).send(contact);
    });
};

exports.create = (req, res) => {
    const {first_name, last_name, email_add, contact_num} = req.body;

    if (!first_name || !last_name || !email_add || !contact_num) return res.status(400).send({message: "Error"});
    
    Contact.createContact(first_name, last_name, email_add, contact_num, (err, contact_id) => {
        if(err) {
            return res.status(500).send({message: "Error"});
        }
        
        res.status(200).send({id: contact_id, message: "Contact added"});
    });
};

exports.update = (req, res) => {
    const { id } = req.params;
    const {first_name, last_name, email_add, contact_num} = req.body;

    console.log(req.body);

    if (!id || !first_name || !last_name || !email_add || !contact_num) return res.status(400).send({message: "Error", body: req.body});
    
    Contact.updateContact(id, first_name, last_name, email_add, contact_num, (err) => {
        if(err) {
            return res.status(400).send({message: "Error"});
        }
        
        res.status(200).send({message: "Contact updated"});
    });
};

exports.delete = (req, res) => {
    const { id } = req.params;

    if(!id) return res.status(400).send({message: "Error"});

    Contact.deleteContact(id, (err) => {
        if(err) {
            return res.status(404).send({message: "Error"});
        }

        res.status(200).send({message: "Contact deleted"});
    });
};