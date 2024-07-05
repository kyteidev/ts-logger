# ts-logger
A super basic logger written in Typescript.

I wrote this logger for one of my projects, but it was too basic. I don't recommend you using this for production, as it doesn't have many important features found in loggers. Also a log of stuff has to be done manually :/ (e.g. stating file name)

This logger was originally made for Tauri apps, but you can modify the code to make it compatible with Node.

## Usage

```typescript
logger(isError, fileName, message);
```

- isError: boolean - whether the message is an error
- fileName: name of file where it's logged
- message: log message

## License

Copyright 2024 kyteidev. Licensed under GNU Lesser General Public License v2.1
