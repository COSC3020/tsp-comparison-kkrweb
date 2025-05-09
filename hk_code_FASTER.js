//GEEKSFORGEEKS CODE



//This is not my code.

//This is from https://www.geeksforgeeks.org/traveling-salesman-problem-tsp-in-python/
// Formal citation wtihin my readme citations section as always



function totalCost(mask, pos, n, cost, memo) {
    if (mask === (1 << n) - 1) {
        return cost[pos][0];
    }

    if (memo[mask][pos] !== undefined) {
        return memo[mask][pos];
    }

    let ans = Number.MAX_VALUE;

    for (let i = 0; i < n; i++) {
        if ((mask & (1 << i)) === 0) {
            ans = Math.min(ans, cost[pos][i] + totalCost(mask | (1 << i), i, n, cost, memo));
        }
    }

    memo[mask][pos] = ans;
    return ans;
}

function tsp_hk(cost) {
    const n = cost.length;
    const memo = Array.from({ length: 1 << n }, () => Array(n).fill(undefined));
    return totalCost(1, 0, n, cost, memo);
}

module.exports = { tsp_hk };
