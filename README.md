# Atechy Call Center Management System

ACMS is a web based call center management system. It is a web based application that will act as a portal where the call center agents and supervisors can manage their client communication activities.

## Features

### 1. Call Center Management

Admins should be able to do the following:
- manage call center agents accounts.
- manage call center supervisors accounts.
- manage call center queues.
- manage call center agents schedules.
- view call center agents call logs.
- create scripts and data forms.
- manage targets and campaigns.
- monitor call center agents performance.

Supervisors should be able to do the following:
- view call center agents call logs.
- view call center agents performance.
- view call center agents schedules.
- assign agents to campaigns.
- receive complaints and deal with edge cases.

### 2. Agents

each agent will have access to a dashboard where he/she can view the following:
- call logs.
- performance.
- schedules.
- targets.
- campaigns, and calls script.
- complaints.

during a call the agent will be able to:
- fill up a data form based on the active campaign.
- view client information if available.
- record any complaint or special request.
- attach notes to the client profile.
- attach files to the client profile.
- send a message to the client based on predefined templates.
- send an email to the client based on predefined templates.
- as the agent is filling the form if the client is matched with a product or service, the agent will be notified.


## Architecture

the client side application is Angular 12, the project is based on firebase and google cloud platform.

the agents, supervisors and admins are all authenticated using firebase authentication, and they have a unified client interface that is based on Angular.

all data should be stored in Firestore database.

each campaign will contain a list of targets, each target will contain a list of products and services suggested to that target. and a communication history log for every phone call, message, or email.

the campaign will be the main entity that will contain scripts, data forms, and targets. clients data should be siloed in each campaign and not mixed up.

each campaign is assigned to a brand, and each brand will have a list of campaigns.

## API

the application will expose an API that allow third party stakeholders to access their data, and also to create new campaigns, targets, and products and services.

create and manage call scripts, view and analyze call logs, and review call center performance.

the API will be hosted on firebase cloud functions, and adhere to RESTFUL API design.

