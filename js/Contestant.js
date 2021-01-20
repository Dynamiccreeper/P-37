class Contestant{

    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
        
        
        
        }
        
        getCount(){
        
            var cCRef=database.ref("contestantCount");
            cCRef.on("value",function(data){
            contestantCount=data.val();
            console.log(contestantCount);
        })
        
        }
        updateCount(count){
        
            database.ref("/").update({
                contestantCount:count
            });
        }
        
        updateName(){
            
            var contestantIndex="contestants/contestant"+ contestantCount;
            console.log(contestantIndex);
            database.ref(contestantIndex).set({
                name:this.name,distance:this.distance
            });
            }
        static getPlayerInfo(){
        var cIRef=database.ref("players"); 
        cIRef.on('value',function(data){
        
        allPlayers=data.val();
        
        
        
        })
        
        
        
        }
















}