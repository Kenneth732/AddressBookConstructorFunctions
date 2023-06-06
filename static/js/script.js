function AddressBook(){
    this.contact = {};
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts[contact.firstName] = contact;
};

function Contact(firstName, lastName, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = () => {
    return this.firstName + " " + this.lastName;
}
