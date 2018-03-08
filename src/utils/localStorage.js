export function setJSONData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  return data;
}
