# onStartup

**onStartup** is a software application that starts up the specified application files in the weekDays folder depending on the current day of the week.

## Why?

I was annoyed that Windows doesn't have this feature and just starts up all apps specified in the startup folder and I wanted to start up specific applications depending on the day.

## Technologies and Libraries used

-   **Nodejs:** Used as the runtime.
-   **pkg:** Used to package the project into an executable file.

The repo has the code and the compiled code into an executable file in the bin dir.

## Getting started to use the app

```
git clone https://github.com/Maged-Zaki/onStartup
```

```
cd onStartup/bin
```

**1. Take a shortcut of the `onStartup.exe` and add it to the startup folder so it's executed when the OS starts up.**

**2. Take a shortcut of the app you want to open when the OS starts up and add it to the day folder in the `weekDays` directory.**
