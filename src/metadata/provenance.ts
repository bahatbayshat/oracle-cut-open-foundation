export interface ProvenanceRecord {
  assetId: string;
  source: string;
  license: string;
  reviewedByHuman: boolean;
}

export function isProvenanceUsable(record: ProvenanceRecord): boolean {
  return Boolean(record.assetId && record.source && record.license && record.reviewedByHuman);
}
