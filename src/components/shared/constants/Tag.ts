export enum Tag {
  ANGULAR = 'angular',
  MATERIAL = 'material',
  LABTEST = 'labtest',
  HOTEL = 'hotel',
  BOOKING = 'booking',
  REACT = 'react',
}

export const TagDisplay: Record<Tag, string> = {
  [Tag.ANGULAR]: 'Angular',
  [Tag.MATERIAL]: 'Material',
  [Tag.LABTEST]: 'Lab Test',
  [Tag.HOTEL]: 'Hotel',
  [Tag.BOOKING]: 'Booking',
  [Tag.REACT]: 'React'
}

export function getTagFromString (str: string): Tag {
  switch (str) {
    case 'angular':
      return Tag.ANGULAR
    case 'material':
      return Tag.MATERIAL
    case 'labtest':
      return Tag.LABTEST
    case 'hotel':
      return Tag.HOTEL
    case 'booking':
      return Tag.BOOKING
    default:
      return Tag.REACT
  }
}
