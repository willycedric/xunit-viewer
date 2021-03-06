import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/js/all'

import './app/index.css'
import App from './app/app.js'

let files = window.files || []

if (process.env.NODE_ENV === 'development') {
  files = [{
    file: '/path/to/file/complete.xml',
    contents: `<?xml version="1.0" encoding="UTF-8" ?>
    <testsuite tests="939" failures="4" name="CucumberTest" time="0.069" errors="0" skipped="0">
        <testcase classname="Scenario: Uploading a file should work." name="Then the file is uploaded successfully" time="0.004">
            <failure type="java.lang.AssertionError">java.lang.AssertionError
        at org.junit.Assert.fail(Assert.java:86)
        at org.junit.Assert.assertTrue(Assert.java:41)
        at org.junit.Assert.assertTrue(Assert.java:52)
        at com.germaniumhq.germanium.steps.GermaniumFunctionSelectFile.the_file_is_uploaded_successfully(GermaniumFunctionSelectFile.java:26)
        at ✽.Then the file is uploaded successfully(features/features/germanium-function-select_file.feature:7)
            </failure>
        </testcase>
    </testsuite>`
  }]
}

ReactDOM.render(<App files={files} />, document.getElementById('root'))
