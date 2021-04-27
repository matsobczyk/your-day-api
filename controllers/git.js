exports.pull=(async(req, res) => {
    const { exec } = require("child_process");
    
    
    exec("git pull -X theirs", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        res.json(`stdout: ${stdout}`);
    })
});