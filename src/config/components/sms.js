 let config = {
 	// sms: {
 	// 	"host": "112.196.55.203",
 	// 	"port": "11353",
 	// 	"sid": "CFSEYE",
 	// 	"auth": {
 	// 		"user": "CENTTRN",
 	// 		"pass": "VCON_456"
 	// 	},
 	// 	"defaultSMSType": "SingleSMS.aspx",
 	// 	"appLinkMessage": "Click here (https://www.google.com) to download CFS patient care app from app/play store to update, track and reschedule the appointments ."
	 // }
	 sms: {
		url: "https://bulksmsapi.vispl.in/",
		appLinkMessage: "Click here (https://www.google.com) to download CFS patient care app from app/play store to update, track and reschedule the appointments .",
		params: {
		  username: "centretrn1",
		  password: "centretrn1@123",
		  messageType: 'text',
		  senderId: 'CFSEYE'
		}
	 }
 }

 module.exports = config;
