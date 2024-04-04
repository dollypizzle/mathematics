# Army Game

Luke is daydreaming in Math class. He has a sheet of graph paper with n rows and m columns, and he imagines that there is an army base in each cell for a total of n . m bases. He wants to drop supplies at strategic points on the sheet, marking each drop point with a red dot. If a base contains at least one package inside or on top of its border fence, then it's considered to be supplied. For example:

![City Table](https://s3.amazonaws.com/hr-challenge-images/0/1479944215-79f12638a7-example-army-game.png)

Given n and m, what's the minimum number of packages that Luke must drop to supply all of his bases?

Input Format

Two space-separated integers describing the respective values of n and m.

Constraints

0 < n,m =< 1000

Output Format

Print a single integer denoting the minimum number of supply packages Luke must drop.

Sample Input 0

    2 2

Sample Output 0

    1

Explanation 0

Luke has four bases in a 2 x 2grid. If he drops a single package where the walls of all four bases intersect, then those four cells can access the package:

![Cite Table](https://s3.amazonaws.com/hr-challenge-images/0/1479943282-a32d9bfad1-army-game.png)

Because he managed to supply all four bases with a single supply drop, we print 1 as our answer.