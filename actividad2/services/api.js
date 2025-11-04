export async function fetchData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Error en la API:', error.message);
    throw error;
  }
}
