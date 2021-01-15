import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as AwsCdkSimpleApp from '../lib/aws-cdk-simple-app-stack';
import '@aws-cdk/assert/jest';

test('Simple app stack Stack', () => {
    //SETUP
    const app = new cdk.App();
    // ACT
    const stack = new AwsCdkSimpleApp.AwsCdkSimpleAppStack(app, 'AwsCdkSimpleAppStack');
    // ASERT
    expect(stack).toHaveResource('AWS::S3::Bucket');
});
