import type { SearchResultItem } from "@common/Core";

export interface Extension {
    readonly id: string;
    readonly name: string;
    readonly nameTranslationKey?: string;

    getSearchResultItems(): Promise<SearchResultItem[]>;
    isSupported(): boolean;
    getSettingDefaultValue<T>(key: string): T;
    getImageUrl(): string;

    invoke?(argument: unknown): Promise<unknown>;
    getAssetFilePath?(key: string): string;
    getSettingKeysTriggeringRescan?(): string[];
}
