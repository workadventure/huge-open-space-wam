/// <reference types="@workadventure/iframe-api-typings" />


import { bootstrapExtra } from "@workadventure/scripting-api-extra";

WA.onInit().then(() => {
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
