const Scene = require('Scene');
export const Diagnostics = require('Diagnostics');
const NativeUI = require ('NativeUI');
const Textures = require ('Textures');
const Materials = require ('Materials');




const lutTextNeutral1 = Textures.get('logo1');
const lutTextNeutral2 = Textures.get('logo2');
const lutTextNeutral3 = Textures.get('logo3');
const lutTextNeutral4 = Textures.get('logo4');
const lutTextNeutral5 = Textures.get('logo5');
const lutTextNeutral6 = Textures.get('logo6');
const lutTextNeutral7 = Textures.get('logo7');
const lutTextNeutral8 = Textures.get('logo8');
const lutTextNeutral9 = Textures.get('logo9');
const lutTextNeutral10 = Textures.get('logo10');



const logo1 = Materials.get('material1');
const logo2 = Materials.get('lut0mat');
const logo3 = Materials.get('lut1mat');
const logo4 = Materials.get('lut2mat');
const logo5 = Materials.get('lut3mat');
const logo6 = Materials.get('lut4mat');
const logo7 = Materials.get('lut5mat');
const logo8 = Materials.get('lut6mat');
const logo9 = Materials.get('lut7mat');
const logo10 = Materials.get('lut8mat');





const rectangleObject = Scene.root.child('Device').child('Camera').child('Focal Distance').child('canvas1').find('rectangle1');
const picker = NativeUI.picker;

var index = 0;

const config = {
    
    selectedIndex: index,
    items: [
    {image_texture: lutTextNeutral1},
    {image_texture: lutTextNeutral2},
    {image_texture: lutTextNeutral3},
    {image_texture: lutTextNeutral4},
    {image_texture: lutTextNeutral5},
    {image_texture: lutTextNeutral6},
    {image_texture: lutTextNeutral7},
    {image_texture: lutTextNeutral8},
    {image_texture: lutTextNeutral9},
    {image_texture: lutTextNeutral10}


    ]
};
picker.configure(config);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(e){

    var n = e.newValue;
    switch(n) {
        case 0:
            rectangleObject.material = logo1;
            break;
        case 1:
            rectangleObject.material = logo2;
            break;
        case 2:
            rectangleObject.material = logo3;
            break;
        case 3:
            rectangleObject.material = logo4;
            break;
         case 4:
            rectangleObject.material = logo5;
            break;
        case 5:
            rectangleObject.material = logo6
            break;
        case 6:
            rectangleObject.material = logo7
            break;
        case 7:
            rectangleObject.material = logo8
            break;
        case 8:
            rectangleObject.material = logo9
            break;
        case 9:
            rectangleObject.material = logo10
            break;

    }
})



