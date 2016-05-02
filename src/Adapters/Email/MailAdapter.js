
/*
  Mail Adapter prototype
  A MailAdapter should implement at least sendMail()
 */
export class MailAdapter {
  /*
   * A method for sending mail
   * @param options would have the parameters
   * - to: the recipient
   * - text: the raw text of the message
   * - subject: the subject of the email
   */
  sendMail(options) {}
  
  /* You can implement those methods if you want
   * to provide HTML templates etc...
   */
  // sendVerificationEmail({ link, appName, user }) {}
  sendVerificationEmail({link, user, appName, }) {
    let text = "Hi,\n\n" +
	      "Let's see if this works or not for " + user.get("email") + " with " + appName + "\n\n" +
	      "" +
	      "Click right now here to confirm it!!!!!\n" + link;
    let to = user.get("email");
    let subject = 'Please verify your e-mail for ' + appName;
    return { text, to, subject };
  }
  // sendPasswordResetEmail({ link, appName, user }) {}
}

export default MailAdapter;
