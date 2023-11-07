module.exports = {
  apps: [{
    name:"frontend",
    script: 'serve -l 80 -s build',
    watch:false,
  }]
};
