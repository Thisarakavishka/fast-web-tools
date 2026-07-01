export interface JWTHeader {
  alg?: string;
  typ?: string;
  kid?: string;
  [key: string]: any;
}

export interface JWTPayload {
  iss?: string;
  sub?: string;
  aud?: string | string[];
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  [key: string]: any;
}

export interface JWTDecodeResult {
  valid: boolean;
  header: JWTHeader | null;
  payload: JWTPayload | null;
  signature: string;
  error?: string;
}

export interface JWTStatistics {
  algorithm: string;
  type: string;
  issuer: string;
  subject: string;
  audience: string;
  issuedAt: string;
  expiresAt: string;
  notBefore: string;
  expired: boolean;
  signature: boolean;
  tokenSize: number;
}

function decodeBase64Url(value: string): string {
  const base64 = value
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd(Math.ceil(value.length / 4) * 4, "=");

  return decodeURIComponent(escape(atob(base64)));
}

export function decodeJWT(token: string): JWTDecodeResult {
  try {
    const parts = token.trim().split(".");

    if (parts.length !== 3) {
      throw new Error("JWT must contain Header.Payload.Signature");
    }

    const header = JSON.parse(decodeBase64Url(parts[0]));

    const payload = JSON.parse(decodeBase64Url(parts[1]));

    return {
      valid: true,
      header,
      payload,
      signature: parts[2],
    };
  } catch (err: any) {
    return {
      valid: false,
      header: null,
      payload: null,
      signature: "",
      error: err.message,
    };
  }
}

function formatDate(value?: number) {
  if (!value) return "-";

  return new Date(value * 1000).toLocaleString();
}

export function getJWTStatistics(token: string): JWTStatistics {
  const decoded = decodeJWT(token);

  if (!decoded.valid || !decoded.payload) {
    return {
      algorithm: "-",
      type: "-",
      issuer: "-",
      subject: "-",
      audience: "-",
      issuedAt: "-",
      expiresAt: "-",
      notBefore: "-",
      expired: false,
      signature: false,
      tokenSize: token.length,
    };
  }

  const payload = decoded.payload;
  const header = decoded.header!;

  return {
    algorithm: header.alg ?? "-",

    type: header.typ ?? "JWT",

    issuer: payload.iss ?? "-",

    subject: payload.sub ?? "-",

    audience: Array.isArray(payload.aud)
      ? payload.aud.join(", ")
      : (payload.aud ?? "-"),

    issuedAt: formatDate(payload.iat),

    expiresAt: formatDate(payload.exp),

    notBefore: formatDate(payload.nbf),

    expired: payload.exp ? payload.exp * 1000 < Date.now() : false,

    signature: decoded.signature.length > 0,

    tokenSize: token.length,
  };
}

export async function pasteJWT() {
  return navigator.clipboard.readText();
}

export async function copyJWT(text: string) {
  await navigator.clipboard.writeText(text);
}

export function clearJWT() {
  return "";
}

export async function uploadJWT(file: File) {
  return file.text();
}

export function downloadJWT(token: string, filename = "jwt.txt") {
  const blob = new Blob([token], {
    type: "text/plain",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;

  a.download = filename;

  a.click();

  URL.revokeObjectURL(url);
}

export function isExpired(exp?: number) {
  if (!exp) return false;

  return exp * 1000 < Date.now();
}
