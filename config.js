//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "2347042551253";
global.sudo = process.env.SUDO || "2347042551253";
global.owner = process.env.OWNER_NUMBER || "2347042551253";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFB5SXBXL2l1c2VyWXY3ZC9pZDczWVJUZXJCMk9ialJBdFVvelhtS01tZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUk9tRDN6NmlUWElmTTZoL0FFM0hudGpRSWlFUVRDalhUa3MxRE93MFhRRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTk44U0l4ajFYT1VIRk5rYWl2VHU3SzdWV2RKeE9rcC9iL3E2bm1hYlc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUTGxIYlp2aHhoTWJOeXpwa0RuSFFHSTc3NXJFN2V3Z1VvUE1HbEtQYnlvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlFN3ZVaExCMnlnajVsK3ppdEExbjM4ODF4YUlTeUV6d1FtOWxIdWJVVkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM1RUZiR3VuaWxjclBWSENZYS9XR0hqQ25JUlRZUWNmNmZaQjlRenhGVzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJ5ay80OFlzaDE2cTM4dG4wTHdhT3RrTTJiUXhGTVRlSW5yNmJCZEpsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnVSOTcyTDkwemFsUWovTHd4dG9RVEdmS0JaWW5xeEp2SWhDbGJlS0hTaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijk4Y3l5ZmYzUDJJUllESjdRMi9XOHZ5ekIzd0F4MVRRdmxtSDRqK3JOK1lKYUwyUGFOYlJjeGhKWHJjRnhkd0wzblZmZTlVWkt0eUhvcHBIUmNWQWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJjbHZ6TnVPMjJMWnQwZ2hsM1ptOWc5MGxJSHRTemdoTGRoZi9VRzZRMXljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaRFRJZlVGZlM3aVVQaHdVWEtiLV9RIiwicGhvbmVJZCI6ImE5MWMzOTVkLTYxNzctNGIzZi05ZjMxLTUyMGI0ZDFhMzczNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvYjRiT1d3czZyOUViT3RaZVVQcENqbzFpRU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWh3UVprZ1BEcFpsdStqRzkrZlNiZ3F6UUZ3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRaUkZFVkRFIiwibWUiOnsiaWQiOiIyMzQ3MDQyNTUxMjUzOjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkZyYW5vdmEgTWVkaWEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ091VG45OEdFS1Q4d3JRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZSSlBnRkQ3emZleHk4cnBDeTBGSDFDempFcHBJaXBqVkRvY0RlVFdoQms9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImhqZWx0TUVDZFpiU3JQeVNZSElpckhvNjJtZjcyMmd2clVGN0NqcUU5Q0xsR2psaW5UM21OdFExa3RuVEZXc0pzdXlDWUdJdlBYTS9CK2ZWcHg5c0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMRWhMa240dnRUU1plZTdSU2dJRzJWbWh1bW5DbG9sVEJkbjBObGhuNHEwUE43Mks0cmphQ0VYVS9CdXVGUCtMMTg3cGVab0IzL3RpOW96UGcwb0Fndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDI1NTEyNTM6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlVTVDRCUSs4MzNzY3ZLNlFzdEJSOVFzNHhLYVNJcVkxUTZIQTNrMW9RWiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDc2MTkwNX0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRANOVA'S BOT",
  ownername: process.env.OWNER_NAME || "FRANOVA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
