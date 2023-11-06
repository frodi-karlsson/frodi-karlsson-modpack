import { Mod, ModJSON } from "discord-modding-framework";
import { ModOptions } from "discord-modding-framework/dist/mod/mod";
import fs from "fs";
import path from "path";
const modOptions: ModOptions = {
  id: "combined-mod",
  author: "frodi-karlsson",
  config: [
    {
      name: "pinkTheme",
      description: "Whether to use the pink theme or not",
      type: "boolean",
      defaultValue: true,
    },
  ],
  dependencies: [],
  version: "1.0.0",
  description: "A couple of UI changes for my girlfriend",
  fullDescription: `This essentially does three things:\
  \n1. Allows you to minimize the DMs window\
  \n2. Makes the theme pink (configurable)\
  \n3. Allows you to make the window smaller than the default minimum size`,
  repository: "https://github.com/frodi-karlsson/frodi-karlsson-modpack",
};
const CombinedMod = new Mod(modOptions);

CombinedMod.modifyWindow((mainWindow) => {
  mainWindow.setMinimumSize(100, 100);
});
CombinedMod.on(
  "dom-ready",
  Mod.getCallbackFromFile(path.resolve(__dirname, "minimizeDms.js"))
);
CombinedMod.on(
  "dom-ready",
  Mod.getCallbackFromFile(path.resolve(__dirname, "pinktheme.js"))
);
const combinedModJson: ModJSON = CombinedMod.getJSON();
const out = path.resolve(__dirname, "..", "mod.json");
fs.writeFileSync(out, JSON.stringify(combinedModJson));
