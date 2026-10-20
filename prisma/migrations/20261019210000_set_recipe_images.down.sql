-- Revert image URLs
UPDATE "recipes" SET "imageUrl" = NULL WHERE "name" IN (
  'Borschtsch', 'Deruny', 'Holubtsi', 'Pampuschky', 'Varenyky mit Hüttenkäse', 'Kotelett nach KIEW'
);
