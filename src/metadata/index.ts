export type MetadataCheckInput = {
  hasSource: boolean;
  hasLicense: boolean;
  hasModificationHistory: boolean;
  containsSensitiveData: boolean;
};

export type MetadataRisk = "low" | "medium" | "high";

export function scoreMetadataRisk(input: MetadataCheckInput): MetadataRisk {
  let score = 0;

  if (!input.hasSource) score += 2;
  if (!input.hasLicense) score += 2;
  if (!input.hasModificationHistory) score += 1;
  if (input.containsSensitiveData) score += 3;

  if (score >= 4) return "high";
  if (score >= 2) return "medium";
  return "low";
}
