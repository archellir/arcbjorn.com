export const enum Ei18nToken {
  PAGE_NOT_FOUND = "notFound.title",
  GO_BACK = "notFound.backButtonTitle",

  ABOUT = "header.about",
  EXTRA = "header.extra",

  FILE = "home.file",
  GREETING = "home.greeting",
  POSITION = "home.position",
  FORMERLY = "home.formerly",
  INTERESTS = "home.interests",
  CV = "home.cv",

  PLATFORMS_TITLE = "extra.platforms.title",

  HASHNODE = "extra.platforms.descriptions.hashnode",
  CODEPEN = "extra.platforms.descriptions.codepen",
  HACKER_RANK = "extra.platforms.descriptions.hackerRank",
  LEETCODE = "extra.platforms.descriptions.leetCode",
  FREE_CODE_CAMP = "extra.platforms.descriptions.freeCodeCamp",
  DEV_TO = "extra.platforms.descriptions.devto",
  STACK_OVERFLOW = "extra.platforms.descriptions.stackOverflow",
  MEDIUM = "extra.platforms.descriptions.medium",
  STEPIK = "extra.platforms.descriptions.stepik",
  GLITCH = "extra.platforms.descriptions.glitch",
  MY_TRAVEL_MAP = "extra.platforms.descriptions.myTravelMap",

  BOOKS_TITLE = "extra.books.title",

  SOFTWARE = "extra.books.categories.software",
  PSYCHOLOGY = "extra.books.categories.psychology",
}

export interface NotFoundTranslation {
  title: string;
  backButtonTitle: string;
}

export interface HeaderTranslation {
  about: string;
  extra: string;
}

export interface HomeTranslation {
  file: string;
  greeting: string;
  position: string;
  formerly: string;
  interests: string;
  cv: string;
}

export interface DescriptionsTranslation {
  hashnode: string;
  myTravelMap: string;
  hackerRank: string;
  leetCode: string;
  devto: string;
  stackOverflow: string;
  codepen: string;
  medium: string;
  stepik: string;
  freeCodeCamp: string;
  glitch: string;
}

export interface PlatformsTranslation {
  title: string;
  descriptions: DescriptionsTranslation;
}

export interface Categories {
  software: string;
  psychology: string;
}

export interface BooksTranslation {
  title: string;
  categories: Categories;
}

export interface ExtraTranslation {
  platforms: PlatformsTranslation;
  books: BooksTranslation;
}

export interface Translations {
  notFound: NotFoundTranslation;
  header: HeaderTranslation;
  home: HomeTranslation;
  extra: ExtraTranslation;
}

export const enum ELanguage {
  EN = "en",
  DE = "de",
  ES = "es",
  RU = "ru",
  SE = "se",
}
