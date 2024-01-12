import { Dropdown, Field, Input, Option } from "@fluentui/react-components";
import { sourceLanguages } from "../../../../Extensions/DeeplTranslator/sourceLanguages";
import { targetLanguages } from "../../../../Extensions/DeeplTranslator/targetLanguages";
import { useContextBridge } from "../../../../Hooks";
import { useExtensionSetting } from "../../../../Hooks/useExtensionSetting";
import { Section } from "../../../Section";
import { SectionList } from "../../../SectionList";

export const DeeplTranslatorSettings = () => {
    const { contextBridge } = useContextBridge();

    const extensionId = "DeeplTranslator";

    const { value: apiKey, updateValue: setApiKey } = useExtensionSetting<string>(
        extensionId,
        "apiKey",
        contextBridge.getExtensionSettingDefaultValue(extensionId, "apiKey"),
    );

    const { value: sourceLanguage, updateValue: setSourceLanguage } = useExtensionSetting<string>(
        extensionId,
        "sourceLanguage",
        contextBridge.getExtensionSettingDefaultValue(extensionId, "sourceLanguage"),
    );

    const { value: targetLanguage, updateValue: setTargetLanguage } = useExtensionSetting<string>(
        extensionId,
        "targetLanguage",
        contextBridge.getExtensionSettingDefaultValue(extensionId, "targetLanguage"),
    );

    return (
        <SectionList>
            <Section>
                <Field label="API Key">
                    <Input value={apiKey} onChange={(_, { value }) => setApiKey(value)} />
                </Field>
            </Section>
            <Section>
                <Field label="Default source language">
                    <Dropdown
                        value={sourceLanguage}
                        onOptionSelect={(_, { optionValue }) => optionValue && setSourceLanguage(optionValue)}
                    >
                        {Object.keys(sourceLanguages).map((key) => (
                            <Option key={key} value={key}>
                                {sourceLanguages[key]}
                            </Option>
                        ))}
                    </Dropdown>
                </Field>
            </Section>
            <Section>
                <Field label="Default target language">
                    <Dropdown
                        value={targetLanguage}
                        onOptionSelect={(_, { optionValue }) => optionValue && setTargetLanguage(optionValue)}
                    >
                        {Object.keys(targetLanguages).map((key) => (
                            <Option key={key} value={key}>
                                {targetLanguages[key]}
                            </Option>
                        ))}
                    </Dropdown>
                </Field>
            </Section>
        </SectionList>
    );
};
