import { API_URL } from '@/constants/api/api';
import { GetDataWithOneQueryParam } from '@/types/interfaces';

export async function getDataWithOneQueryParam<T>({
  path,
  query,
  param,
}: GetDataWithOneQueryParam): Promise<T> {
  const res = await fetch(`${API_URL}/${path}/?${query}=${param}`);
  return res.json();
}
