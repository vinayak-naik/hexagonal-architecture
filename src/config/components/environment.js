let config = {
  port: 6000,
  // redis_url: "localhost:6379",
  // // redis_url: process.env.REDIS_URL,
  // redis: {
  //   host: process.env.REDIS_HOST || "localhost",
  //   port: process.env.REDIS_PORT || "6379"
  // },
  // passwordExpiry: 100, //In Minutes
  // host: "http://65.2.133.250/",
  // imageHost: "http://182.75.17.181/",
  // aws: {
  //   s3: {
  //     bucketName : "feedback-service-images",
  //     accessKey : process.env.S3_ACCESSID,
  //     secretKey : process.env.S3_ACCESS_KEY
  //   }
  // },
  // tenants: [
  //   {
  //     name: "CFS",
  //     center: require('../../models/mongodb').cfsCenter,
  //     department: require('../../models/mongodb').cfsDepartment,
  //     feedback: require('../../models/mongodb').cfsFeedback,
  //     feedbackRequest: require('../../models/mongodb').cfsFeedbackrequest,
  //     feedbackTemplate: require('../../models/mongodb').cfsFeedbacktemplate,
  //     module: require('../../models/mongodb').cfsModule,
  //     patient: require('../../models/mongodb').cfsPatient,
  //     region: require('../../models/mongodb').cfsRegion,
  //     resource: require('../../models/mongodb').cfsResource,
  //     role: require('../../models/mongodb').cfsRole,
  //     rule: require('../../models/mongodb').cfsRule
  //   },
  //   {
  //     name: "CFV",
  //     center: require('../../models/mongodb').cfvCenter,
  //     department: require('../../models/mongodb').cfvDepartment,
  //     feedback: require('../../models/mongodb').cfvFeedback,
  //     feedbackRequest: require('../../models/mongodb').cfvFeedbackrequest,
  //     feedbackTemplate: require('../../models/mongodb').cfvFeedbacktemplate,
  //     module: require('../../models/mongodb').cfvModule,
  //     patient: require('../../models/mongodb').cfvPatient,
  //     region: require('../../models/mongodb').cfvRegion,
  //     resource: require('../../models/mongodb').cfvResource,
  //     role: require('../../models/mongodb').cfvRole,
  //     rule: require('../../models/mongodb').cfvRule,
  //     template:require('../../models/mongodb').cfvTemplate,
  //     form: require('../../models/mongodb').cfvForm,
  //     category: require('../../models/mongodb').cfvCategory,
  //     document: require('../../models/mongodb').cfvDocument
  //   }
  // ]
};

module.exports = config;
