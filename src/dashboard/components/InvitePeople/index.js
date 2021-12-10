// react
import React, { useState, useEffect, Fragment, useReducer } from 'react'

import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Divider, List, ListItem, ListItemText } from '@material-ui/core'

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
const limitChecked = 2

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
  const [disableChecks, setDisableCheks] = useState(false)
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
   *
   * @param {undefined} e (event)
   * @returns {string} value (state)
   */
  const handleInputValueChange = e => setValueInput(e.target.value)

  const generateLink = () => {
    // const id = user.data.invites.items.length > 0 ? user.data.invites.items[0].id : null
    // return id ? window.location.origin + '/coach-invite?id=' + id : null
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
      setDisableCheks(false)
    } else {
      if (marked.length === limitChecked) {
        toast.dark(t('dashboard.InvitePeople.checkedPacksLimit'))

        return false
      } else {
        setDisableCheks(true)
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

          const totalMarked = getCheckedPacksId()

          // Evitamos que se pase del límite permitido
          if (totalMarked.length >= limitChecked) {
            setDisableCheks(true)
          }
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
                                disabled={disableChecks && !checked[pack.id]}
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
