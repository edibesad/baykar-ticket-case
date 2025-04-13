export const saveToSessionStorage = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getFromSessionStorage = (key: string) => {
  try {
    if (typeof window === "undefined") return [];

    const value = sessionStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }
    return [];
  } catch (error) {
    console.error("Error parsing localStorage item:", error);
    return [];
  }
};

export const removeFromSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};
