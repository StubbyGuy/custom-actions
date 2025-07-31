const core = require('@actions/core');
const core = require('@actions/github');

try {
    const name = core.getInput('name');
    const output_value = 'Hello ${name}!';
    core.setOutput('greeting', output_value);
} catch (error) {
    core.setFailed(error.message);
}



