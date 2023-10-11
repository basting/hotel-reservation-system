export enum RoomSize {
  BUSINESS_SUITE = 'business-suite',
  PRESIDENTIAL_SUITE = 'presidential-suite',
  FAMILY_SUITE = 'family-suite'
}

export const RoomSizeDisplay: Record<RoomSize, string> = {
  [RoomSize.BUSINESS_SUITE]: 'Business Suite',
  [RoomSize.PRESIDENTIAL_SUITE]: 'Presidential Suite',
  [RoomSize.FAMILY_SUITE]: 'Family Suite'
}

export function getRoomSizeFromString (str: string): RoomSize {
  switch (str) {
    case 'business-suite':
      return RoomSize.BUSINESS_SUITE
    case 'presidential-suite':
      return RoomSize.PRESIDENTIAL_SUITE
    default:
      return RoomSize.FAMILY_SUITE
  }
}
