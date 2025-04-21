export default {
  data: () => ({
    uid: Math.floor(Math.random() * 10 ** 10),
  }),
  methods: {
    dialogoMerge(dialogoObj, esActividad = false) {
      if (!dialogoObj.dialogo) return []
      return dialogoObj.dialogo.map((line, idx) => ({
        ...line,
        id: this.uid + idx + 1,
        textoIng: esActividad ? this.splitPhrase(line.textoIng) : line.textoIng,
        textoEsp: esActividad ? this.splitPhrase(line.textoEsp) : line.textoEsp,
        personaje:
          dialogoObj.personajes &&
          dialogoObj.personajes.find(
            personaje => personaje.nombre === line.personaje,
          ),
      }))
    },
    splitPhrase(phrase) {
      return phrase
        .replace(/^\s+|\s+$/g, '&nbsp;')
        .replace('***', '___*___')
        .split('___')
        .filter(Boolean)
    },
  },
}
