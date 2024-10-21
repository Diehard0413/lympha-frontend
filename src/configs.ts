const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY ?? "";
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN ?? "";

const API_URL = process.env.API_URL ?? "https://dreamsky-server.net/api";
const SOCKET_URL = process.env.SOCKET_URL ?? "wss://dreamsky-server.net";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "panda141035@gmail.com";

const configs = {
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN,
  API_URL,
  SOCKET_URL,
  ADMIN_EMAIL
};

export default configs;
