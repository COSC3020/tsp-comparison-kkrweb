// Kane Kriz
// UWYO COSC 3020 Algorithms
// TSP Held Karp Exercise - primary js file VERSION 2
// 30 April 2025
//


//




/*_____PSUEDOCODE PROVIDED:_____


// cities is the set of cities not visited so far, including start
heldKarp(cities, start)
  if |cities| == 2
    return length of tour that starts at start, goes directly to other city in cities
  else
    return the minimum of
      for each city in cities, unless the city is start
        // reduce the set of cities that are unvisited by one  (the old start), set the new start, add on the distance from old start to new start
        heldKarp(cities - start, city) + distance from start to city


*/


//


//// V2


function tsp_hk(distanceMatrix)
{
    if((distanceMatrix == null) || distanceMatrix.length == 0)
    {
        return -1;
    }

    if(distanceMatrix.length == 1)
    {
        return 0;
    }

    var n = distanceMatrix.length;
    var memo = Array(1 << n).fill().map(function() { return Array(n).fill(undefined); });

    function solve(mask, pos)
    {
        if(mask == (1 << n) - 1)
        {
            return distanceMatrix[pos][0];
        }

        if(memo[mask][pos] != undefined)
        {
            return memo[mask][pos];
        }

        var minDist = Infinity;

        for(var city = 0; city < n; city++)
        {
            if(!(mask & (1 << city)))
            {
                var newMask = mask | (1 << city);
                var dist = distanceMatrix[pos][city] + solve(newMask, city);
                minDist = Math.min(minDist, dist);
            }
        }

        memo[mask][pos] = minDist;
        return minDist;
    }

    var result = solve(1, 0);
    
    if(result != Infinity)
    {
        return result;
    }
    else
    {
        return -1;
    }
}

module.exports = { tsp_hk };
