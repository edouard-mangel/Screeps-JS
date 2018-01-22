var roleMiner = {

    /** @param {Creep} creep **/
    run: function(creep) {
    	if(creep.harvest(creep.pos.findClosestByRange(FIND_SOURCES)) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.pos.findClosestByRange(FIND_SOURCES), {visualizePathStyle: {stroke: '#ffaa00'}});
        }else{
	        var targets = creep.room.find(FIND_STRUCTURES, {
	                filter: (structure) => {
	                    return structure.structureType == STRUCTURE_CONTAINER  && structure.energy < structure.energyCapacity;
	            }
	        });
	        if(targets.length > 0) {
                if(creep.drop(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
		}
    }
};

module.exports = roleMiner;