We send 100 transfers, generate blocks until they are completed, and then try to get the transaction, but then we get the error:

```
Error: Unsuccessful proxy request. Response: {
  "data": null,
  "error": "transaction not found",
  "code": "internal_issue"
}
```

File `fsproxy-logs/fsproxy-2024-08-11-15-56-52.log` contains all logs.

# How to reproduce

```
npm install
npm run test
```

**NOTE:** The test might sometimes pass. Run it until it fails.
