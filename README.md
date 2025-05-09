# Traveling Salesperson Problem -- Empirical Analysis

For this exercise, you'll need to take the code from the TSP Held-Karp and TSP
Local Search exercises. This can be your own implementation or somebody else's.
You will now do an empirical analysis of the implementations, comparing their
performance. Both the Held-Karp and the Local Search algorithms solve the same
problem, but they do so in completely different ways. This results in different
solutions, and in different times required to get to the solution.

Investigate the implementations' empirical time complexity, i.e. how the runtime
increases as the input size increases. *Measure* this time by running the code
instead of reasoning from the asymptotic complexity (this is the empirical
part). Create inputs of different sizes and plot how the runtime scales (input
size on the $x$ axis, time on the $y$ axis). Your largest input should have a
runtime of *at least* an hour. The input size that gets you to an hour will
probably not be the same for the Held-Karp and Local Search implementations.

In addition to the measured runtime, plot the tour lengths obtained by both
implementations on the same input distance matrices. The length of the tour that
Held-Karp found should always be less than or equal to the tour length that
Local Search found. Why is this?

Add the code to run your experiments, graphs, and an explanation of what you did
to this markdown file.



//



Name: Kane Kriz

Start Date: 17 April 2025

Last Edited: 8 May 2025

Feedback Request 1 Date: 8 May 2025





//


**Response and Explanation: ** 

Q: The length of the tour that Held-Karp found should always be less than or equal to the tour length that Local Search found. Why is this?

Response: 

This is the case due to the fundamental differences in how the HK and LS algorithms act and compute the TSP problem.

Held Karp is an exact algorithm to find a set distance solution.

It systematically explores all possible tours and ensures that the shortest possible tour length is found and recorded. 

This process, as one could assume, can potentially require great amounts of system resources and effort to find the single best distance for the entry matrix input into the HK.


At large, this contrasts with Local Search as local search does not intend to find the single best solution, but a solution that is improved upon depending on set bounds.

Of course, that would be ideal, but that is not the intention of LS.

The intention of Local Search is to run and make general improvements and trials for given tour paths.

Eventually, this process is stopped (due to user specification, a set value of retries without improvement, etc) and the best tour length that was recorded is then observed.

Unlike Held Karp, Local Search does not guarantee that the shortest path length is the best that Local Search finds.

The tour length output by Local Search is thus longer than or equal to the optimal tour length, as said to be expected within the problem details.







**Overall Process Explanation for Completing the Exercise**

Directly inported in the primary js files from my previously approved held-karp and local search exercises.

Create matrix files, storing matrix varaibles of increasing size. One is random values and one is a directly increasing matrix while still holding the symm,etry via the 0 diagonal.

Create projmain.js, implement usages of the inported files and the created matrix storage files.

Create the launch.json file, tweak it where applicable.

Feed the JS stack 50 GB of memory so it stops hating me via `node --max-old-space-size=51200 projmain.js` on my machine. 

Eventually moved this to the launch.json. This did not solve all problems.

Record runtime results.

Realize that my original HK code form my exxercise was causing the comparison to hang at 20 entries.

I then swapped it to the GeeksforGeeks JS HK code, and now a new issue arose.

It was very fast, which was nice. But now I get this during the 27x27 run:

            C:\Users\kanem\OneDrive\Desktop\algoproj\hk_code.js:33
                const memo = Array.from({ length: 1 << n }, () => Array(n).fill(undefined));
                                   ^
            
            RangeError: Invalid array length

This seems like a fundamental JS issue that wouldnt be solved unless I switched languages or algorithms.

Per Lars advice over email, I will be continuing my exercise using up to the 26x26 data that I was able to get.

Next, make a CSV using the runtimes corresponding to the matrix sizes. Predict for values 27 and higher following the behavior of earlier values.

These are stored within the now uploaded csv within the repo.

Use R to create 3 plots of these runtime comparisons. One for TSP HK, one for TSP LS, and one for them overlaid to make the comparison easier.

Similarly, then create 3 more plots now showing the two individuals as well as a comparison plot of tour length by matrix size.

These are now all uploaded as separate pdfs within the repo.




As evident within the output plots, the expected runtime differences and path length differences for the two were observed as expected.

Though they remained within the same relative range, the output best paths found for corresponding HK and LS runs always had HK be less than or equal to the LS path length count.

This matches what was said to be expected from the exercise directions.

The runtimes, in contrast, changed greatly relative to one another as matrix sizes increased.

This is visually evident within the plots.

The runtimes of the LS and HK are similar with lower matrix size values, yet the HK runtime expontentially diverges upwards in runtime as matrix size increases, while the LS remains relatively constant.

This matches the theoretical asymptotic time complexity of the two implementations.

With LS's runtime complexity being $O(n^2)$, and HK's runtime complexity being $O(n^2 * 2^n)$.

This asymptotic difference explains the empirical differences experienced in this actual apllication and experimentation with the values.






//


Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations: 


“Memory Management - JavaScript | MDN.” MDN Web Docs, 6 Mar. 2025, developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management. Accessed 9 May 2025.

“Date.now() - JavaScript | MDN.” Developer.mozilla.org, developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now.

GeeksforGeeks. “Difference between Array and Map.” GeeksforGeeks, 23 July 2020, www.geeksforgeeks.org/difference-between-array-and-map/. Accessed 9 May 2025.

“Memory Management in JavaScript.” GeeksforGeeks, 26 June 2022, www.geeksforgeeks.org/memory-management-in-javascript/.

Parsa Khosravani. “Resolving the “JavaScript Heap out of Memory” Error: A Comprehensive Guide.” Medium, 9 Jan. 2025, medium.com/@parsakhosravani/resolving-the-javascript-heap-out-of-memory-error-a-comprehensive-guide-2298d18422d0. Accessed 9 May 2025.

“Performance Measurement APIs | Node.js V24.0.0 Documentation.” Nodejs.org, 2025, nodejs.org/api/perf_hooks.html. Accessed 9 May 2025.

Feng, Ken. “Getting Started with Readline-Sync: Building Command-Line Applications in Node.js.” Medium, 27 July 2023, medium.com/@quinnfeng26276/getting-started-with-readline-sync-building-command-line-applications-in-node-js-81fa3bbaa237. Accessed 9 May 2025.

For the "faster" HK file: “Traveling Salesman Problem (TSP) in Python.” GeeksforGeeks, 31 May 2024, www.geeksforgeeks.org/traveling-salesman-problem-tsp-in-python/.
