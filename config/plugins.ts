export default ({ env }) => ({
  email: {
    config: {
      provider: 'sendmail', // replace with your provider
      providerOptions: {
        host: env('SMTP_HOST', 'sandbox.smtp.mailtrap.io'),
        port: env.int('SMTP_PORT', 2525),
        auth: {
          user: env('SMTP_USER', 'd9c2247f62645d'),
          pass: env('SMTP_PASS', '96c6bd4a57407b'),
        },
      },
      settings: {
        defaultFrom: 'no-reply@example.com',
        defaultReplyTo: 'support@example.com',
      },
    },
  },
});