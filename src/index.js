import { buildAction, buildSection } from './components/index';
import MinimalSample from './samples/01-getting-started/01-minimal-sample';
import SendQueryParams from './samples/01-getting-started/02-send-query-params';

// Heading
const app = document.getElementById('app')
const heading = document.createElement('h1')
heading.innerText = 'Learn Axios Samples'
app.appendChild(heading)
const description = document.createElement('p')
description.innerText = 'Test axios requests using the Rick and Morty rest API'
app.appendChild(description)
app.appendChild(buildAction('Reload', () => { window.location.reload() }))

// 01 Getting Started
const gettingStartedSection = buildSection('01 Getting Started')
app.appendChild(gettingStartedSection)
gettingStartedSection.appendChild(buildAction('01 Minimal Sample', MinimalSample))
gettingStartedSection.appendChild(buildAction('02 Send Query Params', SendQueryParams))
