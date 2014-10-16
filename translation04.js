var cat = {
    tiredness : 50,
    hunger : 50,
    loneliness : 50,
    happiness : 50,
    feed: function(food){
        console.log("Om nom nom");
        if(food === "apples"){
            this.hunger = this.hunger -5;
        }else if(food === "steak"){
            this.hunger = this.hunger - 30;
        }
        
    },
    sleep: function(){
        console.log("zzzzzzzzz");
        this.tiredness = this.tiredness -5;
    },
    love: function(){
        var chance = Math.random();
        if(chance > .5){
            console.log("I don't want to be loved!");
        } else{
            console.log ("all you need is...");
        }
        this.loneliness = this.loneliness -5;
        this.happiness = this.happiness + 1000;
    },
    printStatus: function(){
        console.log("tiredness: " + this.tiredness + " hunger: " + this.hunger + " loneliness " + this.loneliness + " happiness "+ this.happiness);
    }
    
};



cat.feed("steak");
cat.hunger;
cat.printStatus();
cat.love();