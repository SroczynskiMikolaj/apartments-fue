/**
 * Single source of truth for the two listings.
 *
 * This replaces the old `number={27}` / `number={23}` props, which were
 * passed to the *opposite* route and then matched against components whose
 * names were also reversed (Map23.js embedded listing 27 and vice versa).
 * Two inversions cancelled out and the pages rendered correctly, but
 * nothing about the code said so. Everything is now keyed by slug.
 *
 * --- Keeping the Airbnb rating current -------------------------------
 * `rating` below is entered by hand, not fetched automatically. Airbnb has
 * no public API for a listing's own rating/reviews — the only way to pull
 * that data programmatically is scraping Airbnb's pages (directly, or via
 * a third-party "wrapper" service that does the scraping for you). That
 * violates Airbnb's Terms of Service regardless of which tool does the
 * scraping, puts the host account at risk of suspension, and depends on a
 * service that could disappear or get blocked with no notice.
 *
 * Open your Airbnb host dashboard every month or so, copy the current
 * rating and review count here, and update `checked` to today's date — the
 * UI shows that date so the number is never presented as more current than
 * it is. It links straight to the live Airbnb listing for the real-time
 * figure and the reviews themselves.
 */

/**
 * `require.context` is a webpack API. Jest runs through Babel without the
 * webpack runtime, so it is undefined there and any module that calls it at
 * import time throws — which is why the default CRA test never ran. Falling
 * back to an empty list keeps the gallery data webpack-driven in the real
 * build while letting the components render under test.
 */
const loadImages = (contextFactory) => {
  try {
    const ctx = contextFactory();
    return ctx
      .keys()
      .sort()
      .map((key) => ctx(key));
  } catch {
    // No webpack runtime (i.e. Jest): require.context is undefined and the
    // call throws. Probing with `typeof require.context` instead would read
    // `require` as a value, which makes webpack emit "Critical dependency:
    // require function is used in a way in which dependencies cannot be
    // statically extracted" — a build error under CI.
    return [];
  }
};

const apartment23Images = loadImages(() =>
  require.context("../assets/apartment23", false, /\.(png|jpe?g|svg|webp)$/)
);
const apartment27Images = loadImages(() =>
  require.context("../assets/apartment27", false, /\.(png|jpe?g|svg|webp)$/)
);

export const APARTMENTS = [
  {
    slug: "colores_de_fuerteventura_23",
    title: "Colores de Fuerteventura 23",
    // A key, not a literal — "Apartment 23" was hardcoded English and
    // rendered with no t() call everywhere shortTitle appeared (the home
    // page buttons, the card badge, the booking panel), so it never
    // translated.
    shortTitleKey: "Apartment_short_23",
    images: apartment23Images,
    people: 4,
    beds: 3,
    baths: 1,
    surface: 45,
    airbnbUrl:
      "https://www.airbnb.pl/rooms/863722242925772929?guests=1&adults=1&s=67&unique_share_id=69fe8b66-b848-4380-bbb2-3aadfcd052ba",
    // Manually maintained — see "Keeping the rating current" in rating.js.
    // PLACEHOLDER: replace with the real values from your Airbnb host
    // dashboard before shipping, then update `checked` whenever you refresh
    // them (every month or so is plenty).
    rating: { value: 4.9, reviews: 0, checked: "2026-01-01" },
    // Verified: this embed resolves to "Apartament 23 - Colores de Fuerteventura 2".
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1091.1094905382247!2d-14.221792!3d28.170936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc479dbab87a8d25%3A0x4308c4573d8e01e1!2sApartament%2023%20-%20Colores%20de%20Fuerteventura%202!5e1!3m2!1spl!2spl!4v1724836381305!5m2!1spl!2spl",
    // i18n keys for the three description blocks.
    descriptionKeys: [
      "Apartment_1_description",
      "Apartment_1_description_2",
      "Apartment_1_description_3",
    ],
    reservationKey: "Apartment_1_reservation_1",
  },
  {
    slug: "colores_de_fuerteventura_27",
    title: "Colores de Fuerteventura 27",
    shortTitleKey: "Apartment_short_27",
    images: apartment27Images,
    people: 4,
    beds: 3,
    baths: 1,
    surface: 45,
    airbnbUrl:
      "https://www.airbnb.pl/rooms/30067044?guests=1&adults=1&s=67&unique_share_id=df41e7ba-2cca-4db9-acfc-323f7cb93021",
    // PLACEHOLDER — see the note on the 23 listing above.
    rating: { value: 4.9, reviews: 0, checked: "2026-01-01" },
    // Verified: this embed resolves to "27 Colores de Fuerteventura".
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1091.1094905382247!2d-14.221792!3d28.170936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc479de6c4eec7eb%3A0x2750dfc46e2ead49!2s27%20Colores%20de%20Fuerteventura!5e1!3m2!1spl!2spl!4v1724836092024!5m2!1spl!2spl",
    descriptionKeys: [
      "Apartment_2_description",
      "Apartment_2_description_2",
      "Apartment_2_description_3",
    ],
    reservationKey: "Apartment_2_reservation_1",
  },
];

export const getApartment = (slug) =>
  APARTMENTS.find((apartment) => apartment.slug === slug);
