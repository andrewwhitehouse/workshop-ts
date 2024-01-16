import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class ApiStack extends cdk.Stack {
  /**
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps} props
   */
  constructor(scope: cdk.App, id: string, props?: cdk.StageProps) {
    super(scope, id, props);

    const lambdaFunction = new lambda.Function(this, 'HandlerFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'handler.hello',
      code: lambda.Code.fromAsset('functions'),
    })

    const api = new apigw.RestApi(this, 'MyApi')

    const lambdaIntegration = new apigw.LambdaIntegration(lambdaFunction)
    api.root.addMethod('GET', lambdaIntegration)
  }
}

module.exports = { ApiStack }
