const db = require("../../config/db.config");

class Contact {
    constructor(first_name, last_name, email_add, contact_num) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email_add = email_add;
        this.contact_num = contact_num;
    }

    static createContact(first_name, last_name, email_add, contact_num, result) {
        const is_deleted = 0; // default
        db.query("INSERT INTO contact_list (first_name, last_name, email_add, contact_num, is_deleted) VALUES (?, ?, ?, ?, ?)", [first_name, last_name, email_add, contact_num, is_deleted], (err, res) => {
            if(err) {
                console.error(err);
                result(err, null);
            }
            else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
    }

    static updateContact(id, first_name, last_name, email_add, contact_num, is_deleted, result) {
        db.query("UPDATE contact_list SET first_name = ?, last_name = ?, email_add = ?, contact_num = ?, is_deleted = ? WHERE id = ?", [first_name, last_name, email_add, contact_num, is_deleted, id], (err) => {
            if(err) {
                console.log(err);
                result(err);
            }
            else {
                result(null);
            }
        });
    }

    static getAllContacts(result) {
        db.query("SELECT * FROM contact_list", (err, res) => {
            if(err) {
                console.error(err);
                result(err, null);
            }
            else {
                result(err, res);
            }
        });
    }

    static getContactById(id, result) {
        db.query("SELECT * FROM contact_list WHERE id = ?", [id], (err, res) => {
            if(err) {
                console.error(err);
                result(err, null);
            }
            else {
                result(err, res);
            }
        });
    }

    static deleteContact(id, result) {
        db.query("DELETE FROM contact_list WHERE id = ?", id, (err, res) => {
            if(err) {
                console.error(err);
                result(err, null);
            }
            else {
                result(err, res);
            }
        });
    }
}

module.exports = Contact;