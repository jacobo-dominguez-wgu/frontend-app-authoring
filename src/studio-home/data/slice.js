/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { RequestStatus } from '../../data/constants';

export const studioHomeCoursesRequestParamsDefault = {
  currentPage: 1,
  search: '',
  order: 'display_name',
  archivedOnly: undefined,
  activeOnly: undefined,
  isFiltered: false,
  cleanFilters: false,
};

const slice = createSlice({
  name: 'studioHome',
  initialState: {
    loadingStatuses: {
      studioHomeLoadingStatus: RequestStatus.IN_PROGRESS,
      courseNotificationLoadingStatus: RequestStatus.IN_PROGRESS,
      courseLoadingStatus: RequestStatus.IN_PROGRESS,
      libraryLoadingStatus: RequestStatus.IN_PROGRESS,
    },
    savingStatuses: {
      courseCreatorSavingStatus: '',
      deleteNotificationSavingStatus: '',
    },
    studioHomeData: {},
    studioHomeCoursesRequestParams: studioHomeCoursesRequestParamsDefault,
  },
  reducers: {
    updateLoadingStatuses: (state, { payload }) => {
      state.loadingStatuses = { ...state.loadingStatuses, ...payload };
    },
    updateSavingStatuses: (state, { payload }) => {
      state.savingStatuses = { ...state.savingStatuses, ...payload };
    },
    fetchStudioHomeDataSuccess: (state, { payload }) => {
      Object.assign(state.studioHomeData, payload);
    },
    fetchCourseDataSuccess: (state, { payload }) => {
      const { courses, archivedCourses, inProcessCourseActions } = payload;
      state.studioHomeData.courses = courses;
      state.studioHomeData.archivedCourses = archivedCourses;
      state.studioHomeData.inProcessCourseActions = inProcessCourseActions;
    },
    fetchCourseDataSuccessV2: (state, { payload }) => {
      const { courses, archivedCourses = [], inProcessCourseActions } = payload.results;
      const { numPages, count } = payload;
      state.studioHomeData.courses = courses;
      state.studioHomeData.archivedCourses = archivedCourses;
      state.studioHomeData.inProcessCourseActions = inProcessCourseActions;
      state.studioHomeData.numPages = numPages;
      state.studioHomeData.coursesCount = count;
    },
    fetchLibraryDataSuccess: (state, { payload }) => {
      const { libraries } = payload;
      state.studioHomeData.libraries = libraries;
    },
    updateStudioHomeCoursesCustomParams: (state, { payload }) => {
      Object.assign(state.studioHomeCoursesRequestParams, payload);
    },
    resetStudioHomeCoursesCustomParams: (state) => {
      state.studioHomeCoursesRequestParams = studioHomeCoursesRequestParamsDefault;
    },
  },
});

export const {
  updateSavingStatuses,
  updateLoadingStatuses,
  fetchStudioHomeDataSuccess,
  fetchCourseDataSuccess,
  fetchCourseDataSuccessV2,
  fetchLibraryDataSuccess,
  updateStudioHomeCoursesCustomParams,
  resetStudioHomeCoursesCustomParams,
} = slice.actions;

export const {
  reducer,
} = slice;
