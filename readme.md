# BlackCodder@CodeWise.com
1. **AddressBook Constructor**: The `AddressBook` function is a constructor function for creating `AddressBook` objects. When invoked with the `new` keyword, it creates a new instance of `AddressBook`. The `AddressBook` constructor sets up the initial state of an address book by creating a `contacts` property that is an empty object (`{}`) using `this.contacts = {};`.

2. **AddressBook Prototype Method `addContact`**: The `addContact` method is added to the `AddressBook` prototype, which means it is shared among all instances of `AddressBook`. It allows you to add a `contact` to the `contacts` object within the address book. The method takes a `contact` parameter, and within the method, the `contact` is assigned as a value to a property of the `contacts` object. The key for this property is determined by `contact.firstName`, which means the first name of the `contact` will be used as the key in the `contacts` object.

In summary, the code sets up an `AddressBook` constructor that creates an address book object with an empty `contacts` object. It also adds a method `addContact` to the `AddressBook` prototype, which allows you to add contacts to the `contacts` object using their first name as the key. This structure provides a way to store and manage contacts within an address book.


// Business Logic for AddressBook ---------
```
function AddressBook() {
    this.contacts = {};
  }
  
  AddressBook.prototype.addContact = function(contact) {
    this.contacts[contact.firstName] = contact;
  };
```

# test the code in the console
```
{
  // Business Logic for AddressBook ---------
  function AddressBook() {
    this.contacts = {};
  }
  
  AddressBook.prototype.addContact = function(contact) {
    this.contacts[contact.firstName] = contact;
  };
}

{
  // Business Logic for Contacts ---------
  function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
  
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

{
  const addressBook = new AddressBook();

  const contact1 = new Contact("John", "Doe", "123456789");
  const contact2 = new Contact("Jane", "Smith", "987654321");

  addressBook.addContact(contact1);
  addressBook.addContact(contact2);

  console.log(addressBook.contacts);
  console.log(contact1.fullName());
}

```