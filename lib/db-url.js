function normalizeDbBaseUrl(rawUrl) {
  const trimmed = rawUrl?.trim();
  if (!trimmed) {
    throw new Error('DB_URL is not defined');
  }

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  return withProtocol.replace(/\/+$/, '');
}

export function buildDbUrl(path = '') {
  const baseUrl = normalizeDbBaseUrl(process.env.DB_URL);
  const normalizedPath = path ? `/${String(path).replace(/^\/+/, '')}` : '';
  return `${baseUrl}${normalizedPath}`;
}
