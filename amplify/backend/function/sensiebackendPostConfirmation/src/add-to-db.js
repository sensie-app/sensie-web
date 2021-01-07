/* Amplify Params - DO NOT EDIT
	API_SENSIEBACKEND_GRAPHQLAPIIDOUTPUT
	API_SENSIEBACKEND_USERTABLE_ARN
	API_SENSIEBACKEND_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const aws = require('aws-sdk');

var ddb = new aws.DynamoDB();

exports.handler = async (event, context, callback) => {
    // TODO implement
    console.log(event);
    let date = new Date();

    if (event.request.userAttributes.sub) {
        console.log(event.request.userAttributes)
        let attr = event.request.userAttributes;
        let params = {
            Item: {
                'id': {S: attr.sub},
                'owner': {S: attr.sub},
                '__typename': {S: 'User'},
                'firstName': {S: attr.name},
                'lastName': {S: attr.family_name},
                'gender': {S: attr.gender},
                'dob': {S: attr.birthdate},
                'domHand': {S: "Right"},
                'goal': {S: "Default"},
                'userOrganizationId': {S: "ORG0"},
                'userGroupId': {S: "GROUP0"},
                //'domHand': {S: event.request.userAttributes.domHand},
                'email': {S: attr.email},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: "User-" + process.env.GRAPHQLID + "-" + process.env.ENV
        };

        // Call DynamoDB
        try {
            await ddb.putItem(params).promise()
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
        //context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DynamoDB");
        //context.done(null, event);
    }
    
};
