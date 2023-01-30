// -----JS CODE-----
// @input int formationIndex
// @input Component.ScriptComponent controller

script.createEvent("TapEvent").bind(function(){
    print("helper 2 tapped");
    script.controller.api.triggerFormation(script.formationIndex);
});