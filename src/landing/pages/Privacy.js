import React from 'react'
import { makeStyles, Grid, Box } from '@material-ui/core'

const useStyles = makeStyles({
  background: {
    backgroundColor: '#071215'
  },
  indent: {
    marginLeft: '4rem'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2.8rem',
    textAlign: '-webkit-left',
    color: 'white',
    marginBottom: '1rem'
  },
  header: {
    color: '#15E7BC',
    fontStyle: 'italic',
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  text: {
    color: 'white',
    fontSize: '1.5rem',
    marginLeft: '1rem',
    marginBottom: '1rem'
  },
  list: {
    color: 'white',
    marginLeft: '1.8rem',
    fontSize: '1.5rem',
    marginBottom: '1rem'
  }
})

const Privacy = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container className={classes.background}>
        <div className={classes.indent}>
          <Grid item xs={12} data-aos="zoom-out-up">
            <Box mt={'12rem'} mb={4}>
              <h1 className={classes.title}>Privacy Policy</h1>
            </Box>
          </Grid>
          <div className={classes.header}>Your privacy is critically important to us. At Sensie we have a few fundamental principles:</div>
          <ul className={classes.list}>
            <li style={{ marginBottom: '.5rem' }}>We don’t ask you for personal information unless we truly need it. (We can’t stand services that ask you for things like your gender or income level for no apparent reason.)</li>
            <li style={{ marginBottom: '.5rem' }}>We don’t share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</li>
            <li style={{ marginBottom: '.5rem' }}>We don’t store personal information on our servers unless required for the on-going operation of one of our services.</li>
            <li style={{ marginBottom: '.5rem' }}>In our Sensie products, we aim to make it as simple as possible for you to control what’s visible to the public, seen by search engines, kept private, and permanently deleted.</li>
          </ul>
          <p className={classes.text}>NOTE: this privacy policy was borrowed from <a href="https://automattic.com/privacy/" style={{ color: '#15E7BC', fontSize: '1.5rem' }}>Automattic</a> - made available under <a href="https://creativecommons.org/licenses/by-sa/4.0/" style={{ color: '#15E7BC', fontSize: '1.5rem' }}>Creative Commons Sharealike</a> license. We’re very grateful to the team at Automattic and their act of generosity!</p>
          <p className={classes.text}>It is Sensie’s policy to respect your privacy regarding any information we may collect while operating our website and/or mobile application.</p>
          <div className={classes.header}>Website Visitors</div>
          <p className={classes.text}>Like most website and mobile operators, Sensie collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Sensie’s purpose in collecting non-personally identifying information is to better understand how Sensie’s visitors use its website and/or mobile application.</p>
          <p className={classes.text}>From time to time, Sensie may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website and/or mobile application.</p>
          <p className={classes.text}>Sensie also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on Sensieapp.com blogs. Sensie only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below, except that blog commenter IP addresses and email addresses are visible and disclosed to the administrators of the blog where the comment was left.</p>
          <div className={classes.header}>Gathering of Personally-Identifying Information</div>
          <p className={classes.text}>Certain visitors to Sensie’s websites choose to interact with Sensie in ways that require Sensie to gather personally-identifying information. The amount and type of information that Sensie gathers depends on the nature of the interaction. For example, we ask visitors who sign up at Sensieapp.com to provide a username and email address. Those who engage in transactions with Sensie – by purchasing content, for example – are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. In each case, Sensie collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with Sensie. Sensie does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.</p>
          <div className={classes.header}>Aggregated Statistics</div>
          <p className={classes.text}>Sensie may collect statistics about the behavior of visitors to its website and/or mobile application. For instance, Sensie may monitor the most popular content on the Sensieapp.com site. Sensie may display this information publicly or provide it to others. However, Sensie does not disclose personally-identifying information other than as described below.</p>
          <div className={classes.header}>Aggregated Statistics</div>
          <p className={classes.text}>Sensie may collect statistics about the behavior of visitors to its website and/or mobile application. For instance, Sensie may monitor the most popular content on the Sensieapp.com site. Sensie may display this information publicly or provide it to others. However, Sensie does not disclose personally-identifying information other than as described below.</p>
          <div className={classes.header}>Protection of Certain Personally-Identifying Information</div>
          <p className={classes.text}>Sensie discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Sensie’s behalf or to provide services available at Sensie’s website and/or mobile application, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Sensie’s website and mobile app, you consent to the transfer of such information to them. Sensie will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, Sensie discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when Sensie believes in good faith that disclosure is reasonably necessary to protect the property or rights of Sensie, third parties or the public at large. If you are a registered user of an Sensie website and/or mobile app and have supplied your email address, Sensie may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what’s going on with Sensie and our products. We primarily use our various product blogs to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. Sensie takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p>
          <div className={classes.header}>Cookies</div>
          <p className={classes.text}>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Sensie uses cookies to help Sensie identify and track visitors, their usage of Sensie website, and their website access preferences. Sensie visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Sensie’s websites, with the drawback that certain features of Sensie’s websites may not function properly without the aid of cookies.</p>
          <div className={classes.header}>Business Transfers</div>
          <p className={classes.text}>If Sensie, or substantially all of its assets, were acquired, or in the unlikely event that Sensie goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of Sensie may continue to use your personal information as set forth in this policy.</p>
          <div className={classes.header}>Ads</div>
          <p className={classes.text}>Ads appearing on any of our websites may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Sensie and does not cover the use of cookies by any advertisers.</p>
          <div className={classes.header}>Comments</div>
          <p className={classes.text}>Comments and other content submitted to our 3rd party anti-spam service are not saved on our servers unless they were marked as false positives, in which case we store them long enough to use them to improve the service to avoid future false positives.</p>
          <div className={classes.header}>Privacy Policy Changes</div>
          <p className={classes.text}>Although most changes are likely to be minor, Sensie may change its Privacy Policy from time to time, and in Sensie’s sole discretion. Sensie encourages visitors to frequently check this page for any changes to its Privacy Policy. If you have a Sensieapp.com account, you should also check your dashboard for alerts to these changes. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
          <div className={classes.header}>Change log:</div>
          <p className={classes.text}>02/09/2017</p>
        </div>
      </Grid>
    </div>
  )
}

export default Privacy
