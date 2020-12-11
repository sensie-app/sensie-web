/* Amplify Params - DO NOT EDIT
	API_SENSIE_GRAPHQLAPIIDOUTPUT
	API_SENSIE_SENSIETABLE_ARN
	API_SENSIE_SENSIETABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var aws = require('aws-sdk');
//var ddb = new aws.DynamoDB();
var docClient = new aws.DynamoDB.DocumentClient()


function runAlgos(ev) {
    // get prev data from user, run algo, etc.
    return Math.random() < 0.5 ? "0" : "1";
}

exports.handler = async (event, context) => {
    // TODO implement
    let owner = event.identity.claims.sub;

    let input = event.arguments.input;
    let date = new Date();
    input.id = context.awsRequestId;
    input.createdAt = input.updatedAt = date.toISOString();
    input.owner = owner;
    input.userId = owner;
    input.result = "FAILED"
    try {
        let result = runAlgos(event.source);
        input.result = result;
        const params = {
            TableName: process.env.API_SENSIEBACKEND_SENSIETABLE_NAME,
            Key: {
                id: input.id
            },
            Item: input
        }

        let res = await docClient.put(params).promise()

        console.log(res);
        console.log("Updated")
    } catch (err) {
        
        console.log("Error", err);
        
    }
    return input;
};
