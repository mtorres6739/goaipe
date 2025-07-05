# n8n "Queued" Status Troubleshooting

## Problem
Webhook executions show as "queued" in n8n but don't process.

## Common Causes & Solutions

### 1. Workflow Not Active
- Go to your n8n workflow
- Make sure the workflow is **activated** (toggle switch should be ON)
- The workflow must be active to process webhook data

### 2. n8n Running in Queue Mode
If your n8n instance is configured with `EXECUTIONS_MODE=queue`, you need workers to process the queue.

**Check your n8n configuration:**
- Look for `EXECUTIONS_MODE` environment variable
- If it's set to `queue`, you need to either:
  - Start n8n workers, or
  - Change it to `EXECUTIONS_MODE=regular`

### 3. For Elestio n8n Instance
Since you're using Elestio, check these settings:

1. **In Elestio Dashboard:**
   - Go to your n8n service
   - Check Environment Variables
   - Look for `EXECUTIONS_MODE`
   - If it's `queue`, change to `regular`
   - Restart the service

2. **Alternative: Add Workers**
   If you want to keep queue mode:
   - You need to run n8n worker processes
   - Check Elestio documentation for scaling workers

### 4. Webhook Configuration
Make sure your webhook node in n8n:
- Method is set to POST
- Response Mode is set to "When last node finishes"
- Path matches your webhook URL

### 5. Check n8n Logs
In Elestio:
- Go to your n8n service
- Check logs for any errors
- Look for webhook reception confirmations

## Quick Fix
The easiest solution is usually to change from queue mode to regular mode:
1. In Elestio, go to your n8n service
2. Edit environment variables
3. Set `EXECUTIONS_MODE=regular`
4. Restart the service

## Testing
After making changes:
1. Make sure the workflow is active
2. Send a test webhook
3. Check if it processes immediately instead of showing "queued"