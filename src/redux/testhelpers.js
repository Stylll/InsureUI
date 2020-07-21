export const createItemSuccessData = {
  id: 2,
  name: 'Xbox',
  value: 238.54,
  categoryId: 1,
  category: {
    id: 1,
    name: 'Electronics',
  },
};

export const errorData = {
  message: 'An error occurred',
};

export const createItemApiResponse = {
  data: {
    data: {
      id: 2,
      name: 'Xbox',
      value: 238.54,
      categoryId: 1,
      category: {
        id: 1,
        name: 'Electronics',
      },
    },
  },
};

export const createItemRequestBody = {
  Name: 'Electronics',
  Value: 46.00,
  CategoryId: 1,
};

export const serverError = {
  response: {
    data: {
      status: 400,
      errors: [
        {
          propertyName: 'Name',
          errorMessage: 'Name cannot be empty',
        },
        {
          propertyName: 'Value',
          errorMessage: 'Value cannot be empty',
        },
      ],
    },
  },
};
