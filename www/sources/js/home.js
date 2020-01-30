function joinRoom() {

    let roomId = "1";
    let roomName = "1";
    let classId = "1";
    window.location.href = "?p=settings&n=" + roomId + "&c=" + classId;
    setMinMaxRoles();
}

function joinSettings() {
    let url = window.location.href;
    let newParam = url.split("?")[1].replace("rules", "settings");
    setMinMaxRoles();
    window.location.href = "?" + newParam;

}


