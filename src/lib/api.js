const BASE_URL = 'https://6895f774039a1a2b2890fb64.mockapi.io/api/v1';

export async function listarLivros() {
  const res = await fetch (`${BASE_URL}/livro`);
  return res.json();
}
