export const cx = (
  className: string,
  success?: string,
  condition?: boolean,
  failure?: string,
) => {
  const isFailure = !!failure;
  const isSuccess = !!success;
  const isConditionSet = typeof condition === 'boolean';

  const failureResult = isFailure ? `${className} ${failure}` : className;
  const successResult = isSuccess ? `${className} ${success}` : className;

  return isConditionSet
    ? condition
      ? successResult
      : failureResult
    : successResult;
};
