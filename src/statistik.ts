export function nilaiTertinggi(angka: number[]): number {
  if (angka.length === 0) return 0;
  return Math.max(...angka);
}