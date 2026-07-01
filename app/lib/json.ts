export function formatJSON(input: string): string {
  return JSON.stringify(JSON.parse(input), null, 2);
}

export function minifyJSON(input: string): string {
  return JSON.stringify(JSON.parse(input));
}

function sortObject(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(sortObject);
  }

  if (obj !== null && typeof obj === "object") {
    return Object.keys(obj)
      .sort()
      .reduce((acc: any, key) => {
        acc[key] = sortObject(obj[key]);
        return acc;
      }, {});
  }

  return obj;
}

export function sortJSON(input: string): string {
  return JSON.stringify(sortObject(JSON.parse(input)), null, 2);
}

export function validateJSON(input: string) {
  try {
    JSON.parse(input);

    return {
      valid: true,
      message: "",
    };
  } catch (err: any) {
    return {
      valid: false,
      message: err.message,
    };
  }
}

function countKeys(obj: any): number {
  if (!obj || typeof obj !== "object") return 0;

  return Object.keys(obj).reduce((total, key) => {
    return total + 1 + countKeys(obj[key]);
  }, 0);
}

function countArrays(obj: any): number {
  if (!obj || typeof obj !== "object") return 0;

  let total = Array.isArray(obj) ? 1 : 0;

  Object.values(obj).forEach((value) => {
    total += countArrays(value);
  });

  return total;
}

function countObjects(obj: any): number {
  if (!obj || typeof obj !== "object") return 0;

  let total = Array.isArray(obj) ? 0 : 1;

  Object.values(obj).forEach((value) => {
    total += countObjects(value);
  });

  return total;
}

function getDepth(obj: any): number {
  if (!obj || typeof obj !== "object") return 0;

  return 1 + Math.max(0, ...Object.values(obj).map((value) => getDepth(value)));
}

export function getJSONStats(input: string) {
  try {
    const parsed = JSON.parse(input);

    return {
      valid: true,
      characters: input.length,
      lines: input.split("\n").length,
      bytes: new Blob([input]).size,
      keys: countKeys(parsed),
      objects: countObjects(parsed),
      arrays: countArrays(parsed),
      depth: getDepth(parsed),
      type: Array.isArray(parsed) ? "Array" : "Object",
    };
  } catch {
    return {
      valid: false,
      characters: input.length,
      lines: input.split("\n").length,
      bytes: new Blob([input]).size,
      keys: 0,
      objects: 0,
      arrays: 0,
      depth: 0,
      type: "-",
    };
  }
}
