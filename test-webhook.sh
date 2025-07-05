#!/bin/bash

echo "Testing n8n webhook directly..."

curl -X POST https://n8n-u40256.vm.elestio.app/webhook/0fc1b197-01f6-4464-8414-28cb759301da \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "company": "Test Company",
    "insuranceType": "property-casualty",
    "message": "This is a direct webhook test",
    "submittedAt": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'",
    "source": "direct-test"
  }' \
  -v