const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY ?? "";
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN ?? "";

const configs = {
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN,
};

export default configs;
