// Function to extract custom delimiter
const getDelimiter = (numbers) => {
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        return { 
            delimiter: new RegExp(parts[0].slice(2).replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')),
            numbers: parts.slice(1).join("\n")
        };
    }
    return { delimiter: /,|\n/, numbers };
};

// Function to parse numbers and filter out negatives
const parseNumbers = (numbers, delimiter) => {
    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(n => n < 0);
    
    if (negatives.length) throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    
    return numArray.filter(n => n <= 1000);
};

// Main Add function
const Add = (numbers) => {
    if (!numbers) return 0;
    
    const { delimiter, numbers: cleanNumbers } = getDelimiter(numbers);
    const validNumbers = parseNumbers(cleanNumbers, delimiter);
    
    return validNumbers.reduce((sum, num) => sum + num, 0);
};

// Using simple console logs for test
const test = () => {
    console.log(Add("")); // 0
    console.log(Add("1")); // 1
    console.log(Add("1,2")); // 3
    console.log(Add("1\n2,3")); // 6
    console.log(Add("//;\n1;2")); // 3
    console.log(Add("2,1001")); // 2
    
    try {
        console.log(Add("1,-2,3,-4"));
    } catch (e) {
        console.log(e.message); // Negatives not allowed: -2, -4
    }
};

// Run the test cases
test();
