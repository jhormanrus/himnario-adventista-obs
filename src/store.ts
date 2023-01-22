import { reactive } from 'vue'

export const store = reactive({
  sceneList: [] as any[],
  sourceList: [] as any[],
  onlyInstrumental: (localStorage.getItem('onlyInstrumental') === 'true') || false,
  autoplayMusic: (localStorage.getItem('autoplayMusic') === 'true') || false,
  autodriveVerses: (localStorage.getItem('autodriveVerses') === 'true') || false,
  splitVerses: (localStorage.getItem('splitVerses') === 'true') || false,
  onSearchSwitchToHymnScene: (localStorage.getItem('onSearchSwitchToHymnScene') === 'true') || false,
  onSearchHymnScene: localStorage.getItem('onSearchHymnScene') || 'Hymn',
  onMusicEndSwitchToScene: localStorage.getItem('onMusicEndSwitchToScene') || '',
  obsWebsocketUrl: localStorage.getItem('obsWebsocketUrl') || '',
  musicHostUrl: localStorage.getItem('musicHostUrl') || '',
  hymnalApiUrl: localStorage.getItem('hymnalApiUrl') || ''
})

export const defaultValues = {
  obsWebsocketUrl: 'localhost:4455',
  hymnalApiUrl: 'https://sdah.my.to'
}