// -----JS CODE-----
// @input int numberOfClones
// @input Component.ScriptComponent controller

script.createEvent("TapEvent").bind(function(){
    print("helper 1 tapped");
    script.controller.api.triggerClones(script.numberOfClones);
});
