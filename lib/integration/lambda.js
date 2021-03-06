/* eslint-disable */

'use strict'

const Velocity = require('velocityjs')

const event = (req) => {
  if (!req.context.request)
    { return req.body }

  input = {
    body: {},
    method: 'GET',
    principalId: (req.context.authorizer) ? req.context.authorizer.principalId : '',
    headers: {
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, sdch, br', 'Accept-Language': 'en-US,en;q=0.8',
      'CloudFront-Forwarded-Proto': 'https',
      'CloudFront-Is-Desktop-Viewer': 'true',
      'CloudFront-Is-Mobile-Viewer': 'false',
      'CloudFront-Is-SmartTV-Viewer': 'false',
      'CloudFront-Is-Tablet-Viewer': 'false',
      'CloudFront-Viewer-Country': 'AU',
      Cookie: '_ga=GA1.2.2133942382.1463525528',
      Host: 'tudncgxbu4.execute-api.ap-southeast-2.amazonaws.com',
      Referer: 'https://ap-southeast-2.console.aws.amazon.com/apigateway/home?region=ap-southeast-2',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
      Via: '1.1 d4dbc6987ddd22a023698236d3f09b02.cloudfront.net (CloudFront)', 'X-Amz-Cf-Id': 'Q-CKn1zpUbVIdZO3j-SR5qBudLJ44DBPcBTtpkd_79gna_G7BKuquw==',
      'X-Forwarded-For': '124.170.110.5, 54.240.152.131',
      'X-Forwarded-Port': '443',
      'X-Forwarded-Proto': 'https',
    },
    query: {},
    path: {},
    identity: {
      cognitoIdentityPoolId: '',
      accountId: '',
      cognitoIdentityId: '',
      caller: '',
      apiKey: '',
      sourceIp: '124.170.110.5',
      cognitoAuthenticationType: '',
      cognitoAuthenticationProvider: '',
      userArn: '',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
      user: '',
    },
    stageVariables: {},
  }

  return input
}

const response = (req, result) =>
  Object.assign({}, result)

module.exports = {
  event,
  response,
}
