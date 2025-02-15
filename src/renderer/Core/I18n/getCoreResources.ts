import type { Resources, Translations } from "@common/Core/Translator";

export const getCoreResources = (): { namespace: string; resources: Resources<Translations> }[] => {
    return [
        {
            namespace: "general",
            resources: {
                "en-US": {
                    settings: "Settings",
                    generalSettings: "General settings",
                    extensionSettings: "Extension settings",
                    actions: "Actions",
                    copiedToClipboard: "Copied",
                    rescanning: "Rescanning...",
                },
                "de-CH": {
                    settings: "Einstellungen",
                    generalSettings: "Allgemeine Einstellungen",
                    extensionSettings: "Erweiterungseinstellungen",
                    actions: "Aktionen",
                    copiedToClipboard: "Kopiert",
                    rescanning: "Scanne neu...",
                },
            },
        },
        {
            namespace: "search",
            resources: {
                "en-US": {
                    noResultsFoundFor: "No results found for",
                    noResultsFound: "No results found",
                    searchHistory: "Search History",
                    "searchResultGroup.favorites": "Favorites",
                    "searchResultGroup.searchResults": "Search Results",
                    searchBarPlaceholderText: "Type to search...",
                },
                "de-CH": {
                    noResultsFoundFor: "Keine Suchergebnisse gefunden für",
                    noResultsFound: "Keine Suchergebnisse gefunden",
                    searchHistory: "Suchverlauf",
                    "searchResultGroup.favorites": "Favoriten",
                    "searchResultGroup.searchResults": "Suchergebnisse",
                    searchBarPlaceholderText: "Suchbegriff eingeben...",
                },
            },
        },
        {
            namespace: "settingsGeneral",
            resources: {
                "en-US": {
                    title: "General",
                    hotkey: "Hotkey",
                    hotkeyEnabled: "Hotkey enabled",
                    hotkeyBinding: "Hotkey binding",
                    validHotkeyBinding: "Valid hotkey",
                    invalidHotkeyBinding: "Invalid hotkey",
                    invalidHotkeyBindingAltGr: "Use Ctrl+Alt instead of AltGr",
                    saveHotkeyBinding: "Save",
                    hotkeyBindingMoreInfo: "More info",
                    language: "Language",
                    autostart: "Autostart",
                    autostartDescription: "Start Ueli automatically after you log into the computer",
                    searchHistoryEnabled: "Search History",
                    searchHistoryEnabledDescription: "The search history lets you see your previous searches",
                    searchHistoryLimit: "Search History Limit",
                    searchHistoryLimitHint: "Limits the maximum number of search history items",
                    waylandWarning: "Hotkeys may not work.",
                    waylandWarningMoreInfo: "More info",
                    showAppIconInDock: "Show app icon in dock",
                    webBrowser: "Web Browser",
                    useDefaultWebBrowser: "Use system's default web browser",
                    customWebBrowserExecutableFilePath: "Executable file path",
                    customWebBrowserExecutableFilePathSelectFile: "Select file",
                    customWebBrowserCommandlineArguments: "Commandline arguments",
                    customWebBrowserName: "Browser Name",
                },
                "de-CH": {
                    title: "Allgemein",
                    hotkey: "Hotkey",
                    hotkeyEnabled: "Hotkey aktiviert",
                    hotkeyBinding: "Tastenkombination",
                    validHotkeyBinding: "Gültige Tastenkombination",
                    invalidHotkeyBinding: "Ungültige Tastenkombination",
                    invalidHotkeyBindingAltGr: "Benutze Ctrl+Alt anstatt AltGr",
                    saveHotkeyBinding: "Speichern",
                    hotkeyBindingMoreInfo: "Mehr Informationen",
                    language: "Sprache",
                    autostart: "Autostart",
                    autostartDescription: "Ueli automatisch starten, nach Anmelden am Computer",
                    searchHistoryEnabled: "Suchverlauf",
                    searchHistoryEnabledDescription: "Der Suchverlauf zeigt dir deine vorherigen Suchen",
                    searchHistoryLimit: "Suchverlauf Limit",
                    searchHistoryLimitHint: "Begrenzt die maximale Anzahl an Suchverlaufseinträgen",
                    waylandWarning: "Tastenkombinationen funktionieren möglicherweise nicht.",
                    waylandWarningMoreInfo: "Mehr Informationen",
                    showAppIconInDock: "App-Symbol im Dock anzeigen",
                    webBrowser: "Web Browser",
                    useDefaultWebBrowser: "Systemstandard Webbrowser verwenden",
                    customWebBrowserExecutableFilePath: "Ausführbare Datei",
                    customWebBrowserExecutableFilePathSelectFile: "Datei auswählen",
                    customWebBrowserCommandlineArguments: "Kommandozeilen-Argumente",
                    customWebBrowserName: "Browser-Name",
                },
            },
        },
        {
            namespace: "settingsAppearance",
            resources: {
                "en-US": {
                    title: "Appearance",
                    searchBar: "Search bar",
                    searchBarSize: "Size",
                    "searchBarSize.large": "Large",
                    "searchBarSize.medium": "Medium",
                    "searchBarSize.small": "Small",
                    searchBarAppearance: "Appearance",
                    "searchBarAppearance.auto": "Auto",
                    "searchBarAppearance.outline": "Outline",
                    "searchBarAppearance.underline": "Underline",
                    "searchBarAppearance.filled-darker": "Filled darker",
                    "searchBarAppearance.filled-lighter": "Filled lighter",
                    searchResultListLayout: "Search result list layout",
                    "searchResultListLayout.compact": "Compact",
                    "searchResultListLayout.detailed": "Detailed",
                    searchBarPlaceholderText: "Placeholder text",
                    searchBarPlaceholderTextReset: "Reset",
                    searchBarShowIcon: "Show search icon",
                    themeName: "Theme",
                    themeSource: "Color mode",
                    "themeSource.system": "System",
                    "themeSource.light": "Light",
                    "themeSource.dark": "Dark",
                },
                "de-CH": {
                    title: "Erscheinungsbild",
                    searchBar: "Suchfeld",
                    searchBarSize: "Grösse",
                    "searchBarSize.large": "Gross",
                    "searchBarSize.medium": "Mittel",
                    "searchBarSize.small": "Klein",
                    searchBarAppearance: "Erscheinungsbild",
                    "searchBarAppearance.auto": "Auto",
                    "searchBarAppearance.outline": "Kontur",
                    "searchBarAppearance.underline": "Unterstrichen",
                    "searchBarAppearance.filled-darker": "Gefüllt dunkler",
                    "searchBarAppearance.filled-lighter": "Gefüllt heller",
                    searchResultListLayout: "Suchresultatliste-Layout",
                    "searchResultListLayout.compact": "Kompakt",
                    "searchResultListLayout.detailed": "Detailliert",
                    searchBarPlaceholderText: "Platzhaltertext",
                    searchBarPlaceholderTextReset: "Zurücksetzen",
                    searchBarShowIcon: "Suchsymbol anzeigen",
                    themeName: "Farbschema",
                    themeSource: "Farbmodus",
                    "themeSource.system": "System",
                    "themeSource.light": "Hell",
                    "themeSource.dark": "Dunkel",
                },
            },
        },
        {
            namespace: "settingsKeyboardAndMouse",
            resources: {
                "en-US": {
                    title: "Keyboard & Mouse",
                    singleClickBehavior: "Single click behavior",
                    doubleClickBehavior: "Double click behavior",
                    selectSearchResultItem: "Select search result item",
                    invokeSearchResultItem: "Invoke search result item",
                    dragAndDrop: "Drag & Drop",
                },
                "de-CH": {
                    title: "Tastatur & Maus",
                    singleClickBehavior: "Einfachklick-Verhalten",
                    doubleClickBehavior: "Doppelklick-Verhalten",
                    selectSearchResultItem: "Suchergebniss anwählen",
                    invokeSearchResultItem: "Suchergebniss ausführen",
                    dragAndDrop: "Drag & Drop",
                },
            },
        },
        {
            namespace: "settingsDebug",
            resources: {
                "en-US": {
                    title: "Debug",
                    resetAllSettings: "Reset all settings",
                    resetAllSettingsHint:
                        "This resets all settings to their default values. You will lose all settings that you changed.",
                    resetAllSettingsButton: "Reset",
                    resetAllSettingsDialogTitle: "Are you sure?",
                    resetAllSettingsDialogContent: "You are about to reset all settings to their default values.",
                    resetAllSettingsCancel: "Cancel",
                    resetAllSettingsConfirm: "Yes, I'm sure",
                },
                "de-CH": {
                    title: "Fehlerbehebung",
                    resetAllSettings: "Alle Einstellungen zurücksetzen",
                    resetAllSettingsHint:
                        "Dadurch werden alle Einstellungen auf ihre Standardwerte zurückgesetzt. Du verlierst alle Einstellungen, die du geändert hast.",
                    resetAllSettingsButton: "Zurücksetzen",
                    resetAllSettingsDialogTitle: "Bist du sicher?",
                    resetAllSettingsDialogContent:
                        "Du bist dabei, alle Einstellungen auf ihre Standardwerte zurückzusetzen.",
                    resetAllSettingsCancel: "Abbrechen",
                    resetAllSettingsConfirm: "Ja, ich bin sicher",
                },
            },
        },
        {
            namespace: "settingsAbout",
            resources: {
                "en-US": {
                    title: "About",
                },
                "de-CH": {
                    title: "Über",
                },
            },
        },
        {
            namespace: "settingsExtensions",
            resources: {
                "en-US": {
                    title: "Extensions",
                    name: "Name",
                    author: "Author",
                    enabled: "Enabled",
                    rescan: "Rescan",
                    successfulRescan: "Successfully rescanned",
                    failedRescan: "Failed to rescan. Check logs for more information.",
                    noSettingsAvailable: "No settings available",
                },
                "de-CH": {
                    title: "Erweiterungen",
                    name: "Name",
                    author: "Author",
                    enabled: "Aktiviert",
                    rescan: "Neuscan",
                    successfulRescan: "Erfolgreicher Neuscan",
                    failedRescan: "Fehler beim neu Scannen. Überprüfe die Logs für mehr Informationen.",
                    noSettingsAvailable: "Keine Einstellungen verfügbar",
                },
            },
        },
        {
            namespace: "settingsSearchEngine",
            resources: {
                "en-US": {
                    title: "Search Engine",
                    searchEngine: "Search Engine",
                    automaticRescan: "Automatic rescan",
                    fuzziness: "Fuzziness",
                    maxResultLength: "Maximum search result items",
                    rescanIntervalInSeconds: "Rescan interval (in seconds)",
                    rescanIntervalTooShort: "Rescan interval must be at least 10 seconds",
                    rescanIntervalResetToDefault: "Reset to default",
                    excludedItems: "Excluded items",
                    noExcludedItems: "There are no excluded items",
                    removeExcludedItem: "Remove item",
                    keyboardShortcutForManualRescan: "Keyboard shortcut for manual rescan",
                },
                "de-CH": {
                    title: "Suchmaschine",
                    searchEngine: "Suchmaschine",
                    automaticRescan: "Automatisches Neuscannen",
                    fuzziness: "Fuzziness",
                    maxResultLength: "Maximale Anzahl Suchergebnisse",
                    rescanIntervalInSeconds: "Neuscan-Intervall (in Sekunden)",
                    rescanIntervalTooShort: "Neuscan-Intervall muss mindestens 10 Sekunden betragen",
                    rescanIntervalResetToDefault: "Auf Standardwert zurücksetzen",
                    excludedItems: "Ausgeschlossene Elemente",
                    noExcludedItems: "Es gibt keine ausgeschlossene Elemente",
                    removeExcludedItem: "Element entfernen",
                    keyboardShortcutForManualRescan: "Tastatur-Shortcut für manuelles neu Scannen",
                },
            },
        },
        {
            namespace: "settingsFavorites",
            resources: {
                "en-US": {
                    title: "Favorites",
                    numberOfColumns: "Number of columns",
                    remove: "Remove",
                },
                "de-CH": {
                    title: "Favoriten",
                    numberOfColumns: "Anzahl Spalten",
                    remove: "Entfernen",
                },
            },
        },
        {
            namespace: "settingsWindow",
            resources: {
                "en-US": {
                    title: "Window",
                    hideWindowOn: "Hide window on",
                    "hideWindow.placeholder": "Select events",
                    "hideWindowOn.blur": "Focus loss",
                    "hideWindowOn.afterInvocation": "After invocation",
                    "hideWindowOn.escapePressed": "Pressing escape key",
                    alwaysOnTop: "Always on top",
                    showOnStartup: "Show on startup",
                    scrollBehavior: "Scroll behavior",
                    "scrollBehavior.auto": "Auto",
                    "scrollBehavior.smooth": "Smooth",
                    "scrollBehavior.instant": "Instant",
                    visibleOnAllWorkspaces: "Visible on all workspaces",
                },
                "de-CH": {
                    title: "Fenster",
                    hideWindowOn: "Fenster verstecken bei",
                    "hideWindow.placeholder": "Wähle Ereignisse",
                    "hideWindowOn.blur": "Fokusverlust",
                    "hideWindowOn.afterInvocation": "Nach Ausführung",
                    "hideWindowOn.escapePressed": "Drücken der Escape-Taste",
                    alwaysOnTop: "Immer im Vordergrund",
                    showOnStartup: "Beim Start anzeigen",
                    scrollBehavior: "Scrollverhalten",
                    "scrollBehavior.auto": "Automatisch",
                    "scrollBehavior.smooth": "Reibungslos",
                    "scrollBehavior.instant": "Sofort",
                    visibleOnAllWorkspaces: "Auf allen Workspaces sichtbar",
                },
            },
        },
        {
            namespace: "searchResultItemAction",
            resources: {
                "en-US": {
                    excludeFromSearchResults: "Exclude from search results",
                    openUrlInBrowser: "Open URL in web browser",
                    showInFileExplorer: "Show in file explorer",
                    addToFavorites: "Add to favorites",
                    removeFromFavorites: "Remove from favorites",
                },
                "de-CH": {
                    excludeFromSearchResults: "Von Suchergebnissen ausschliessen",
                    openUrlInBrowser: "URL in Webbrowser öffnen",
                    showInFileExplorer: "Im Datei-Explorer anzeigen",
                    addToFavorites: "Zu Favoriten hinzufügen",
                    removeFromFavorites: "Von Favoriten entfernen",
                },
            },
        },
    ];
};
