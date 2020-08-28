const { desktopCapturer } = require("electron");

const caputreScreen = ()=>{
    const option = {
        types : ["screen"],
        thumbnailSize : {
            width : 1280,
            height : 720
        },
    };

    return new Promise((resolve,reject)=>{
        desktopCapturer.getSources(option).then(async (sources)=>{
            const res = handleSources(sources);
            resolve(res);
        }).catch(err=>{
            console.log(err);
            reject(err);
        });
    });
};

const handleSources = (sources) =>{
    const res = sources.map(s=>s.thumbnail.toDataURL());
    for (const pic of res) {
        const img = document.createElement('img');
        img.src = pic;
        document.body.append(img);    
    }
    return res;
};

module.exports = caputreScreen;
