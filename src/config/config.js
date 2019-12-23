// DEV NOTE: A single place to find and modify all the app configurations.

export const config = {
  appUrl: 'https://remrise-code-challenge.herokuapp.com/quiz-results',
  spinnerSize: 60,
  appInitialState: {
    resultsMock: {
      daily_rotation: {
        title: '',
        subtitle: '',
        rotations: [],
        image_border: null,
        image_person: null,
        image_person2x: null
      },
      userName: '',
      profile: {
        name: '',
        description: '',
        image: null,
        image2x: null
      },
      hero: {
        image: null,
        image2x: null
      }
    },
    parsedProductData: {
      title: '',
      description: '',
      price: 0,
    }
  }
};
