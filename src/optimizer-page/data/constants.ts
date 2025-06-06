export const LAST_EXPORT_COOKIE_NAME = 'lastexport';
export const LINK_CHECK_STATUSES = {
  UNINITIATED: 'Uninitiated',
  PENDING: 'Pending',
  IN_PROGRESS: 'In Progress',
  SUCCEEDED: 'Succeeded',
  FAILED: 'Failed',
  CANCELED: 'Canceled',
  RETRYING: 'Retrying',
};
export enum LinkCheckStatusTypes {
  UNINITIATED = 'Uninitiated',
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  SUCCEEDED = 'Succeeded',
  FAILED = 'Failed',
  CANCELED = 'Canceled',
  RETRYING = 'Retrying',
}
export const SCAN_STAGES = {
  [LINK_CHECK_STATUSES.UNINITIATED]: -1,
  [LINK_CHECK_STATUSES.PENDING]: 0,
  [LINK_CHECK_STATUSES.IN_PROGRESS]: 1,
  [LINK_CHECK_STATUSES.RETRYING]: 1,
  [LINK_CHECK_STATUSES.SUCCEEDED]: 2,
  [LINK_CHECK_STATUSES.FAILED]: 1,
  [LINK_CHECK_STATUSES.CANCELED]: 1,
};

export const LINK_CHECK_IN_PROGRESS_STATUSES = [
  LINK_CHECK_STATUSES.PENDING,
  LINK_CHECK_STATUSES.IN_PROGRESS,
  LINK_CHECK_STATUSES.RETRYING,
];

export const LINK_CHECK_FAILURE_STATUSES = [
  LINK_CHECK_STATUSES.FAILED,
  LINK_CHECK_STATUSES.CANCELED,
];
export const SUCCESS_DATE_FORMAT = 'MM/DD/yyyy';
