# Binary search in a sorted 1D array
<!-- Short summary or background information -->
Code Challange 03: Binary search in a sorted 1D array
paired with Heather Cherwaty and Ryan Gallaway

## Challenge
<!-- Description of the challenge -->
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
We decided to do a for loop to iterate through each index of the given array and check the values against the val given. We updated an output variable from -1 to the index of the matching element( if there is one), then returned it.


## Solution
<!-- Embedded whiteboard image -->
![Whole Whiteboard image](../../assets/array-binary-search.jpg)