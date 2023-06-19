export enum SERVICE_RESULT_TYPE {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export type ServiceResultSuccess<T> = {
  type: SERVICE_RESULT_TYPE.SUCCESS;
  data: T;
};

export type ServiceResultFailure = {
  type: SERVICE_RESULT_TYPE.FAILURE;
  data: string;
};

export type ServiceResult<T> = ServiceResultSuccess<T> | ServiceResultFailure;
