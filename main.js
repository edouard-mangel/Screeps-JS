var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleMiner = require('role.miner');
var roleBuilder = require('role.builder');
var roleFighter = require('role.fighter');
var creepSpawner = require('spawn.Basic');
var buildEasy = require('build.Easiest');

module.exports.loop = function () {
    var tower = Game.getObjectById('TOWER_ID');

    for (var spawnName in Game.spawns) {
        var spawnInstance = Game.spawns[spawnName];
        if (spawnInstance.room.energyAvailable ==spawnInstance.room.energyCapacityAvailable ) {
            creepSpawner.invoke(spawnInstance);
        }
    }

    if ( _.filter(Game.constructionSites).length > 0 && (Memory.buildTarget.structureType == STRUCTURE_SPAWN || Game.getObjectById(Memory.buildTarget) == null || Game.getObjectById(Memory.buildTarget) == undefined)) {
        buildEasy.selectMin();
    }
 
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (Game.creeps[name] == undefined) { Game.creeps[name].remove }
        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
        } else if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        } else if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        } else if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
module.exports.m = {
    compteRole: function (r){
        var roles  = _.filter(Game.creeps, (creep) => creep.memory.r == r).length;
        return roles;
    } 
}