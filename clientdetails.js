class ClientDetails{
    constructor(
        Id,
        ClientName,
        ContactPerson,
        EmailId,
        MobileNumber,
        AddressLine1,
        AddressLine2,
        AddressLine3,
        City,
        State,
        Country){
        this.Id = Id; 
        this.ClientName = ClientName; 
        this.ContactPerson = ContactPerson;
        this.EmailId = EmailId;
        this.MobileNumber = MobileNumber;
        this.AddressLine1 = AddressLine1;
        this.AddressLine2 = AddressLine2;
        this.AddressLine3 = AddressLine3;
        this.City = City;
        this.State = State;
        this.Country = Country;
    }
}

module.exports = ClientDetails;