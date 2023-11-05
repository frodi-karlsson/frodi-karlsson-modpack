import { Mod } from "discord-modding-framework";
import { ElectronEvent, ModJSON } from "discord-modding-framework/dist/mod";
import fs from "fs";
import path from "path";
const SmallerWindow = new Mod("smaller-window");

const minimizeableDmsJs = fs.readFileSync(
  path.resolve(__dirname, "minimizeDms.js"),
  "utf-8"
);
const minimizeableDmsJson: ModJSON = {
  id: "minimizeable-dms",
  version: "1.0.0",
  dependencies: [],
  events: {
    events: {
      "dom-ready": {
        on: [
          `mainWindow.webContents.executeJavaScript(\`${minimizeableDmsJs.replace(
            "`",
            "\\`"
          )}\`)`,
        ],
        once: [],
      },
    },
  },
};

SmallerWindow.modifyWindow((mainWindow) => {
  mainWindow.setMinimumSize(100, 100);
});

const pinkThemeJs = fs.readFileSync(
  path.resolve(__dirname, "pinktheme.js"),
  "utf-8"
);
const pinkThemeJson: ModJSON = {
  id: "pink-theme",
  version: "1.0.0",
  dependencies: [],
  events: {
    events: {
      "dom-ready": {
        on: [
          `mainWindow.webContents.executeJavaScript(\`${pinkThemeJs.replace(
            "`",
            "\\`"
          )}\`)`,
        ],
        once: [],
      },
    },
  },
};

const smaller = SmallerWindow.getJSON();
const mods = [smaller, minimizeableDmsJson, pinkThemeJson];
const combinedMod = new Mod(
  "combined-mod",
  undefined,
  "1.0.0",
  "git@github.com:frodi-karlsson/frodi-karlsson-modpack",
  "frodi-karlsson",
  "A modpack with various ui changes for my girlfriend",
  undefined
);
const combinedModJson = combinedMod.getJSON();
mods.forEach((mod) => {
  const events = Object.keys(mod.events.events) as ElectronEvent[];
  events.forEach((event) => {
    const onsAndOnces = mod.events.events[event];
    if (!combinedModJson.events.events[event]) {
      combinedModJson.events.events[event] = {
        on: [],
        once: [],
      };
    }
    combinedModJson.events.events[event]!.on = (
      combinedModJson.events.events[event]?.on ?? []
    ).concat(onsAndOnces?.on ?? []);
    combinedModJson.events.events[event]!.once = (
      combinedModJson.events.events[event]?.once ?? []
    ).concat(onsAndOnces?.once ?? []);
  });
});

const modPath = path.resolve(__dirname, "../mods");
if (!fs.existsSync(modPath)) {
  fs.mkdirSync(modPath);
}
mods.forEach((mod) => {
  const modFolderPath = path.resolve(`${modPath}/${mod.id}`);
  if (!fs.existsSync(modFolderPath)) {
    fs.mkdirSync(modFolderPath);
  }
  const modJsonPath = path.resolve(`${modFolderPath}/mod.json`);
  fs.writeFileSync(modJsonPath, JSON.stringify(mod));
});

const combinedModFolderPath = path.resolve(__dirname, "..", "mod.json");
fs.writeFileSync(combinedModFolderPath, JSON.stringify(combinedModJson));
