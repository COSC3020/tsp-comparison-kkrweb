
// Kane Kriz
// UWYO COSC 3020 Algorithms
// 8 May 2025
// primary js file - projmain.js
//
//





// maybe fine to just make it console log in here? And judge runtimes on that? I dont even know. WIP






var performance = require('perf_hooks').performance;
var readlineSync = require('readline-sync');
var tsp_hk = require('./hk_code').tsp_hk;
var tsp_ls = require('./ls_code').tsp_ls;
var matrices = require('./matrices');








/////





function measureRuntime(hk_or_ls, matrix) 
{
    var startTime = performance.now();
    var tourLength;

    if(hk_or_ls == 'hk') 
    {
        tourLength = tsp_hk(matrix);
    } 

    else if(hk_or_ls == 'ls') 
    {
        tourLength = tsp_ls(matrix);
    }

    var endTime = performance.now();
    var runtime = endTime - startTime;
    
    console.log('FOR ABOVE TSP AND ASSOCIATED SIZE: Runtime: ' + runtime + ' ms | Tour length: ' + tourLength);
    return { runtime: runtime, tourLength: tourLength };
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
        var hkResults = measureRuntime('hk', matrix);

        console.log('LS: ', name);
        var lsResults = measureRuntime('ls', matrix);
    }
}




results();

/////
