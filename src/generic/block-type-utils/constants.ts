import React from 'react';
import {
  BackHand as BackHandIcon,
  BookOpen as BookOpenIcon,
  Casino as ProblemBankIcon,
  ContentPaste as ContentPasteIcon,
  Edit as EditIcon,
  EditNote as EditNoteIcon,
  HelpOutline as HelpOutlineIcon,
  LibraryAdd as LibraryIcon,
  Lock as LockIcon,
  QuestionAnswerOutline as QuestionAnswerOutlineIcon,
  Science as ScienceIcon,
  TextFields as TextFieldsIcon,
  VideoCamera as VideoCameraIcon,
  Folder,
  ViewCarousel,
  ViewDay,
  WidthWide,
} from '@openedx/paragon/icons';
import NewsstandIcon from '../NewsstandIcon';

export const UNIT_ICON_TYPES = ['video', 'other', 'vertical', 'problem', 'lock'];

export const COMPONENT_TYPES = {
  advanced: 'advanced',
  discussion: 'discussion',
  library: 'library',
  libraryV2: 'library_v2',
  itembank: 'itembank',
  html: 'html',
  openassessment: 'openassessment',
  problem: 'problem',
  video: 'video',
  dragAndDrop: 'drag-and-drop-v2',
};

export const UNIT_TYPE_ICONS_MAP: Record<string, React.ComponentType> = {
  video: VideoCameraIcon,
  other: BookOpenIcon,
  vertical: ViewDay,
  sequential: WidthWide,
  chapter: ViewCarousel,
  problem: EditIcon,
  lock: LockIcon,
};

export const COMPONENT_TYPE_ICON_MAP: Record<string, React.ComponentType> = {
  [COMPONENT_TYPES.advanced]: ScienceIcon,
  [COMPONENT_TYPES.discussion]: QuestionAnswerOutlineIcon,
  [COMPONENT_TYPES.library]: LibraryIcon,
  [COMPONENT_TYPES.itembank]: ProblemBankIcon,
  [COMPONENT_TYPES.libraryV2]: NewsstandIcon,
  [COMPONENT_TYPES.html]: TextFieldsIcon,
  [COMPONENT_TYPES.openassessment]: EditNoteIcon,
  [COMPONENT_TYPES.problem]: HelpOutlineIcon,
  [COMPONENT_TYPES.video]: VideoCameraIcon,
  [COMPONENT_TYPES.dragAndDrop]: BackHandIcon,
};

export const STRUCTURAL_TYPE_ICONS: Record<string, React.ComponentType> = {
  vertical: UNIT_TYPE_ICONS_MAP.vertical,
  unit: UNIT_TYPE_ICONS_MAP.vertical,
  sequential: UNIT_TYPE_ICONS_MAP.sequential,
  subsection: UNIT_TYPE_ICONS_MAP.sequential,
  chapter: UNIT_TYPE_ICONS_MAP.chapter,
  section: UNIT_TYPE_ICONS_MAP.chapter,
  collection: Folder,
  libraryContent: Folder,
  paste: ContentPasteIcon,
};

export const COMPONENT_TYPE_STYLE_COLOR_MAP = {
  [COMPONENT_TYPES.advanced]: 'component-style-other',
  [COMPONENT_TYPES.discussion]: 'component-style-default',
  [COMPONENT_TYPES.library]: 'component-style-default',
  [COMPONENT_TYPES.html]: 'component-style-html',
  [COMPONENT_TYPES.openassessment]: 'component-style-default',
  [COMPONENT_TYPES.problem]: 'component-style-default',
  [COMPONENT_TYPES.video]: 'component-style-video',
  [COMPONENT_TYPES.dragAndDrop]: 'component-style-default',
  vertical: 'component-style-vertical',
  unit: 'component-style-vertical',
  sequential: 'component-style-sequential',
  subsection: 'component-style-sequential',
  chapter: 'component-style-chapter',
  section: 'component-style-chapter',
  collection: 'component-style-collection',
  other: 'component-style-other',
};
