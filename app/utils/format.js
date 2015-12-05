function formatLyric(lyric) {
    if ( lyric.match(/\s/g) && !lyric.match(/[,]/g, "") ) {
      let formatedLyric = lyric.replace(/\s/g, "+");
      return formatedLyric;
    }
    else if ( lyric.match(/\s/g) && lyric.match(/[,]/g, "") ) {
      let formatedLyric = lyric.replace(/\s/g, "+")
      formatedLyric.replace(/[,]+/g, "")
      return formatedLyric;
    }
  }

  export {formatLyric};