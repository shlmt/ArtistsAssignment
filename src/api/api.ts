const API_BASE_URL = "https://www.theaudiodb.com/api/v1/json/123";

export const apiFetch = async (endpoint: string) => {
  const res = await fetch(`${API_BASE_URL}/${endpoint}`);
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint.slice(0, endpoint.indexOf("."))}`);
  const data = await res.json();
  return data;
};
