function getResponseType(config) {
    // Return the responseType from config if it exists, otherwise default to 'text'
    return config && config.responseType || 'text';
}

// Example usage:
let config1 = { responseType: 'json' };
let config2 = { responseType: '' };
let config3 = null;

console.log(getResponseType(config1)); // Outputs: 'json'
console.log(getResponseType(config2)); // Outputs: 'text'
console.log(getResponseType(config3)); // Outputs: 'text'
