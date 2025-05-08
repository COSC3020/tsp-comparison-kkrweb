// Kane Kriz
// UWYO COSC 3020 Algorithms
// 7 May 2025
// primary js file - main.js
//
//






// maybe fine to just make it console log in here? And judge runtimes on that? I dont even know. WIP




function measureRuntime(distanceMatrix) 
{
    var startTime = performance.now();

    tsp_hk(distanceMatrix);
    tsp_ls(distanceMatrix);

    var endTime = performance.now();
    var runtime = endTime - startTime;
    
    console.log('Runtime: ' + runtime + ' ms');
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
