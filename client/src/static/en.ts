const en = {
  translation: {
    title: 'Message For Whatsapp',

    Home: {
      mainText: 'Send Message In Whatsapp.',
    },

    Login: {
      login: 'Login',
      youHaveNoAccount: 'Don\'t have an account?',
      signup: 'Sign Up',
      or: 'OR',
    },

    SignUp: {
      signup: 'Sign up',
      niceToMeet: 'Hi, Nice To Meet',
      alreadyHaveAnAccount: 'Already have an account?',
      signIn: 'Sign in',
      or: 'OR',
    },

    Footer: {
      createdBy: 'created by',
      inOpenSource: 'In Open Source',
    },

    LoggedMainText: {
      zeroMessages: 'Looks like you haven\'t sent any message yet!',
      firstMessage: `Nice! Your first Message!
        {{timeExpression}}, to {{phoneNumber}},
        Would you like to send it again?`,
      manyMessages: `Well done! You have already sent {{numberOfMessages}} messages!
        The last message you sent was {{timeExpression}}, 
        to {{phoneNumber}},
        Would you like to send it again?`,
    },

    MessageTable: {
      date: 'Date',
      phoneNumber: 'Phone Number',
      textMessage: 'Text Message',
      noMessagesYet: 'No messages yet',
    },

    labels: {
      phone: 'Phone Number',
      prefix: 'Prefix',
      textMessage: 'Your Message (Optional)',
      username: 'Username',
      fullName: 'Your Name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
    },

    buttons: {
      login: 'Login',
      signup: 'Sign up',
      send: 'Send',
      continue: 'Continue',
      continueForLogin: 'Continue for Log In',
      continueWithGoogle: 'Continue with Google',
      messages: 'Messages',
      signOut: 'Sign out',
      yes: 'Yes!',
    },

    greetes: {
      goodMorning: 'Good morning',
      goodAfternoon: 'Good afternoon',
      goodEvening: 'Good evening',
      goodNight: 'Good night',
    },

    timeExpressions: {
      today: 'today',
      yesterday: 'yesterday',
      twoDaysAgo: 'two days ago',
      numberDaysAgo: '{{number}} days ago',
    },

    errors: {
      tooShort: 'This number is too short :( You have to add 9 characters.',
      tooShortName: 'Too short name.',
      tooShortUsername: 'Too short username.',
      somthingNotWork: 'Something not work!',
      requiredField: 'Required field.',
      incorrect: 'Incorrect username or password.',
      invalidEmail: 'Invalid email.',
      emailAlreadyExist: 'This email already exists.',
      usernameAlreadyExist: 'This username already exists.',
      invalidPassword: 'At least 6 characters, 1 letter and 1 number.',
      confirmPasswordErr: 'The passwords is not the same.',
      stillSomeDetailsWrong: 'Oops, still some details wrong.',
      error: 'Error :(',
    },
  },
};

export default en;
