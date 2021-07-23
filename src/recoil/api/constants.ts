export const SFW_CATEGORIES = ['waifu',
  'neko',
  'shinobu',
  'megumin',
  'bully',
  'cuddle',
  'cry',
  'hug',
  'awoo',
  'kiss',
  'lick',
  'pat',
  'smug',
  'bonk',
  'yeet',
  'blush',
  'smile',
  'wave',
  'highfive',
  'handhold',
  'nom',
  'bite',
  'glomp',
  'slap',
  'kill',
  'kick',
  'happy',
  'wink',
  'poke',
  'dance',
  'cringe'] as const
export type SFW_CATEGORIES_TYPE = typeof SFW_CATEGORIES[number]

export const NSFW_CATEGORIES = ['waifu', 'neko', 'trap', 'blowjob'] as const
export type NSFW_CATEGORIES_TYPE = typeof NSFW_CATEGORIES[number]

export const CATEGORIES = {
  sfw: SFW_CATEGORIES,
  nsfw: NSFW_CATEGORIES
}

export type CATEGORY_TYPES = keyof typeof CATEGORIES
