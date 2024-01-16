#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import * as apistack from './constructs/api-stack';

const app = new cdk.App()
new apistack.ApiStack(app, 'ApiStack')
