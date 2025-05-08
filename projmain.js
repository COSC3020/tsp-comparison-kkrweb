// Kane Kriz
// UWYO COSC 3020 Algorithms
// 7 May 2025
// primary js file - main.js
//
//






// maybe fine to just make it console log in here? And judge runtimes on that? I dont even know. WIP



var performance = require('perf_hooks').performance;
var fs = require('fs');
var tsp_hk = require('./hk_code').tsp_hk;
var tsp_ls = require('./ls_code').tsp_ls;
var matrices = require('./matrices');



function measureRuntime(distanceMatrix) 
{
    var startTime = performance.now();

    tsp_hk(distanceMatrix);
    tsp_ls(distanceMatrix);

    var endTime = performance.now();
    var runtime = endTime - startTime;
    
    console.log('Runtime of above: ' + runtime + ' ms');
}



/////



function results() 
{
    var matrixNames = Object.keys(matrices);

    for(var i = 0; i < matrixNames.length; i++) 
    {
        var name = matrixNames[i];
        var matrix = matrices[name];

        console.log('HK: ', name);
        measureRuntime(matrix);

        console.log('LS: ', name);
        measureRuntime(matrix);
    }
}

results();


/////
