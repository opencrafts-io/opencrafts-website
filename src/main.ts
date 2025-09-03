import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import posthog from 'posthog-js'

posthog.init('phc_5HNZKPcWr3o8NoB4JEYzqylExNZN2H95B2axVDf6lrr', {
  api_host:'https://eu.i.posthog.com',
  defaults: '2025-05-24'
})


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
