
module.exports={

ui:'bdd',
timeout: 2000,
slow:150,
reporter: "spec",
retries: 3,
parallel: true,
reporter: 'node_modules/mochawesome',
'reporter-option': [
    'overwrite=true',
    'reportTitle=My\ Custom\ Title',
    'showPassed=false'
],

}