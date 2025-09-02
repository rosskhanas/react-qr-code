export function bytesToBinaryString(bytes) {
  return bytes.map((b) => String.fromCharCode(b & 0xff)).join("");
}
