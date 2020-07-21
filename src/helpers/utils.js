/* eslint-disable import/prefer-default-export */

export const apiErrorHandler = (error) => {
  let errorMessage;
  let validationErrors;
  // if server gets an error response, handle it
  if (error.response) {
    /**
       * using a switch statement instead of if/else because there is
       * a chance that we have to handle other error codes when we make
       * requests like GET to the server
       */
    switch (error.response.data.status) {
      case 500:
        errorMessage = 'Server error, try again';
        break;
      case 400:
        if (error.response.data.errors && error.response.data.errors.length) {
          validationErrors = error.response.data.errors
            .map((err) => err.errorMessage || err.message)
            .join(', ');
          errorMessage = `${validationErrors}`;
        } else {
          errorMessage = error.response.data.message;
        }
        break;
      default:
        errorMessage = error.response.data.message;
    }
  } else {
    //  if server is down, client won't get a response
    errorMessage = 'Possible network error, please check your connection and try again';
  }
  return errorMessage;
};
