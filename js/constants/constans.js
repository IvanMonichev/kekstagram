const NAMES = [
  'Арина',
  'Георгий',
  'Лидия',
  'Антон',
  'Ксения',
  'Александра',
  'Иван', 'Алиса',
  'Евгений', 'Вероника',
  'Макар',
  'Владислав',
  'Маргарита',
  'Денис',
  'Матвей',
  'Николь',
  'Милана',
  'Елена',
  'Дарья',
  'Давид',
  'Пелагея',
  'Марьяна',
  'Тимур',
  'Екатерина',
  'Кирилл',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENTS_COUNT = {
  MIN: 1,
  MAX: 6,
};
const PHOTOS_COUNT = 25;

const COUNT_COMMENTS = {
  MIN: 1,
  MAX: 2,
}

const BIG_PICTURE_CONFIG = {
  bigPictureSelector: '.big-picture',
  bigPictureImageSelector: '.big-picture__img img',
  likesCountSelector: '.likes-count',
  commentsCountSelector: '.comments-count',
  socialCommentSelector: '.social__comment',
  socialListCommentSelector: '.social__comments',
  socialCaptionSelector: '.social__caption',
  closeButtonSelector: '.big-picture__cancel',
  socialCommentCountSelector: '.social__comment-count',
  commentsLoaderSelector: '.comments-loader',
}

export {
  NAMES,
  MESSAGES,
  COMMENTS_COUNT,
  PHOTOS_COUNT,
  COUNT_COMMENTS,
  BIG_PICTURE_CONFIG
}