# BlackCoder@CodeWise.com


> Here's a breakdown of the code:

```javascript
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}
```

- The `Contact` function is the constructor function, which is invoked using the `new` keyword to create new instances of contacts.

- Inside the `Contact` constructor function, three parameters are defined: `firstName`, `lastName`, and `phoneNumber`. These parameters represent the data that will be passed in when creating a new contact.

- The `this` keyword refers to the new instance of the contact being created. Using `this`, you can assign values to the properties of the contact object.

- The `firstName`, `lastName`, and `phoneNumber` properties are set equal to the corresponding parameters passed to the constructor function.

By using this constructor function, you can create new contact objects with different values for the `firstName`, `lastName`, and `phoneNumber` properties. For example:

```javascript
const johnDoe = new Contact("John", "Doe", "1234567890");
const janeSmith = new Contact("Jane", "Smith", "9876543210");
```

In this example, `johnDoe` and `janeSmith` are two separate instances of the `Contact` object, each with their own set of properties.

Let me know if you have any questions or if there's anything specific you'd like to implement using the `Contact` constructor function.

# Adding a method to the Contact Prototype


To add a method to the `Contact` prototype, you can use the `prototype` property of the constructor function. The `prototype` property is shared among all instances created by the constructor function and allows you to add methods that can be accessed by those instances.

Here's an example of how you can add a method called `getFullName` to the `Contact` prototype:

```javascript
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};
```

In the above code, we define the `getFullName` method on the `Contact.prototype` object. This method concatenates the `firstName` and `lastName` properties of the contact to form the full name.

Now, when you create instances of `Contact` using the `new` keyword, they will have access to the `getFullName` method:

```javascript
const johnDoe = new Contact("John", "Doe", "1234567890");
const janeSmith = new Contact("Jane", "Smith", "9876543210");

console.log(johnDoe.getFullName());   // Output: "John Doe"
console.log(janeSmith.getFullName()); // Output: "Jane Smith"
```

By adding methods to the prototype, you ensure that all instances of `Contact` share the same method implementation, which helps optimize memory usage.

You can continue adding more methods to the `Contact` prototype in a similar way, extending the functionality of the `Contact` objects.

# Address Book: Objects Within Objects
In an address book application, it's common to have objects within objects to represent more complex data structures. For example, you might have a `Contact` object that contains multiple addresses for that contact. Here's an example of how you can create an address book with nested objects:

```javascript
function AddressBook() {
  this.contacts = [];
}

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.addresses = [];
}

function Address(street, city, state, zipCode) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
}

// Create an instance of AddressBook
const addressBook = new AddressBook();

// Create a contact
const johnDoe = new Contact("John", "Doe", "1234567890");

// Create addresses for the contact
const address1 = new Address("123 Main St", "Cityville", "State", "12345");
const address2 = new Address("456 Elm St", "Townsville", "State", "67890");

// Add the addresses to the contact's addresses array
johnDoe.addresses.push(address1, address2);

// Add the contact to the address book's contacts array
addressBook.contacts.push(johnDoe);
```

In the above example, we have an `AddressBook` constructor function that represents the overall address book. It has a `contacts` property, which is an array that will store the contacts.

The `Contact` constructor function represents an individual contact. It has properties like `firstName`, `lastName`, and `phoneNumber`. Additionally, it has an `addresses` property, which is an array to store multiple addresses for that contact.

The `Address` constructor function represents an address. It has properties like `street`, `city`, `state`, and `zipCode`.

To create a contact with multiple addresses, you can create instances of the `Address` object and add them to the `addresses` array of the corresponding `Contact` object.

> You can continue adding more functionality to the `AddressBook` object, such as methods to add, remove, or search for contacts and addresses. The nested objects provide a flexible structure to represent the relationships between different entities in the address book application.

# Certainly! To add a method to the `AddressBook` prototype, you can follow these steps:

1. Define the method you want to add to the `AddressBook` prototype. Let's say we want to add a method called `addContact` that takes a `Contact` object and adds it to the `contacts` array.

```javascript
AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};
```

2. The `AddressBook.prototype` syntax allows you to add properties and methods to the prototype object of the `AddressBook` constructor. In this case, we're adding the `addContact` method.

3. Inside the method, `this` refers to the current instance of the `AddressBook` object. We can access the `contacts` array using `this.contacts` and use the `push` method to add the provided `contact` object to the array.

Here's the updated code with the `addContact` method added to the `AddressBook` prototype:

```javascript
function AddressBook() {
  this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};
```

With this method, you can now add contacts to the address book by calling `addContact` on an instance of `AddressBook`, like this:

```javascript
const addressBook = new AddressBook();
const contact1 = new Contact("John", "Doe", "123456789");
addressBook.addContact(contact1);
```

The `contact1` object will be added to the `contacts` array within the `addressBook` instance.