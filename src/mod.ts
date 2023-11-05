import { Mod, ModJSON } from "discord-modding-framework";
import fs from "fs";
import path from "path";
const CombinedMod = new Mod("combined-mod");
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
