var spawner = {
    /** @param {Creep} creep **/
	invoke : function(spawn) {
		if (spawn.spawning) {
        	var spawningCreep = Game.creeps[spawn.spawning.name];
	        spawn.room.visual.text(
	            '🛠️' + spawningCreep.memory.role,
	            spawn.pos.x + 1,
	            spawn.pos.y,
	            {align: 'left', opacity: 0.8});
		}
	    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
	    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
	    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

	    if (harvesters.lenght < 2){
	    	makeSpawn(spawn, 'harvester');
	    }
	    else if (upgraders.lenght < 3){
			makeSpawn(spawn, 'upgrader');
	    }
	    else if (builders.lenght < 5){
	    	makeSpawn(spawn, 'builder');
	    }
	}
}

function makeSpawn(spawn, newrole){
	var newName = newrole + Game.time;
	console.log('Spawning new creep: ' + newName);
	spawn.spawnCreep([WORK,CARRY,MOVE], newName,
	            {memory: {role: newrole}});	    
}
module.exports = spawner;