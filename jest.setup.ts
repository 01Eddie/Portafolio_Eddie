// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

if (typeof global.structuredClone !== 'function') {
  global.structuredClone = (obj) => {
    if (obj === undefined || obj === null) return obj;
    return JSON.parse(JSON.stringify(obj));
  };
}