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
    marginRight: '1rem',
    marginBottom: '1rem'
  },
  miniHeader: {
    color: '#15E7BC',
    fontSize: '1.75rem',
    marginRight: '1rem',
    marginBottom: '1rem'
  },
  text: {
    color: 'white',
    fontSize: '1.5rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    marginBottom: '1rem'
  },
  list: {
    color: 'white',
    marginLeft: '1.8rem',
    marginRight: '1rem',
    fontSize: '1.5rem',
    marginBottom: '1rem'
  }
})

const Terms = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container className={classes.background}>
        <div className={classes.indent}>
          <Grid item xs={12} data-aos="zoom-out-up">
            <Box mt={'12rem'} mb={4}>
              <h1 className={classes.title}>Terms of Use</h1>
            </Box>
          </Grid>
          <div className={classes.header}>1. General Information Regarding These Terms of Use</div>
          <p className={classes.text}>Master terms: Unless otherwise noted on a particular site or service, these master terms of use (“Master Terms”) apply to your use of all of the websites and mobile apps that Sensie LLC operates, including http://www.sensieapp.com, http://www.takeasensie.com, http://www.sensie.org, http://www.sensie.net, http://www.sensie.guru (the “Websites”), as well as the products, information, and services provided through the Websites, and the mobile application (together with the Websites, the “Services”).</p>
          <p className={classes.text}>Additional terms: In addition to the Master Terms, your use of any Services may also be subject to specific terms applicable to a particular Service (“Additional Terms”). If there is any conflict between the Additional Terms and the Master Terms, then the Additional Terms apply in relation to the relevant Service.</p>
          <p className={classes.text}>Collectively, the Terms: The Master Terms, together with any Additional Terms, form a binding legal agreement between you and Sensie LLC in relation to your use of the Services. Collectively, this legal agreement is referred to below as the “Terms.”</p>
          <div className={classes.header}>2. Your Agreement to the Terms</div>
          <p className={classes.text}>YOUR ACCESS TO OR USE OF ANY THE SERVICES (INCLUDING THE MOBILE APP, CONTENT, THE ASK AND THE BLOG) SIGNIFIES THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE BOUND BY THE TERMS. By accessing or using any Services you also represent that you have the legal authority to accept the Terms on behalf of yourself and any party you represent in connection with your use of any Services. If you do not agree to the Terms, you are not authorized to use any Services.</p>
          <div className={classes.header}>3. Changes to the Terms</div>
          <p className={classes.text}>From time to time, Sensie LLC may change, remove, or add to the Terms, and reserves the right to do so in its discretion. In that case, we will post updated Terms and indicate the date of revision. If we feel the modifications are material, we will make reasonable efforts to post a prominent notice on the relevant Website(s) and notify those of you with a current Sensieapp account via email. All new and/or revised Terms take effect immediately and apply to your use of the Services from that date on, except that material changes will take effect 30 days after the change is made and identified as material. Your continued use of any Services after new and/or revised Terms are effective indicates that you have read, understood, and agreed to those Terms.</p>
          <div className={classes.header}>4. No Legal Advice</div>
          <p className={classes.text}>Sensie LLC is not a law firm, does not provide legal advice, and is not a substitute for a law firm. Sending us an email or using any of the Services, including the licenses, public domain tools, and choosers, does not constitute legal advice or create an attorney-client relationship.</p>
          <div className={classes.header}>5. Content Available through the Services</div>
          <p className={classes.text}>Provided as-is: You acknowledge that Sensie LLC does not make any representations or warranties about the material, data, and information, such as data files, text, computer software, code, music, audio files or other sounds, photographs, videos, or other images (collectively, the “Content”) which you may have access to as part of, or through your use of, the Services. Under no circumstances is Sensie LLC liable in any way for any Content, including, but not limited to: any infringing Content, any errors or omissions in Content, or for any loss or damage of any kind incurred as a result of the use of any Content posted, transmitted, linked from, or otherwise accessible through or made available via the Services. You understand that by using the Services, you may be exposed to Content that is offensive, indecent, or objectionable.</p>
          <p className={classes.text}>You agree that you are solely responsible for your reuse of Content made available through the Services. You should review the terms of the applicable license before you use the Content so that you know what you can and cannot do. Licensing:</p>
          <p className={classes.text}>Sensie-Owned Content: Other than the text of Sensie LLC, and other legal tools and the text of the deeds for all legal tools, Sensie LLC trademarks (subject to the Trademark Policy), and the software code, all Content on the Website and Mobile app are licensed under the Sensie LLC Attribution 4.0 International license, unless otherwise marked.</p>
          <p className={classes.text}>Sensie-Owned Code: All of Sensie’s software code is free software; please check our code repository for the specific license on software you want to reuse.</p>
          <div className={classes.header}>6. Content Supplied by You</div>
          <p className={classes.text}>Your responsibility: You represent, warrant, and agree that no Content posted or otherwise shared by you on or through any of the Services (“Your Content”), violates or infringes upon the rights of any third party, including copyright, trademark, privacy, publicity, or other personal or proprietary rights, breaches or conflicts with any obligation, such as a confidentiality obligation, or contains libelous, defamatory, or otherwise unlawful material.</p>
          <p className={classes.text}>Licensing Your Content: You retain any copyright that you may have in Your Content. You hereby agree that Your Content: (a) is hereby licensed under the Creative Commons Attribution 4.0 License and may be used under the terms of that license or any later version of a Creative Commons Attribution License, or (b) is in the public domain (such as Content that is not copyrightable or Content you make available under CC0), or © if not owned by you, (i) is available under a Creative Commons Attribution 4.0 License or (ii) is a media file that is available under any Creative Commons license or that you are authorized by law to post or share through any of the Services, such as under the fair use doctrine, and that is prominently marked as being subject to third party copyright. All of Your Content must beappropriately marked with licensing (or other permission status such as fair use) and attribution information.</p>
          <p className={classes.text}>Removal: Sensie LLC may, but is not obligated to, review Your Content and may delete or remove Your Content (without notice) from any of the Services in its sole discretion. Removal of any of Your Content from the Services (by you or Creative Commons) does not impact any rights you granted in Your Content under the terms of a Creative Commons license.</p>
          <div className={classes.header}>7. Participating in our Community: Registered Users</div>
          <p className={classes.text}>By registering for an account through any of the Services, including CCID (a universal log-in for all Services), you represent and warrant that you (1) are the age of majority in your jurisdiction (typically age 18) or, (2) are over the age of 13 and have the express permission of a legal guardian to obtain an account and to use Services in connection with the account. Services offered to registered users are provided subject to these Master Terms and any Additional Terms specified on the relevant Website(s).</p>
          <p className={classes.text}>Registration: You agree to (a) only provide accurate and current information about yourself (though use of an alias or nickname in lieu of your legal name is encouraged), (b) maintain the security of your passwords and identification, © promptly update the email address listed in connection with your account to keep it accurate so that we can contact you, and (d) be fully responsible for all uses of your account. You must not set up an account on behalf of another individual or entity unless you are authorized to do so</p>
          <p className={classes.text}>No Membership in CC: Creating a CCID or using any of the related Websites or Services does not and shall not be deemed to make you a member, shareholder or affiliate of Creative Commons for any purposes whatsoever, nor shall you have any of the rights of statutory members as defined in Sections 2(3) and 3 of Chapter 180 of the General Laws of Massachusetts.</p>
          <p className={classes.text}>Termination: Sensie LLC reserves the right to modify or discontinue your account at any time for any reason or no reason at all.</p>
          <div className={classes.header}>8. Prohibited Conduct</div>
          <p className={classes.text}>You agree not to engage in any of the following activities:</p>
          <div className={classes.miniHeader}>1. Violating laws and rights:</div>
          <li className={classes.list} style={{ marginBottom: '.5rem' }}>You may not (a) use any Service for any illegal purpose or in violation of any local, state, national, or international laws, (b) violate or encourage others to violate any right of or obligation to a third party, including by infringing, misappropriating, or violating intellectual property, confidentiality, or privacy rights.</li>
          <div className={classes.miniHeader}>2. Solicitation:</div>
          <li className={classes.list} style={{ marginBottom: '.5rem' }}>You may not use the Services or any information provided through the Services for the transmission of advertising or promotional materials, including junk mail, spam, chain letters, pyramid schemes, or any other form of unsolicited or unwelcome solicitation.</li>
          <div className={classes.miniHeader}>3. Disruption:</div>
          <li className={classes.list} style={{ marginBottom: '.5rem' }}>You may not use the Services in any manner that could disable, overburden, damage, or impair the Services, or interfere with any other party’s use and enjoyment of the Services; including by (a) uploading or otherwise disseminating any virus, adware, spyware, worm or other malicious code, or (b) interfering with or disrupting any network, equipment, or server connected to or used to provide any of the Services, or violating any regulation, policy, or procedure of any network, equipment, or server.</li>
          <div className={classes.miniHeader}>4. Harming others:</div>
          <li className={classes.list} style={{ marginBottom: '.5rem' }}>You may not post or transmit Content on or through the Services that is harmful, offensive, obscene, abusive, invasive of privacy, defamatory, hateful or otherwise discriminatory, false or misleading, or incites an illegal act;</li>
          <li className={classes.list} style={{ marginBottom: '.5rem' }}>You may not intimidate or harass another through the Services; and, You may not post or transmit any personally identifiable information about persons under 13 years of age on or through the Services.</li>
          <div className={classes.miniHeader}>5. Impersonation or unauthorized access:</div>
          <li className={classes.list} style={{ marginBottom: '.5rem' }}>You may not impersonate another person or entity, or misrepresent your affiliation with a person or entity when using the Services;</li>
          <li className={classes.list} style={{ marginBottom: '.5rem' }}>You may not use or attempt to use another’s account or personal information; and,</li>
          <li className={classes.list} style={{ marginBottom: '.5rem' }}>You may not attempt to gain unauthorized access to the Services, or the computer systems or networks connected to the Services, through hacking password mining or any other means.</li>
          <div className={classes.header}>9. DISCLAIMER OF WARRANTIES</div>
          <p className={classes.text}>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SENSIE LLC OFFERS THE SERVICES (INCLUDING ALL CONTENT AVAILABLE ON OR THROUGH THE SERVICES) AS-IS AND MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND CONCERNING THE SERVICES, EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION, WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. SENSIE LLC DOES NOT WARRANT THAT THE FUNCTIONS OF THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT CONTENT MADE AVAILABLE ON OR THROUGH THE SERVICES WILL BE ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT ANY SERVERS USED BY CC ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. CREATIVE COMMONS DOES NOT WARRANT OR MAKE ANY REPRESENTATION REGARDING USE OF THE CONTENT AVAILABLE THROUGH THE SERVICES IN TERMS OF ACCURACY, RELIABILITY, OR OTHERWISE.</p>
          <div className={classes.header}>10. LIMITATION OF LIABILITY</div>
          <p className={classes.text}>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL SENSIE LLC BE LIABLE TO YOU ON ANY LEGAL THEORY FOR ANY INCIDENTAL, DIRECT, INDIRECT, PUNITIVE, ACTUAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR OTHER DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF REVENUE OR INCOME, LOST PROFITS, PAIN AND SUFFERING, EMOTIONAL DISTRESS, COST OF SUBSTITUTE GOODS OR SERVICES, OR SIMILAR DAMAGES SUFFERED OR INCURRED BY YOU OR ANY THIRD PARTY THAT ARISE IN CONNECTION WITH THE SERVICES (OR THE TERMINATION THEREOF FOR ANY REASON), EVEN IF CREATIVE COMMONS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          <p className={classes.text}>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SENSIE LLC IS NOT RESPONSIBLE OR LIABLE WHATSOEVER IN ANY MANNER FOR ANY CONTENT POSTED ON OR AVAILABLE THROUGH THE SERVICES (INCLUDING CLAIMS OF INFRINGEMENT RELATING TO THAT CONTENT), FOR YOUR USE OF THE SERVICES, OR FOR THE CONDUCT OF THIRD PARTIES ON OR THROUGH THE SERVICES.</p>
          <p className={classes.text}>Certain jurisdictions do not permit the exclusion of certain warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply to you. IN THESE JURISDICTIONS, THE FOREGOING EXCLUSIONS AND LIMITATIONS WILL BE ENFORCED TO THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW.</p>
          <div className={classes.header}>11. Indemnification</div>
          <p className={classes.text}>To the extent authorized by law, you agree to indemnify and hold harmless Creative Commons, its employees, officers, directors, affiliates, and agents from and against any and all claims, losses, expenses, damages, and costs, including reasonable attorneys fees, resulting directly or indirectly from or arising out of (a) your violation of the Terms, (b) your use of any of the Services, and/or © the Content you make available on any of the Services.</p>
          <div className={classes.header}>12. Privacy Policy</div>
          <p className={classes.text}>SENSIE LLC is committed to responsibly handling the information and data we collect through our Services in compliance with our Privacy Policy, which is incorporated by reference into these Master Terms. Please review the Privacy Policy so you are aware of how we collect and use your personal information.</p>
          <div className={classes.header}>13. Trademark Policy</div>
          <p className={classes.text}>Sensie’s name, logos, icons, and other trademarks may only be used in accordance with our Trademark Policy, which is incorporated by reference into these Master Terms. Please review the Trademark Policy so you understand how Sensie’s trademarks may be used.</p>
          <div className={classes.header}>14. Copyright Complaints</div>
          <p className={classes.text}>Sensie LLC respects copyright, and we prohibit users of the Services from submitting, uploading, posting, or otherwise transmitting any Content on the Services that violates another person’s proprietary rights.</p>
          <p className={classes.text}>To report allegedly infringing Content hosted on a website owned or controlled by Sensie LLC, send a Notice of Infringing Materials as set out in CC’s Digital Millennium Copyright Act (“DMCA”) Notice & Takedown Procedure.</p>
          <div className={classes.header}>15. Termination</div>
          <p className={classes.text}>By Sensie LLC: Sensie LLC may modify, suspend, or terminate the operation of, or access to, all or any portion of the Services at any time for any reason. Additionally, your individual access to, and use of, the Services may be terminated by Creative Commons at any time and for any reason.</p>
          <p className={classes.text}>By you: If you wish to terminate this agreement, you may immediately stop accessing or using the Services at any time.</p>
          <p className={classes.text}>Automatic upon breach: Your right to access and use the Services (including use of your CCID account) terminates automatically upon your breach of any of the Terms. For the avoidance of doubt, termination of the Terms does not require you to remove or delete any reference to previously-applied CC legal tools from your own Content.</p>
          <p className={classes.text}>Survival: The disclaimer of warranties, the limitation of liability, and the jurisdiction and applicable law provisions will survive any termination. The license grants applicable to Your Content are not impacted by the termination of the Terms and shall continue in effect subject to the terms of the applicable license. Your warranties and indemnification obligations will survive for one year after termination.</p>
          <div className={classes.header}>16. Miscellaneous Terms</div>
          <p className={classes.text}>Choice of law: The Terms are governed by and construed by the laws of the State of Florida in the United States, not including its choice of law rules.</p>
          <p className={classes.text}>Dispute resolution: The parties agree that any disputes between Sensie LLC and you concerning these Terms, and/or any of the Services may only brought in a federal or state court of competent jurisdiction sitting in the Northern District of California, and you hereby consent to the personal jurisdiction and venue of such court.</p>
          <li className={classes.list} style={{ marginBottom: '.5rem' }}>If you are an authorized agent of a government or intergovernmental entity using the Services in your official capacity, including an authorized agent of the federal, state, or local government in the United States, and you are legally restricted from accepting the controlling law, jurisdiction, or venue clauses above, then those clauses do not apply to you. For any such U.S. federal government entities, these Terms and any action related thereto will be governed by the laws of the United States of America (without reference to conflict of laws) and, in the absence of federal law and to the extent permitted under federal law, the laws of the State of California (excluding its choice of law rules).</li>
          <p className={classes.text}>No waiver: Either party’s failure to insist on or enforce strict performance of any of the Terms will not be construed as a waiver of any provision or right.</p>
          <p className={classes.text}>Severability: If any part of the Terms is held to be invalid or unenforceable by any law or regulation or final determination of a competent court or tribunal, that provision will be deemed severable and will not affect the validity and enforceability of the remaining provisions.</p>
          <p className={classes.text}>No agency relationship: The parties agree that no joint venture, partnership, employment, or agency relationship exists between you and Sensie LLC as a result of the Terms or from your use of any of the Services.</p>
          <p className={classes.text}>Integration: These Master Terms and any applicable Additional Terms constitute the entire agreement between you and Sensie LLC relating to this subject matter and supersede any and all prior communications and/or agreements between you and Sensie LLC relating to access and use of the Services.</p>
        </div>
      </Grid>
    </div>
  )
}

export default Terms
