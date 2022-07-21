function button_onclick(){
    post_now();
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function post_now(){
    document.getElementById("submiting_tips").attributes.removeNamedItem("hidden");
    var link = document.getElementById("input_title").value + ">" + document.getElementById("input_type").value + ">" + document.getElementById("input_url").value + ">" + document.getElementById("input_sign").value;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'http://api.leakrooms.ml/contribute_gi_beta', true);
    httpRequest.send(link);
    /**
     * 获取数据后的处理程序
     */
     httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;
            alert(json);
        }
    };
    await sleep(1000);
    location.reload();
    
}
