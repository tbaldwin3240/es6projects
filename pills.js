class Pills {
    constructor(name, generic, location) {
        this.name = name;
        this.generic = generic
        this.location = location;
        this.pillCount= 90;
        this.isPillsTaken = true;
        this.dayTaken = {
            Monday:15,
            Tuesday:15,
            Wednesday:15,
            Thursday:15,
            Friday:10,
            Saturday:10,
            Sunday:10
        };
        this.pillLeft = this.pillCount - this.dayTaken.Monday;


    }   
    // pickDay(dayTaken) {
    //     if (dayTaken === "Momday","Tuesday","Wednesday","Thursday") {
    //         const remainingPills =	this.pillCount 
    //         console.log(remainingPills)
    //     } else {
    //         This.dayTaken - 10
    //    }
    //}
    countPills() {
        // for (let i = 0; i <= this.dayTaken.lenght; i++) {
        //      pillLeft = this.pillCount - this.dayTaken[i]
        if (this.pillLeft === 0) {
                console.log("Out of pills. TIME For REFILL!")
            }
       
    // }
	
}

}
const newWeek = new Pills("name","generic","location")
 //   newWeek.pickDay("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday")
    newWeek.countPills();
    console.log(newWeek)
    
    
    
    