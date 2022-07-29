import { HymnHistory } from '../models/hymn'
import Fetch, { apiUrl } from './api'

const sHymn = {
  byNumber(_number: number): Promise<HymnHistory> {
    return Fetch(`${apiUrl.hymn}/${_number}`)
  }
}

export default sHymn