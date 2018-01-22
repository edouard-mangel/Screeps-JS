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
	    if (_.filter(Game.constructionSites).length == 0 ) {	
	    	idAStocker = Game.spawns['Spawn1'].id;
	    	console.log("No constructionSites. Spawn1 selected.");
	    }else {
		    for(var cs in Game.constructionSites){
		        if((Game.getObjectById(cs).progressTotal - Game.getObjectById(cs).progress) < effortMini)
		        {
		            idAStocker = cs;
		        }
		    }
	    }
	    setTarget(idAStocker);
	},selectMax: function(){    
		var effortMaxi = 0 ;    
	    var idAStocker = "";
	    for(var cs in Game.constructionSites){
	        if((Game.getObjectById(cs).progressTotal - Game.getObjectById(cs).progress) > effortMaxi)
	        {
	            idAStocker = cs;
	        }
	    }
	    setTarget(idAStocker);
	}
}
function setTarget(idAStocker) { 
 	if (_.filter(Game.constructionSites).length ==0 ||  Memory.buildTarget == null || Memory.buildTarget == undefined|| Memory.buildTarget =="")
 	{
 		Memory.buildTarget = Game.spawns['Spawn1'];
 		console.log("No buildTarget, setting spawner, id = " + Memory.buildTarget);
 	}else{
    	Memory.buildTarget = idAStocker;
		var c = Game.getObjectById(Memory.buildTarget) ;
    	console.log("Nouvelle cible: " + c + c.pos );	
	}
}
module.exports = buildEasy;