import { useCallback } from 'react'

/**
 * Hook para limpiar la palabra 'public/' de un string si existe.
 * @returns {function} función que recibe un string y retorna el string sin 'public/' al inicio.
 */
const useImagePack = () => {
  const cleanPublic = useCallback((str) => {
    if (typeof str !== 'string') return str
    if (str.startsWith('public/')) {
      return str.replace(/^public\//, '')
    }
    return str
  }, [])

  return cleanPublic
}

export default useImagePack
