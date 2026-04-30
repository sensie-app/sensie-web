// react
import React, { useState, useEffect, Fragment, useReducer } from 'react'

import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Divider, List, ListItem, ListItemText } from '@mui/material'

// components
import Loading from '../Loading'
import Icon from '../../components/Icon'
import ItemCheckbox from '../ItemCheckbox'

// contants
import { COLORS } from '../../constants/theme'

// styles
import styles from './styles.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { listPacksAction } from '../../../redux/actions/packs.actions'
import { createInvitation, getLastInvitationByCoach, updateInvitation, updateInvitationLocal } from '../../../redux/actions/invitations.actions'

// const
const { fontColor1 } = COLORS
const limitChecked = 100

// * component
/**
 * InvitePeople component
 * @component
 */
const InvitePeople = ({ link }) => {
  // ? hooks
  const dispatch = useDispatch()
  const [t] = useTranslation('global')
  const [coachLink, setCoachLink] = useState(null)
  const [/* valueInput, */setValueInput] = useState('')
  const [checked, setChecked] = useState({})
  const [, forceUpdate] = useReducer(x => x + 1, 0)

  const {
    packsReducer,
    invitationsReducer: { invitation, loading },
    userReducer: { user }
  } = useSelector(state => state)

  // ? handle functions
  /**
   * handle click cpoy link
   * @returns {undefined} toast component
   */
  const handleClickCopyLink = async () => {
    const linkEl = document.getElementById('LINK_COPY')
    const text = generateLink() || (linkEl && linkEl.value)

    if (!text || text.endsWith('=null')) {
      // Guard: invitation hasn't been created yet (createInvitation
      // dispatched in useEffect didn't complete or errored). Trigger
      // creation if we have a user, and tell the user to retry.
      if (user && user.id) {
        dispatch(createInvitation(user.id))
        toast.dark('Generating your invite link — try again in a moment.')
      } else {
        toast.error('No user context — sign out and back in.')
      }
      return
    }

    try {
      // Modern API — works in Chrome/Safari/Firefox on https + localhost.
      // The previous document.execCommand('copy') was deprecated and
      // silently failed in modern Chrome, with the toast lying about success.
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
      } else if (linkEl) {
        // Legacy fallback for non-secure contexts where Clipboard API is blocked
        linkEl.disabled = false
        linkEl.select()
        const ok = document.execCommand('copy')
        linkEl.disabled = true
        if (!ok) throw new Error('execCommand copy returned false')
      } else {
        throw new Error('no clipboard API and no link element to fall back on')
      }
      toast.dark(t('dashboard.InvitePeople.linkWasCopied'))
    } catch (err) {
      console.error('[InvitePeople] copy link failed:', err)
      toast.error('Could not copy link — copy manually: ' + text)
    }
  }

  /**
   * handle input value
   *
   * @param {undefined} e (event)
   * @returns {string} value (state)
   */
  const handleInputValueChange = e => setValueInput(e.target.value)

  const generateLink = () => {
    // Return null when invitation hasn't been created yet — caller decides
    // how to surface that. Previously this returned `...?id=null` because
    // string concat with a null value coerces to "null".
    if (!invitation || !invitation.id) return null
    return 'https://joinsensie.app.link/coach-invite?id=' + invitation.id
  }

  /**
   * Verify the checked object and return only the checked packsId
   *
   * @returns {array} array of checked packsIds
   */
  const getCheckedPacksId = () => {
    const marked = []

    for (const packId in checked) {
      if (checked[packId]) {
        marked.push(packId)
      }
    }

    return marked
  }

  /**
   * Add or update the checked items and their statuses
   *
   * @param {string} packId
   * @param {boolean} status
   */
  const toggleCheckPack = (packId, status) => {
    checked[packId] = status
    setChecked(checked)
    forceUpdate()
  }

  /**
   * Verify the current state of an item and toggle it. At the end the invitation packsIds are updated
   *
   * @param {event} e event change from ItemCheckbox component
   * @returns {void}
   */
  const handleChange = (e) => {
    const packId = e.target.value
    const actualValue = !!checked[packId]
    const marked = getCheckedPacksId()

    if (actualValue) {
      toggleCheckPack(packId, false)
    } else {
      if (marked.length === limitChecked) {
        toast.dark(t('dashboard.InvitePeople.checkedPacksLimit'))

        return false
      }

      toggleCheckPack(packId, true)
    }
    const p = invitation
    p.packsId = getCheckedPacksId()
    dispatch(updateInvitationLocal(p))
    dispatch(updateInvitation(invitation.id, getCheckedPacksId()))
  }

  useEffect(() => {
    dispatch(listPacksAction(user.id))
    dispatch(getLastInvitationByCoach(user.id))
  }, [user.id])

  useEffect(() => {
    if (!loading) {
      if (invitation.id) {
        if (invitation.packsId) {
          invitation.packsId.forEach((packId) => {
            toggleCheckPack(packId, true)
          })
        }

        setCoachLink(generateLink())
      } else {
        dispatch(createInvitation(user.id))
      }
    }
  }, [loading])

  return (
    <div className={styles.InvitePeopleContainer}>
      {!loading
        ? <>
            <div className={styles.InvitePeopleFooterContainer}>
              <input id="LINK_COPY" onChange={handleInputValueChange} value={coachLink} disabled />
              <button className={styles.InvitePeopleLinkContainer} onClick={handleClickCopyLink}>
                <Icon name="link-2-outline" color={fontColor1} size="md" />
                <span>{t('dashboard.InvitePeople.copyInviteLink')}</span>
              </button>
            </div>

            {!packsReducer.loading
              ? packsReducer.packs.length > 0
                ? <>
                    <h4 className={styles.InvitePeopleListTitle}>{t('dashboard.InvitePeople.selectPack')}</h4>
                    <Divider className={styles.InvitePeopleDivider} />

                    {/* TODO: Convert in componente */}
                    <List className={styles.InvitePeopleList}>
                      {
                        packsReducer.packs.map((pack) => {
                          return (
                            <div className={styles.InvitePeopleListItem} key={pack.id}>
                              <ItemCheckbox value={pack.id}
                                defaultValue={checked[pack.id]}
                                check={checked[pack.id]}
                                onChange={handleChange}
                                onClick={() => { }}
                              >
                                <ListItem role={undefined} >
                                  <ListItemText id={pack.id} primary={`${pack.name} - ${pack.author}`} />
                                </ListItem>
                              </ItemCheckbox>
                            </div>
                          )
                        })
                      }
                    </List>
                  </>
                : <></>
              : <Loading />
            }

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
              theme='colored'
            />
          </>
        : <Loading />
      }
    </div>
  )
}

InvitePeople.propTypes = {
  link: PropTypes.string
}

export default InvitePeople
