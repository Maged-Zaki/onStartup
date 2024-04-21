const fs  = require('fs');
const path = require('path');
const { exec } = require('child_process');

const directory = 'weekDays'

const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

const appFolderToStartup = path.join(process.cwd(), directory, currentDay)

// ensure weekDays folder exists and if it doesn't create it
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
}
// ensure week day folder exists in weekDays folder and if not create it
for (let day of ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']) {
    const dayPath = path.join(directory, day);

    if (!fs.existsSync(dayPath)) {
        fs.mkdirSync(dayPath);
    }
}

fs.readdir(appFolderToStartup, async (err, files) => {
    if (err) {
        console.error(`Error reading folder: ${err}`);
        process.exit(1);
    }

    // ensure it is a file and not hidden
    const apps = files.filter(file => {
        const filePath = path.join(appFolderToStartup, file);
        return fs.statSync(filePath).isFile() && !file.startsWith('.');
    });

    // loop over all apps and execute them
    for(let app of apps) {
        console.log(`Starting ${app}`);

        const appFullPath = path.join(appFolderToStartup, app);

        exec(`${appFullPath}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing ${app}: ${error}`);
            }

            if (stderr) {
                console.error(`Error: ${stderr}`);
            }
        })
    }
})