import * as dotenv from 'dotenv';
dotenv.config();

export const environment = {
  communityUser: {
    username: process.env.COMMUNITY_USERNAME,
    password: process.env.COMMUNITY_PASSWORD
  }
};
