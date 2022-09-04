var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
//create instance
var myCustomer = new Customer();
var a = myCustomer.firstName = 'Dean';
var b = myCustomer.lastName = 'Yang';
console.log(a, b);
