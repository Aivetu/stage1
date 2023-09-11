const response =  (req,res) =>{
    const name  = req.query.slack_name;
    const track = req.query.track;

    if(!name || !track){ return res.send("Enter stagename and/or track") } 

    const date = new Date();
    const dateString = date.toISOString().slice(0,19).concat('Z');
    const day = date.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

    
    const resp ={
        
        "slack_name": name,
        "current_day": dayNames[day],
        "utc_time": dateString,
        "track": track,
        "github_file_url": "https://github.com/Aivetu/stage1/blob/main/server.js",
        "github_repo_url": "https://github.com/Aivetu/stage1",
        "status_code": 200 
    }
    return res.json(resp);
}
module.exports = {response};