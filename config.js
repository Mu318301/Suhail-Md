const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254796979346";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254796979346";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_55_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgMTE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjksXG4gICAgICAgIDM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTExLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIsXG4gICAgICAgIDg0LFxuICAgICAgICA3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQyLFxuICAgICAgICA4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MixcbiAgICAgICAgOTksXG4gICAgICAgIDQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMixcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1LFxuICAgICAgICA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSWjRSaUZPVUZDUHovWWpwaHNBNE5vV1pWRlJ2RERCb2dlVXg3dW5lWUo0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5Njk3OTM0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEQwRUI0RDcyNDg5MDQ5Q0E5NzAyMzM2RUQ4Mzg4ODFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NDYzMzI3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVmM01tNnUyU1QyNzNHWUZ0ME1FWlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTY3MjMzYjQtOTg2My00MGMxLWI0MDYtYTM0ZjViMzljMjUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgODYsXG4gICAgICAxNSxcbiAgICAgIDI0NSxcbiAgICAgIDIyNyxcbiAgICAgIDE5MSxcbiAgICAgIDUzLFxuICAgICAgMTEzLFxuICAgICAgMjM5LFxuICAgICAgMjAzLFxuICAgICAgNTIsXG4gICAgICA0MyxcbiAgICAgIDI1NSxcbiAgICAgIDM5LFxuICAgICAgNDksXG4gICAgICAxNTksXG4gICAgICAxNzYsXG4gICAgICAxOTksXG4gICAgICA0OCxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MixcbiAgICAgIDkxLFxuICAgICAgMTE5LFxuICAgICAgNSxcbiAgICAgIDIxNixcbiAgICAgIDM5LFxuICAgICAgMTg5LFxuICAgICAgNjgsXG4gICAgICA5NSxcbiAgICAgIDEwLFxuICAgICAgMTU3LFxuICAgICAgNDksXG4gICAgICAxLFxuICAgICAgMTYwLFxuICAgICAgMTQ1LFxuICAgICAgODQsXG4gICAgICA0MCxcbiAgICAgIDc2LFxuICAgICAgMTExLFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzZBWjRIWldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5Njk3OTM0Njo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3MzIzODI1MjEzNDUzMDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmS3FLOEVFTlRXdHJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibGhsSTdGT1FJMG1FUEg4Vk5sTmhxSkIzTmRDajBnakJwOWhTY2ZnblZ5ST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiTnZKOTZKNUFYOENsYUU4TlY5ZmEwTjVmOWRWdXphbUVxT25qL3g5MHB0V1ZoTG44NmRGSUpaUUR3TnFoRmpuZEloZkIrUmZ6cjRkeFNhUGl5dGxBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3Y2x5UTkxekVFM1IzZEVtZlQ2bWRlTkdzN1NmSlJkZ1BuWmtzcHh1NmNrcTNycVNtbjd5bm1SSzlKYXJpYjE4YXl6L29SYW1mL0RUT2p6eUhDaHdqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTY5NzkzNDY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg0NjMzMjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNYVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1hVS5qc29uIjogIntcImtleURhdGFcIjpcImhPRlM3WnlCb3hvVjV3MFdjckJtQjhCbHREWFFBNXhqUnA1Ymw0SDd1MUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE3Mjk3MjgzOCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MUNYIKS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
