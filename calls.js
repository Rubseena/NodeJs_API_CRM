class Calls{
    constructor(Id,UserId,EngagementStatus,Description,NextCallDate){
        this.Id = Id; 
        this.UserId = UserId; 
        this.EngagementStatus = EngagementStatus;
        this.Description = Description;
        this.NextCallDate = NextCallDate; 
    }
}

module.exports = Calls;