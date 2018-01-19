/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('build.Easiest');
 * mod.thing == 'a thing'; // true
 */


var buildEasy = {
	selectMin: function(){    

		var effortMini = 999999999999;    
	    var idAStocker = "";
	    for(var cs in Game.constructionSites){
	        if((Game.getObjectById(cs).progressTotal - Game.getObjectById(cs).progress) < effortMini)
	        {
	            idAStocker = cs;
	        }
	    }
	    if (idAStocker != Memory.buildTarget) {
	    	Memory.buildTarget = idAStocker;
	    	var c = Game.getObjectById(Memory.buildTarget) ;
	        console.log("Nouvelle cible: " + c + c.pos );	
	    }
	},selectMax: function(){    

	var effortMaxi = 0 ;    
    var idAStocker = "";
    for(var cs in Game.constructionSites){
        if((Game.getObjectById(cs).progressTotal - Game.getObjectById(cs).progress) > effortMaxi)
        {
            idAStocker = cs;
        }
    }
    if (idAStocker != Memory.buildTarget) {
    	Memory.buildTarget = idAStocker;
    	var c = Game.getObjectById(Memory.buildTarget) ;
        console.log("Nouvelle cible: " + c + c.pos );	
    }
}
}
module.exports = buildEasy;