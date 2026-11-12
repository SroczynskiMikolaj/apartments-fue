import { UI_STRINGS } from "./ui";
import { APARTMENT_23_TEXT } from "./apartment23";
import { APARTMENT_27_TEXT } from "./apartment27";
import { APARTMENTS } from "../data/apartments";

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

// The apartment pages build their description keys from the `description`
// shape in data/apartments.js (intro, Nth section title + paragraphs,
// closing). Each language must have exactly those keys — a missing one would
// print the raw key on the page, an extra one means text nobody will see.
describe.each([
  ["Apartment 23", "Apt23", APARTMENT_23_TEXT],
  ["Apartment 27", "Apt27", APARTMENT_27_TEXT],
])("%s description", (_name, prefix, bundle) => {
  const { sections } = APARTMENTS.find(
    (apartment) => apartment.description.prefix === prefix
  ).description;

  const expectedKeys = [
    `${prefix}_intro`,
    ...sections.flatMap((paragraphs, i) => [
      `${prefix}_s${i + 1}_title`,
      ...Array.from({ length: paragraphs }, (_, p) => `${prefix}_s${i + 1}_p${p + 1}`),
    ]),
    `${prefix}_closing`,
  ].sort();

  it("is written in every site language", () => {
    expect(Object.keys(bundle).sort()).toEqual([...LOCALES].sort());
  });

  it.each(LOCALES)("%s has exactly the keys the page renders, none empty", (locale) => {
    const strings = bundle[locale];
    expect(Object.keys(strings).sort()).toEqual(expectedKeys);
    const empty = Object.entries(strings).filter(([, v]) => !v.trim()).map(([k]) => k);
    expect(empty).toEqual([]);
  });
});
