export const capitalizeFirstLetter = (str) => {
    str = str.split("_").join(" ")
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
export function flattenObject(obj, parentKey = '') {
  let result = {};

  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      const flattened = flattenObject(obj[key], parentKey ? `${parentKey}.${key}` : key);
      result = { ...result, ...flattened };
    } else {
      result[parentKey ? `${parentKey}.${key}` : key] = obj[key];
    }
  }

  return result;
}

  
  