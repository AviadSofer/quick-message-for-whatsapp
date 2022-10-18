const he = {
  translation: {
    title: 'הודעה בוואטספ',

    Home: {
      mainText: 'שליחת הודעה בוואטספ בלי לשמור את המספר.',
    },

    Login: {
      login: 'כניסה',
      youHaveNoAccount: 'אין לך חשבון?',
      signup: 'הרשמה',
      or: 'או',
    },

    SignUp: {
      signup: 'הרשמה',
      niceToMeet: 'היי, נעים להכיר',
      alreadyHaveAnAccount: 'כבר יש לך חשבון?',
      signIn: 'התחברות',
      or: 'או',
    },

    Footer: {
      createdBy: 'נוצר על ידי',
      inOpenSource: 'בקוד פתוח',
    },

    LoggedMainText: {
      zeroMessages: `נראה שעוד לא שלחת אף הודעה!
        תמיד אפשר לשלוח הודעה כאן למטה,
        והיא תשמר, כאן, למתי שתרצה.`,
      firstMessage: `וואו! הודעה ראשונה!
        {{timeExpression}}, ל{{phoneNumber}},
        תרצה לשלוח אותה שוב?`,
      manyMessages: `יפה! שלחת כבר {{numberOfMessages}} הודעות!
        ההודעה האחרונה ששלחת הייתה {{timeExpression}},
        ל{{phoneNumber}},
        תרצה לשלוח אותה שוב?`,
    },

    MessageTable: {
      date: 'תאריך',
      phoneNumber: 'מספר טלפון',
      textMessage: 'הודעה',
      noMessagesYet: 'אין הודעות עדיין',
    },

    labels: {
      phone: 'מספר טלפון',
      prefix: 'קידומת',
      textMessage: 'ההודעה שלך (לא חובה)',
      username: 'שם משתמש',
      fullName: 'שם מלא',
      email: 'אימייל',
      password: 'סיסמה',
      confirmPassword: 'אימות סיסמה',
    },

    buttons: {
      login: 'כניסה',
      signup: 'הרשמה',
      send: 'שליחה',
      continue: 'המשך',
      continueForLogin: 'המשך לכניסה',
      continueWithGoogle: 'להמשיך עם Google',
      messages: 'הודעות',
      signOut: 'יציאה',
      yes: 'כן!',
    },

    greetes: {
      goodMorning: 'בוקר טוב',
      goodAfternoon: 'צהריים טובים',
      goodEvening: 'ערב טוב',
      goodNight: 'לילה טוב',
    },

    timeExpressions: {
      today: 'היום',
      yesterday: 'אתמול',
      twoDaysAgo: 'לפני יומיים',
      numberDaysAgo: 'לפני {{number}} ימים',
    },

    errors: {
      tooShort: 'מספר קצר מדי :( מספר תקין הוא משהו בסגנון של 054-123-4567',
      tooShortName: 'שם קצר מדי :(',
      tooShortUsername: 'קצר מדי :( תנסו עם יותר מ5 תווים',
      somthingNotWork: 'משהו לא עובד!',
      requiredField: 'שדה חובה',
      incorrect: 'שם משתמש או סיסמה שגויים ):',
      invalidEmail: 'אימייל לא תקין :(',
      emailAlreadyExist: 'המייל הזה תפוס כבר :(',
      usernameAlreadyExist: 'שם המשתמש הזה תפוס כבר :(',
      invalidPassword: 'הסיסמה צריכה להכיל לפחות 8 תווים, אות אחת ומספר אחד :(',
      confirmPasswordErr: 'הסיסמאות לא זהות :(',
      stillSomeDetailsWrong: 'וואי, עדיין חלק מהפרטים לא נכונים.',
      error: 'שגיאה :(',
    },
  },
};

export default he;
