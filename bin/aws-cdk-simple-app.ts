#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkSimpleAppStack } from '../lib/aws-cdk-simple-app-stack';

const app = new cdk.App();
new AwsCdkSimpleAppStack(app, 'AwsCdkSimpleAppStack');
