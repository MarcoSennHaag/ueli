import { OperatingSystem } from "@common/OperatingSystem";
import { SearchResultItem } from "@common/SearchResultItem";
import { app, BrowserWindow, BrowserWindowConstructorOptions, ipcMain, nativeTheme } from "electron";
import { join } from "path";
import { platform } from "process";

let searchResultItems: SearchResultItem[] = [];

const updatedSearchResultItems: SearchResultItem[] = [
    { id: "1", description: "/Applications/Adobe Photoshop CC 2023.app", name: "Adobe Photoshop CC 2023" },
    { id: "2", description: "/Applications/Visual Studio Code.app", name: "Visual Studio Code" },
    { id: "3", description: "/Applications/Whatsapp.app", name: "Whatsapp" },
    { id: "4", description: "/Applications/1Password.app", name: "1Password" },
    { id: "5", description: "/Applications/Calculator.app", name: "Calculator" },
    { id: "6", description: "/Applications/Chess.app", name: "Chess" },
    { id: "7", description: "/Applications/ClickUp.app", name: "ClickUp" },
    { id: "8", description: "/Applications/Docker.app", name: "Docker" },
    { id: "9", description: "/Applications/FaceTime.app", name: "FaceTime" },
    { id: "10", description: "/Applications/Fellow.app", name: "Fellow" },
];

const preloadScriptFilePath = app.isPackaged
    ? join(__dirname, "..", "..", "dist-electron", "preload", "index.js")
    : join(__dirname, "..", "preload", "index.js");

const browserWindowConstructorOptionsMap: Record<OperatingSystem, BrowserWindowConstructorOptions> = {
    macOS: {
        webPreferences: {
            preload: preloadScriptFilePath,
        },
        vibrancy: "window",
        frame: false,
    },
    Windows: {
        autoHideMenuBar: true,
        webPreferences: {
            preload: preloadScriptFilePath,
        },
        backgroundMaterial: "mica",
        transparent: true,
    },
};

const sendUpdatedSearchResultItemsToBrowserWindow = (
    searchResultItems: SearchResultItem[],
    browserWindow: BrowserWindow,
) =>
    browserWindow.webContents.send("searchResultItemsUpdated", <{ searchResultItems: SearchResultItem[] }>{
        searchResultItems,
    });

(async () => {
    await app.whenReady();

    const operatingSysetem = platform === "win32" ? "Windows" : "macOS";
    const browserWindow = new BrowserWindow(browserWindowConstructorOptionsMap[operatingSysetem]);

    app.isPackaged
        ? browserWindow.loadFile(join(__dirname, "..", "..", "dist", "index.html"))
        : browserWindow.loadURL(process.env.VITE_DEV_SERVER_URL);

    ipcMain.on("themeShouldUseDarkColors", (event) => (event.returnValue = nativeTheme.shouldUseDarkColors));

    ipcMain.on("getSearchResultItems", (event) => (event.returnValue = searchResultItems));

    // This fakes the future implementation of a reoccurring rescan of the search index
    setInterval(() => {
        searchResultItems = updatedSearchResultItems;
        sendUpdatedSearchResultItemsToBrowserWindow(searchResultItems, browserWindow);
    }, 5000);

    nativeTheme.addListener("updated", () => browserWindow.webContents.send("nativeThemeChanged"));
})();
