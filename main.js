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

var totalRuntime = 0;


function measureRuntime(algorithm, distanceMatrix) 
{
    var startTime = performance.now();
    var tourLength;

    if(algorithm == 'heldKarp') 
    {
        tourLength = tsp_hk(distanceMatrix);
    } 
      
    else if(algorithm == 'localSearch') 
    {
        tourLength = tsp_ls(distanceMatrix);
    }

    var endTime = performance.now();
    var runtime = endTime - startTime;
    totalRuntime += runtime;
    
    return { runtime: runtime, tourLength: tourLength };
}


function results() 
{
    var matrixNames = Object.keys(matrices);

    for(var i = 0; i < matrixNames.length; i++) 
    {
        var name = matrixNames[i];
        var matrix = matrices[name];

        console.log('Running Held-Karp for', name);
        var heldKarpResult = measureRuntime('heldKarp', matrix);
        console.log('Held-Karp Result for', name, ':', heldKarpResult);
        console.log('Total runtime:', totalRuntime.toFixed(2), 'ms');

        console.log('Running Local Search for', name);
        var localSearchResult = measureRuntime('localSearch', matrix);
        console.log('Local Search Result for', name, ':', localSearchResult);
        console.log('Total runtime:', totalRuntime.toFixed(2), 'ms');
    }
}


results();

/////
