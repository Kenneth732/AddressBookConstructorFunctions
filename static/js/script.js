function AddressBook(){
    this.contact = {};
}

function Contact(firstName, lastName, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = () => {
    return this.firstName + " " + this.lastName;
}
