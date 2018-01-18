var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var creepSpawner = require('spawn.Basic');

module.exports.loop = function () {

    var tower = Game.getObjectById('TOWER_ID');
    

    for (var spawnName in Game.spawns) {
        var spawnInstance = Game.spawns[spawnName];
        creepSpawner.invoke(spawnInstance);
    }
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}