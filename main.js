//
//
//
//
//
//


var performance = require('perf_hooks').performance;
var fs = require('fs');
var tsp_hk = require('./hk_code').tsp_hk;
var tsp_ls = require('./ls_code').tsp_ls;
var matrices = require('./matrices');





function measureRuntime(algorithm, distanceMatrix) 
{
    var startTime = performance.now();

    if (algorithm = 'held_karp') 
    {
        tsp_hk(distanceMatrix);
    } 
      
    else if (algorithm = 'local_search') 
    {
        tsp_ls(distanceMatrix);
    }

    var endTime = performance.now();
    return endTime - startTime;
}




function results() 
{
    var matrixNames = Object.keys(matrices);
    var heldKarpTimes = [];
    var localSearchTimes = [];

    for (var i = 0; i < matrixNames.length; i++) 
    {
        var name = matrixNames[i];
        var matrix = matrices[name];
        heldKarpTimes.push(measureRuntime('held_karp', matrix));
        localSearchTimes.push(measureRuntime('local_search', matrix));
    }

    var results = 
    {
        matrixNames,
        heldKarpTimes,
        localSearchTimes
    };

    fs.writeFileSync('tsp_empirical_analysis.txt', JSON.stringify(results, null, 2));
}

results();
