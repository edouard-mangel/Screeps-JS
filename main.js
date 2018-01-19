var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var creepSpawner = require('spawn.Basic');
var buildEasy = require('build.Easiest');

module.exports.loop = function () {

    var tower = Game.getObjectById('TOWER_ID');
    

    for (var spawnName in Game.spawns) {
        var spawnInstance = Game.spawns[spawnName];
        creepSpawner.invoke(spawnInstance);
    }

    if ( Game.getObjectById(Memory.buildTarget) == null || Game.getObjectById(Memory.buildTarget) == undefined) {
        buildEasy.selectMax();
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