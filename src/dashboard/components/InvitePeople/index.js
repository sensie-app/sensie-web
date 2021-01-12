// react
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// components
import Icon from '../../components/Icon'
// contants
import { COLORS } from '../../constants/theme'
// styles
import styles from './styles.module.scss'

// const
const { fontColor1 } = COLORS

// * component
/**
 * InvitePeople component
 * @component
 */
const InvitePeople = () => {
  // hooks
  const [t] = useTranslation('global')
  const [showError, setShowError] = useState(false)
  const [valueInput, setValueInput] = useState('')

  console.log('valueInput', valueInput)
  // ? handle functions
  /**
   * handle click cpoy link
   * @returns {undefined} toast component
   */
  const handleClickCopyLink = () => toast.dark(t('dashboard.InvitePeople.linkWasCopied'))

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
  const handleErrorModal = () => valueInput.length === 0 ? setShowError(true) : setShowError(false)

  return (
    <div className={styles.InvitePeopleContainer}>
      <textarea onChange={handleInputValueChange}/>
      <div className={styles.InvitePeopleFooterContainer}>
        <button className={styles.InvitePeopleLinkContainer} onClick={handleClickCopyLink}>
          <Icon name="link-2-outline" color={fontColor1} size="md" />
          <span>{t('dashboard.InvitePeople.copyInviteLink')}</span>
        </button>
        <button onClick={handleErrorModal}>{t('dashboard.InvitePeople.send')}</button>
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
    </div>
  )
}

export default InvitePeople
