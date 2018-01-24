var roleMiner = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.harvest(creep.pos.findClosestByRange(FIND_SOURCES)) == ERR_NOT_IN_RANGE) {
              creep.moveTo(41,35);
        }else{
            /*
            if (creep.energy == creep.energyCapacity) 
            {}
            if(targets.length > 0) {
                if(creep.drop(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }*/
        }
    }
}

module.exports = roleMiner;