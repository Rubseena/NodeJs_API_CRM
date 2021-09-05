class Register{
    constructor(
        Id,
        firstName,
        lastName,
        companyName,
        address,
        address2,
        city,
        province,
        country,
        postalCode,
        emailId,
        contactNumber,
        mobileNumber,
        image){
        this.Id = Id; 
        this.firstName = firstName; 
        this.lastName = lastName;
        this.companyName = companyName;
        this.address = address;
        this.address2 = address2;
        this.city = city;
        this.province = province;
        this.country = country;
        this.postalCode = postalCode;
        this.emailId = emailId;
        this.contactNumber = contactNumber;
        this.mobileNumber = mobileNumber;
        this.image = image;
    }
}

module.exports = Register;