import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import express from "express";

dotenv.config();

console.log(process.env.REACT_APP_API_URL);
