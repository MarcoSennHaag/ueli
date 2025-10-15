import type { OperatingSystem } from "@common/Core";
import type { ChromiumBrowser } from "@common/Extensions/BrowserBookmarks";
import type { App } from "electron";
import { join } from "path";
import { enumerateKeysSafe, enumerateValuesSafe, HKEY, RegistryValueType } from "registry-js";

export const resolveChromiumBookmarksFilePath = ({
    browser,
    operatingSystem,
    app,
}: {
    browser: ChromiumBrowser;
    operatingSystem: OperatingSystem;
    app: App;
}): string[] => {
    const map: Record<ChromiumBrowser, Record<OperatingSystem, () => string[]>> = {
        Arc: {
            Linux: () => [], // not supported,
            macOS: () => [join(app.getPath("appData"), "Arc", "User Data", "Default", "Bookmarks")],
            Windows: () => readPathsFromRegistry("Software\\TheBrowserCompany\\Arc\\Profiles"),
        },
        "Brave Browser": {
            Linux: () => [], // not supported,
            macOS: () => [join(app.getPath("appData"), "BraveSoftware", "Brave-Browser", "Default", "Bookmarks")],
            Windows: () => readPathsFromRegistry("Software\\BraveSoftware\\Brave\\Profiles"),
        },
        "Google Chrome": {
            Linux: () => [], // not supported
            macOS: () => [join(app.getPath("appData"), "Google", "Chrome", "Default", "Bookmarks")],
            Windows: () => readPathsFromRegistry("Software\\Google\\Chrome\\Profiles"),
        },
        "Microsoft Edge": {
            Linux: () => [], // not supported,
            macOS: () => [join(app.getPath("appData"), "Microsoft Edge", "Default", "Bookmarks")],
            Windows: () => readPathsFromRegistry("Software\\Microsoft\\Edge\\Profiles"),
        },
        "Yandex Browser": {
            Linux: () => [], // not supported,
            macOS: () => [join(app.getPath("appData"), "Yandex", "YandexBrowser", "Default", "Bookmarks")],
            Windows: () => readPathsFromRegistry("Software\\Yandex\\YandexBrowser\\Profiles"),
        },
    };

    return map[browser][operatingSystem]();
};

const readPathsFromRegistry = (baseKey: string): string[] => {
    const filePaths: string[] = [];
    const profileKeys = enumerateKeysSafe(HKEY.HKEY_CURRENT_USER, baseKey);

    for (const profileKey of profileKeys) {
        const values = enumerateValuesSafe(HKEY.HKEY_CURRENT_USER, join(baseKey, profileKey));

        for (const value of values) {
            if (value.name === "Path" && value.type === RegistryValueType.REG_SZ) {
                filePaths.push(join(value.data, "Bookmarks"));
            }
        }
    }

    return filePaths;
};
