import { Bucket, BucketEncryption } from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import { Runtime } from '@aws-cdk/aws-lambda';
import * as path from 'path';

export class AwsCdkSimpleAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'my-simple-app-bucket', {
      encryption: BucketEncryption.S3_MANAGED,
      bucketName: 'my-simple-app-bucket'
    });
    new cdk.CfnOutput(this, 'my-simple-app-bucket-export', {
      value: bucket.bucketName,
      exportName: 'someExportName'
    });


    const getPhotos = new lambda.Function(
      this, 'MySimpleAppLambda', {
      runtime: Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset(path.join(__dirname, '..', 'api', 'get-photos')),
      handler: 'index.getPhotos'
    }
    )

    console.log(path.join(__dirname, '..', 'api', 'get-photos'))
  }
}
