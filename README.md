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

Feedback Request 1 Date: X





//




**My Process for going about solving the exercise - Mainly a note to self and to help keep my ideas / memory straight:**



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

Use R to create 3 plots of this. One for TSP HK, one for TSP LS, and one for them overlaid to make the comparison easier.

These are now all uploaded as separate pdfs within the repo.





//


**Response and Explanation: ** WIP

Q: The length of the tour that Held-Karp found should always be less than or equal to the tour length that Local Search found. Why is this?

Response: This is the case due to 

...



//


Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations WIP:

.now documentation
JS memory help and guides
JS error documentation
