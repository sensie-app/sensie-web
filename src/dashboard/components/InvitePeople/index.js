// react
import React, { useState, useEffect, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// components
import Icon from '../../components/Icon'
// contants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

// const
const { fontColor1 } = COLORS

// * component
/**
 * InvitePeople component
 * @component
 */
const InvitePeople = ({ link }) => {
  // ? hooks
  const [t] = useTranslation('global')
  const [showError/*, setShowError */] = useState(false)
  const [coachLink, setCoachLink] = useState(null)
  const [/* valueInput, */setValueInput] = useState('')

  const {
    userReducer: { user }
  } = useSelector(state => state)

  // ? handle functions
  /**
   * handle click cpoy link
   * @returns {undefined} toast component
   */
  const handleClickCopyLink = () => {
    const link = document.getElementById('LINK_COPY')
    link.disabled = false
    link.select()
    document.execCommand('copy')
    link.disabled = true
    toast.dark(t('dashboard.InvitePeople.linkWasCopied'))
  }

  /**
   * handle input value
   * @param {undefined} e (event)
   * @returns {string} value (state)
   */
  const handleInputValueChange = e => setValueInput(e.target.value)

  /**
   * handle error
   * @returns {boolean} showError (state)
   */
  // const handleErrorModal = () => valueInput.length === 0 ? setShowError(true) : setShowError(false)

  const generateLink = () => {
    // const id = user.data.invites.items.length > 0 ? user.data.invites.items[0].id : null
    // return id ? window.location.origin + '/coach-invite?id=' + id : null
    return 'https://joinsensie.app.link/coach-invite?id=' + user.id
  }

  useEffect(() => {
    setCoachLink(generateLink())
  }, [user.loading])

  return (
    <div className={styles.InvitePeopleContainer}>
      {coachLink
        ? <Fragment>
            <input id="LINK_COPY" onChange={handleInputValueChange} value={coachLink} disabled />
            <div className={styles.InvitePeopleFooterContainer}>
              <button className={styles.InvitePeopleLinkContainer} onClick={handleClickCopyLink}>
                <Icon name="link-2-outline" color={fontColor1} size="md" />
                <span>{t('dashboard.InvitePeople.copyInviteLink')}</span>
              </button>
              {/* <button onClick={handleErrorModal}>{t('dashboard.InvitePeople.send')}</button> */}
            </div>
            {showError && <div className={styles.inputError}><span>{t('dashboard.InvitePeople.enterAnEmailAddress')}</span></div>}
            <ToastContainer
              position="bottom-center"
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Fragment>
        : <span style={{ color: 'white', fontSize: '1.5em' }}> You have no invites </span>}
    </div>
  )
}

InvitePeople.propTypes = {
  link: PropTypes.string
}

export default InvitePeople
