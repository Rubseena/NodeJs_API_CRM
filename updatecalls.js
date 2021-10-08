class updatecalls{
    constructor(Id,UserId,EngagementStatus,Description,NextCallDateTime){
        this.Id = Id; 
        this.UserId = UserId; 
        this.EngagementStatus = EngagementStatus;
        this.Description = Description;
        this.NextCallDateTime = NextCallDateTime; 
    }
}

module.exports = updatecalls;