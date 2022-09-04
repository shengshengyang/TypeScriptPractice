class Customer{
    private firstName: string;
    private lastName: string;

    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }


    constructor(theFirst: string,theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    


}
    //create instance

//     let myCustomer = new Customer();
//    let a = myCustomer.firstName = 'Dean';
//    let b = myCustomer.lastName = 'Yang';

//    console.log(a,b)