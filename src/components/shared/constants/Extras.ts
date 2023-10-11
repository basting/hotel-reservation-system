export enum Extras {
  BREAKFAST = 'extraBreakfast',
  TV = 'extraTV',
  WIFI = 'extraWiFi',
  PARKING = 'extraParking',
  BALCONY = 'extraBalcony'
}

export const ExtrasDisplay: Record<Extras, string> = {
  [Extras.BREAKFAST]: 'Breakfast',
  [Extras.TV]: 'TV',
  [Extras.WIFI]: 'Wifi',
  [Extras.PARKING]: 'Parking',
  [Extras.BALCONY]: 'Balcony'
}

export function getExtrasFromString (str: string): Extras {
  switch (str) {
    case 'extraBreakfast':
      return Extras.BREAKFAST
    case 'extraTV':
      return Extras.TV
    case 'extraWiFi':
      return Extras.WIFI
    case 'extraParking':
      return Extras.PARKING
    default:
      return Extras.BALCONY
  }
}
