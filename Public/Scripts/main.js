// -----JS CODE-----
// @input Component.Image[] cloneImgs
// @input SceneObject choicess

print("passing thru");
//print("clone count:");
//print(cloneCount);

var cloneCount = 0;
//var hasStarted = false;

var formationIndex = 0; // pyramid

print("total num clones");
print(script.cloneImgs.length);
for (var i = 0; i < script.cloneImgs.length; i++){
    script.cloneImgs[i].enabled = false;
}
//script.cloneImgs[6].enabled = true;

function createClone(index){
    print("making clone " + index);
    //script.cloneMats[index].mainPass.baseTex = script.cameraTex.copyFrame();
    //script.cloneMats[index].mainPass.opacityTex = script.maskTex.copyFrame();
    script.cloneImgs[index].enabled = true;
}



function startCloning(num){
    print(num);
    
    //erase all
    for (var i = 0; i < script.cloneImgs.length; i++){
        script.cloneImgs[i].enabled = false;
    }
    
    //hasStarted = true;
    //script.choices.enabled = false;
    cloneCount = num;
    for (var i = 0; i < cloneCount; i++)
        createClone(i + formationIndex*4);
    //delayedEvent.reset(delayTime);
}

function changeFormation(num){
    print("change formation");
    print(num);
    for (var i = 0; i < script.cloneImgs.length; i++){
        script.cloneImgs[i].enabled = false;
    }
    formationIndex = num;
    for (var i = 0; i < cloneCount; i++)
        createClone(i + formationIndex*4);
}

script.api.triggerClones = startCloning;
script.api.triggerFormation = changeFormation;