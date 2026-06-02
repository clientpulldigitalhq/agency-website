import { getEnv } from "./utils/getEnv";

const github = getEnv({ name: "VITE_GITHUB_USERNAME" });
const whatsapp = getEnv({ name: "VITE_WHATSAPP_NUMBER" });
const email = getEnv({ name: "VITE_EMAIL_ADDRESS" });

export const socialsConfig = {
  github,
  whatsapp,
  email,
};
