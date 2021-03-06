'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

// Transactions

// const cls = require('cls-hooked');
// const namespace = cls.createNamespace('typing-game');
// Sequelize.useCLS(namespace);

// IDs for actions and difficulties
const ATTACK = 1;
const HEAL = 2;
const NORMAL = 1;
const HARD = 2;
const BOSS = 3;

// Note: This is the ONE instance of Sequelize which is used in this whole app. Any time you need to call sequelize.something, import this!
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize.options.logging = console.log;

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
Object.assign(db, {ATTACK, HEAL, NORMAL, HARD, BOSS});

module.exports = db;
