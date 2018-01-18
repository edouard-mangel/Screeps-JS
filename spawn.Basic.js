var spawner = {
    /** @param {Creep} creep **/
	invoke : function(spawn) {
		
		if (spawn.spawning!= null) {
        	var spawningCreep = Game.creeps[spawn.spawning.name];
	        spawn.room.visual.text(
	            '🛠️' + spawningCreep.memory.role,
	            spawn.pos.x + 1,
	            spawn.pos.y,
	            {align: 'left', opacity: 0.8});
		
		}
		if (spawn.spawning != null || spawn.energy < 250) 
		{    
			return;
		}
	    
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
	    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')
	    
	    if (harvesters.length < 3 ){
	    	makeSpawn(spawn, 'harvester');
	    }
	    else if (builders.length < 15 ){
	    	makeSpawn(spawn, 'builder');
	    }
	    else if (upgraders.length < 3){
			makeSpawn(spawn, 'upgrader');
	    }
	}
}

function makeSpawn(spawn, newrole){
	var newName = newrole + Game.time;
	console.log('Spawning new creep: ' + newName);
	spawn.spawnCreep([WORK,CARRY,CARRY,MOVE], newName,
	            {memory: {role: newrole}});	    
}
module.exports = spawner;