#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import * as apistack from './constructs/api-stack';

const app = new cdk.App()
let stageName = app.node.tryGetContext('stageName')

if (!stageName) {
  console.log('Defaulting stage name to dev')
  stageName = 'dev'
}

new apistack.ApiStack(app, `ApiStack-${stageName}`, { stageName })
