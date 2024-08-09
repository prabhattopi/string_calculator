export function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = /[\n,]/; // Default delimiters are commas and new lines
  
    // Check for a custom delimiter
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].substring(2)); // Extract custom delimiter
      numbers = parts[1]; // Remaining string after delimiter line
    }
  
    // Split by delimiter
    const numArray = numbers.split(delimiter)
      .map(num => num.trim()) // Trim whitespace
      .map(num => {
        // Remove any non-numeric characters except leading minus for negative numbers
        const cleanedNum = num.replace(/[^0-9-]/g, '');
        return cleanedNum;
      })
      .filter(num => num !== "" && !isNaN(num)) // Filter out empty strings and non-numeric values
      .map(num => parseInt(num, 10)); // Convert to integers
  
    // Check for negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    // Sum up the numbers
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  