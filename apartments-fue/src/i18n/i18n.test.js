import { UI_STRINGS } from "./ui";

const LOCALES = ["en", "pl", "de", "es", "it", "da"];

// Plural suffixes legitimately differ per language: English has one/other,
// Polish also has few/many. Compare the base keys instead.
const PLURAL_SUFFIX = /_(zero|one|two|few|many|other)$/;
const baseKeys = (strings) =>
  new Set(Object.keys(strings).map((key) => key.replace(PLURAL_SUFFIX, "")));

describe("UI translations", () => {
  it("defines every site language", () => {
    expect(Object.keys(UI_STRINGS).sort()).toEqual([...LOCALES].sort());
  });

  // The site was fully translated before the redesign, so a string that
  // exists only in English silently shows English to German, Spanish,
  // Italian and Danish visitors. This catches that at test time.
  it.each(LOCALES.filter((l) => l !== "en"))(
    "%s translates every key that en defines",
    (locale) => {
      const expected = baseKeys(UI_STRINGS.en);
      const actual = baseKeys(UI_STRINGS[locale]);
      const missing = [...expected].filter((key) => !actual.has(key));
      expect(missing).toEqual([]);
    }
  );

  it.each(LOCALES.filter((l) => l !== "en"))(
    "%s defines no key that en is missing",
    (locale) => {
      const expected = baseKeys(UI_STRINGS.en);
      const extra = [...baseKeys(UI_STRINGS[locale])].filter(
        (key) => !expected.has(key)
      );
      expect(extra).toEqual([]);
    }
  );

  it.each(LOCALES)("%s has no empty strings", (locale) => {
    const empty = Object.entries(UI_STRINGS[locale])
      .filter(([, value]) => typeof value !== "string" || !value.trim())
      .map(([key]) => key);
    expect(empty).toEqual([]);
  });
});
