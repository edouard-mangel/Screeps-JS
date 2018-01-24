var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] > 50 ;}
            });

        var closestSource = creep.pos.findClosestByRange(FIND_SOURCES);

        if(creep.carry.energy < creep.carryCapacity) {
            var target = null; 
            if (targets[0]!=undefined) {
                target  = targets[0];
                
            }else {
                target  = targets;
            }

            if (target.pos != undefined ) {
                if (creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target.pos);
                }
            }
            else if(creep.harvest(closestSource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.pos.findClosestByRange(FIND_SOURCES), {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                }
            });
            if (targets.length == 0 ) {
                targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER && structure.energy < structure.energyCapacity);}
                });
            }
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } 
        }
    }
};

module.exports = roleHarvester;