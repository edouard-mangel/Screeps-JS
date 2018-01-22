var spawner = {
    /** @param {Creep} creep **/
	invoke : function(spawn) {
		
		if (spawn.spawning != null) {
        	var spawningCreep = Game.creeps[spawn.spawning.name];
	        spawn.room.visual.text(
	            '🛠️' + spawningCreep.memory.role,
	            spawn.pos.x + 1,
	            spawn.pos.y,
	            {align: 'left', opacity: 0.8});
			return;  
		}
		
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
	    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')

	    
	    if (miners.length < 2 ){
	    	makeSpawn(spawn, 'miner');
	    }
		else if (harvesters.length < 4 ){
	    	makeSpawn(spawn, 'harvester');
	    }
	    else if (builders.length < 5 && _.filter(Game.constructionSites).length > 0){
	    	makeSpawn(spawn, 'builder');
	    }
	    else if (upgraders.length < 5){
			makeSpawn(spawn, 'upgrader');
	    }
	    else {
	    	makeSpawn(spawn, 'upgrader');
	    }
	}
}

function makeSpawn(spawn, newrole){
	var newName = newrole + Game.time;

	if(	spawn.spawnCreep(getModules(newrole), newName,
	            {memory: {role: newrole}}) == 0)
    {
	    console.log('Spawning new creep: ' + newName); 
	    console.log("Time since last spawn: " + (Game.Time - Memory.lastSpawnTime ));
	    Memory.lastSpawnTime = Game.time;
	}
}
function getModules(role) {
	var modules = ['MOVE'];
	if (role== 'fighter') {
		modules = [ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,MOVE,MOVE,MOVE,MOVE,]	
	} else if (role== 'miner') {
		modules = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,MOVE];
	} else{
		modules = [WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE];
	}
	return modules;
}


module.exports = spawner;