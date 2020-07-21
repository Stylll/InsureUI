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

export const deleteItemApiResponse = {
  data: {
    data: {},
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

export const serverErrorB = {
  response: {
    data: {
      status: 400,
      message: 'An error occurred',
    },
  },
};

export const getCategoryItemsApiResponse = {
  data: {
    data: {
      categories: [
        {
          id: 1,
          name: 'Electronics',
          items: [
            {
              id: 1,
              name: 'Playstation',
              value: 999,
              categoryId: 1,
            },
            {
              id: 4,
              name: 'Game Boy',
              value: 430,
              categoryId: 1,
            },
          ],
          total: 2267.54,
        },
        {
          id: 2,
          name: 'Clothing',
          items: [],
          total: 0,
        },
        {
          id: 3,
          name: 'Kitchen',
          items: [],
          total: 0,
        },
      ],
      total: 2267.54,
    },
  },
};
