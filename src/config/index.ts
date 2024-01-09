import "dotenv/config";

const {env} = process;

export const config = {
  port: env.PORT,
};
