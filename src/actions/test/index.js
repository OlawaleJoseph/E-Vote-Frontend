import { TEST_FAILURE, TEST_SUCCESS } from '../type'

export const getTestSuccess = () => ({
  type: TEST_SUCCESS,
});

export const getTestFailure = () => ({
  type: TEST_FAILURE,
});